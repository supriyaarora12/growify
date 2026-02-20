/* eslint-disable @typescript-eslint/no-explicit-any */
// Form submission utility for API integration with React Query
import { apiClient } from './axiosConfig';
import { useMutation } from '@tanstack/react-query';

const CLIENT_ID = 'd2dc748b-20a7-4320-b901-cc072cb62833';

// Cache for IP address to avoid multiple calls
let ipAddressCache: string | null = null;
let ipAddressPromise: Promise<string> | null = null;

// Get user's timezone
const getTimezone = (): string => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (error) {
    return 'UTC';
  }
};

// Get user's IP address
const getIPAddress = async (): Promise<string> => {
  // Return cached IP if available
  if (ipAddressCache) {
    return ipAddressCache;
  }

  // Return existing promise if already fetching
  if (ipAddressPromise) {
    return ipAddressPromise;
  }

  // Fetch IP address
  const promise = fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then((data: { ip?: string }) => {
      ipAddressCache = data.ip || 'unknown';
      return ipAddressCache;
    })
    .catch(error => {
      console.error('Error fetching IP address:', error);
      return 'unknown';
    })
    .finally(() => {
      ipAddressPromise = null;
    });

  ipAddressPromise = promise;
  return promise;
};

// Form submission interface
export interface FormSubmissionData {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  inquiry: string;
  role: string;
}

// API response interface
interface FormSubmissionResponse {
  success: boolean;
  message?: string;
  error?: any;
}

// Prepare form payload (extracted for reuse)
const prepareFormPayload = async (formData: FormSubmissionData) => {
  // Validate required fields
  if (!formData.name || formData.name.trim() === '') {
    throw new Error('Name is required');
  }

  // Get timezone and IP address
  const timezone = getTimezone();
  const ipAddress = await getIPAddress();

  // Map form fields to API format (full_name and company_name are required)
  const formPayload: any = {
    full_name: formData.name.trim(),
    company_name: 'Not provided', // API requires this field
    timezone: timezone,
    ip_address: ipAddress
  };

  // Add optional fields only if they have values
  if (formData.email && formData.email.trim()) {
    formPayload.email = formData.email.trim();
  }
  if (formData.phone && formData.phone.trim()) {
    formPayload.phone = formData.phone.trim();
  }
  if (formData.inquiryType && formData.inquiryType.trim()) {
    formPayload.inquiry_type = formData.inquiryType.trim();
  }
  if (formData.inquiry && formData.inquiry.trim()) {
    formPayload.inquiry = formData.inquiry.trim();
  }
  if (formData.role && formData.role.trim()) {
    formPayload.role = formData.role.trim();
  }

  return {
    client_id: CLIENT_ID,
    form_data: formPayload
  };
};

// API function for form submission
const submitFormAPI = async (formData: FormSubmissionData): Promise<FormSubmissionResponse> => {
  try {
    const payload = await prepareFormPayload(formData);
    
    console.log('Form submission payload:', payload);

    const response = await apiClient.post('/forms', payload);
    
    console.log('Form submission response:', response.data);

    return {
      success: true,
      message: 'Form submitted successfully!'
    };
  } catch (error: any) {
    console.error('Form submission error:', error);

    // Extract error message from API response
    let errorMessage = 'Failed to submit form. Please try again.';
    
    if (error.response) {
      const errorData = error.response.data;
      
      if (errorData && typeof errorData === 'object') {
        if (errorData.detail && Array.isArray(errorData.detail)) {
          // Handle validation errors array
          const errorMessages = errorData.detail.map((err: any) => err.msg || err.message || 'Validation error').join(', ');
          errorMessage = errorMessages;
        } else if (errorData.detail && typeof errorData.detail === 'string') {
          errorMessage = errorData.detail;
        } else if (errorData.message) {
          errorMessage = errorData.message;
        }
      } else if (typeof errorData === 'string') {
        errorMessage = errorData;
      }
    } else if (error.message) {
      errorMessage = error.message;
    }

    return {
      success: false,
      error: error.response?.data || error,
      message: errorMessage
    };
  }
};

// React Query hook for form submission
export const useSubmitForm = () => {
  return useMutation<FormSubmissionResponse, Error, FormSubmissionData>({
    mutationFn: submitFormAPI,
    onSuccess: (data) => {
      console.log('Form submitted successfully:', data);
    },
    onError: (error) => {
      console.error('Form submission mutation error:', error);
    }
  });
};

// Legacy function for backward compatibility (if needed)
export const submitForm = async (formData: FormSubmissionData): Promise<FormSubmissionResponse> => {
  return submitFormAPI(formData);
};
