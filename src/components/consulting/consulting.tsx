'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { bg, li1, li2, li3, li4 } from '@/asset';
import { FcGoogle } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa6';

export default function Consulting() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    inquiry: '',
    role: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const inquiryOptions = [
    { value: '', label: 'General Inquiry' },
    { value: 'Partnership', label: 'Partnership' },
    { value: 'Support', label: 'Support' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleOptionSelect = (value: string) => {
    setFormData({
      ...formData,
      inquiryType: value
    });
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="relative min-h-screen flex items-center py-30">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0B1714]/80"></div>
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-end">
          {/* Left Section - Content */}
          <div className="text-white mt-10">
            <h1 className="text-6xl md:text-5xl lg:text-7xl font-bold mb-10 leading-tight">
              Focus on growing<br />
              <span className="block mt-4">your business.</span>
            </h1>
            <p className="text-[22px] font-sans mt-10 text-[#C7C7C7] py-[10px] pb-[50px]">
              Our comprehensive office support services<br />
              take care of everything from administrative tasks<br />
              to technical troubleshooting.
            </p>
            
            {/* CTA Button */}
            <button 
              className="bg-[var(--bgcolor)] hover:bg-[#8fc038] text-black font-semibold rounded-xl px-8 py-4 flex items-center gap-2 mb-12 overflow-hidden relative"
              style={{ transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out' }}
            >
              <span className="btn-wrap relative inline-block overflow-hidden">
                <span className="text-one inline-block transition-transform duration-300">Get Started For Free</span>
                <span className="text-two absolute top-full left-0 w-full inline-block transition-transform duration-300">Get Started For Free</span>
              </span>
              <svg className="w-5 h-5 transition-transform duration-300 button-icon-scroll" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Profile Pictures and Rating */}
            <div className="mb-4">
              <div className="flex items-start justify-between -mb-18">
                {/* Profile Pictures */}
                <div className="flex">
                  <div className="w-16 h-16 rounded-full border-4 border-black overflow-hidden relative z-[1]">
                    <Image src={li1} alt="Client 1" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-black overflow-hidden -ml-4 relative z-[2]">
                    <Image src={li2} alt="Client 2" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-black overflow-hidden -ml-4 relative z-[3]">
                    <Image src={li3} alt="Client 3" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-black overflow-hidden -ml-4 relative z-[4]">
                    <Image src={li4} alt="Client 4" width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* Google Rating Box */}
                <div className="goole-star bg-[#BEBEBE2B] text-[#212529] text-base border-3 border-gray-400 font-sans pt-[25px] pr-[35px] pb-[17px] pl-[25px] flex flex-col items-center gap-3">
                  <FcGoogle className="w-10 h-10 " />
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <FaStar className="text-yellow-400 w-4 h-4" />
                  </div>
                  <div className="text-gray-400 text-sm  gap-4 text-center">
                    <div>4.9 out of 5</div>
                    <div>rating</div>
                  </div>
                </div>
              </div>
              <p className="text-white text-lg">
                Our clients are ambitious businesses that  understand the<br />
                value of efficiency.
              </p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div 
            className="bg-[#8D8D8D5C] backdrop-blur-sm  p-15 shadow-2xl"
            style={{
              marginLeft: 'auto',
              backdropFilter: 'blur(15px)',
              clipPath: 'polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 80%, 0 0)'
            }}
          >
            <div className="mb-6">
              <p className="text-white text-sm mb-2">Expert Consulting Queries & Solutions</p>
              <h2 className="text-4xl font-bold text-white">Consulting Queries?</h2>
            </div>

            <form id="contact-form" className="get-a-quote text-[#212529] text-base font-sans space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Complete Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="@johnsmith"
                    className="w-full bg-transparent border border-gray-400 text-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--bgcolor)] placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="user@domain.com"
                    className="w-full bg-transparent border border-gray-400 text-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--bgcolor)] placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Phone No</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone No"
                    className="w-full bg-transparent border border-gray-400 text-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--bgcolor)] placeholder:text-gray-500"
                  />
                </div>
                <div className="relative">
                  <label className="block text-white text-sm font-medium mb-2">Inquiry Type</label>
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-transparent border border-gray-400 text-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--bgcolor)] appearance-none cursor-pointer text-left flex items-center justify-between"
                    >
                      <span>
                        {formData.inquiryType 
                          ? inquiryOptions.find(opt => opt.value === formData.inquiryType)?.label 
                          : 'General Inquiry'}
                      </span>
                      <svg 
                        className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isDropdownOpen && (
                      <div className="absolute z-50 w-full mt-1 bg-white border border-gray-400 rounded-xl overflow-hidden shadow-lg">
                        {inquiryOptions.map((option) => {
                          const isSelected = formData.inquiryType === option.value || (!formData.inquiryType && option.value === '');
                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => handleOptionSelect(option.value)}
                              className={`w-full text-left px-4 py-3 transition-colors ${
                                isSelected
                                  ? 'bg-white text-[#212529] font-semibold'
                                  : option.value === '' && !formData.inquiryType
                                  ? 'bg-[#212529] text-white font-semibold'
                                  : 'bg-white text-[#212529] hover:bg-gray-100'
                              }`}
                            >
                              {option.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Inquiry</label>
                <textarea
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  placeholder="Write your inquiry..."
                  rows={4}
                  className="w-full bg-transparent border border-gray-400 text-gray-300 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[var(--bgcolor)] resize-none placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-3">Role</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="Owner/Partner"
                      checked={formData.role === 'Owner/Partner'}
                      onChange={handleChange}
                      className="mr-2 text-[var(--bgcolor)] accent-[var(--bgcolor)]"
                    />
                    <span className="text-white">Owner/Partner</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="Manager"
                      checked={formData.role === 'Manager'}
                      onChange={handleChange}
                      className="mr-2 text-[var(--bgcolor)] accent-[var(--bgcolor)]"
                    />
                    <span className="text-white">Manager</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="Employee"
                      checked={formData.role === 'Employee'}
                      onChange={handleChange}
                      className="mr-2 text-[var(--bgcolor)] accent-[var(--bgcolor)]"
                    />
                    <span className="text-white">Employee</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="bg-[var(--bgcolor)] hover:bg-[#8fc038] text-black font-semibold rounded-xl px-8 py-4 overflow-hidden relative"
                  style={{ transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out' }}
                >
                  <span className="btn-wrap relative inline-block overflow-hidden">
                    <span className="text-one inline-block transition-transform duration-300">Submit Now</span>
                    <span className="text-two absolute top-full left-0 w-full inline-block transition-transform duration-300">Submit Now</span>
                  </span>
                </button>
                <div className="flex gap-3">
                  <button type="button" className="w-12 h-12 rounded-full border border-white hover:bg-gray-600 flex items-center justify-center text-white transition-colors">
                    <span className="text-xl font-bold">f</span>
                  </button>
                  <button type="button" className="w-12 h-12 rounded-full border border-white hover:bg-gray-600 flex items-center justify-center text-white transition-colors">
                    <span className="text-xl font-bold">G+</span>
                  </button>
                  <button type="button" className="w-12 h-12 rounded-full border border-white hover:bg-gray-600 flex items-center justify-center text-white transition-colors">
                    <span className="text-xl font-bold">in</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

