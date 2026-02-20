// Button tracking utility for API integration
import { apiClient } from './axiosConfig';

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

  // Fetch IP address (using fetch for external API)
  ipAddressPromise = fetch('https://api.ipify.org?format=json')
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

  return ipAddressPromise;
};

// Track button click
export const trackButtonClick = async (buttonId: string): Promise<void> => {
  try {
    // Get timezone and IP address
    const timezone = getTimezone();
    const ipAddress = await getIPAddress();

    // Prepare request payload
    const payload = {
      client_id: CLIENT_ID,
      button_id: buttonId,
      count: 1,
      timezone: timezone,
      ip_address: ipAddress
    };

    // Debug: Log the payload being sent
    console.log('Button tracking payload:', payload);

    // Make API call (fire and forget - don't block UI)
    apiClient.post('/forms/metadata', payload)
      .then(response => {
        console.log('Button tracking success:', response.data);
      })
      .catch(error => {
        // Silently handle errors - don't break user experience
        if (error.response) {
          console.error('Button tracking API error:', {
            status: error.response.status,
            error: error.response.data || 'No error details available'
          });
        } else {
          console.error('Button tracking network error:', error.message);
        }
      });
  } catch (error) {
    // Silently handle errors - don't break user experience
    console.error('Button tracking error:', error);
  }
};

