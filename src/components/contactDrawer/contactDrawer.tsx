'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { contactus } from '@/asset';
import { FcGoogle } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa6';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { FaFacebook, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[101] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)' }}
      >
        <div className="h-full flex flex-col overflow-y-auto m-2 border-4 border-black">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10  border-4 border-white  rounded-full flex items-center justify-center text-black transition-colors cursor-pointer"
          >
            <FaXmark className="w-5 h-5  text-white" />
          </button>

          {/* Image Section - Top */}
          <div className="relative w-full h-80 md:h-96">
            <Image
              src={contactus}
              alt="Contact Us"
              fill
              className="object-cover"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0, 100% 75%, 85% 100%, 0% 100%)'
              }}
            />
            {/* Rating Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="bg-[#00000080] text-[#212529] text-base  font-sans px-5 py-3 rounded-full flex items-center gap-3 max-w-fit">
                <FcGoogle className="w-6 h-6 flex-shrink-0" />
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <FaStar className="text-yellow-400 w-4 h-4" />
                </div>
                <span className="text-gray-400 text-sm whitespace-nowrap">4.9 out of 5 rating</span>
              </div>
            </div>
            
           
          </div>

          {/* Text Section - Middle */}
          <div className="bg-white p-8 flex-1">
            {/* Title */}
            <h2 className="text-4xl font-bold text-black mb-8">Expert Consulting!</h2>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--bgcolor)] flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">5609 E Sprague Ave, Spokane Valley, WA 99212, USA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--bgcolor)] flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPhone className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">+1-394-495-5993</p>
                  <p className="text-gray-500 text-xs">24/7 available, call us anytime</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--bgcolor)] flex items-center justify-center flex-shrink-0 mt-1">
                  <FaEnvelope className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">consultingname@domain.com</p>
                  <p className="text-gray-600 text-sm">infoconsulting@domain.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Icons Section - Bottom */}
          <div className="bg-white px-8 pb-8">
            <div className="flex gap-3">
              <button type="button" className="w-12 h-12 bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors cursor-pointer">
                <FaFacebook className="w-5 h-5" />
              </button>
              <button type="button" className="w-12 h-12 bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors cursor-pointer">
                <FaLinkedin className="w-5 h-5" />
              </button>
              <button type="button" className="w-12 h-12 bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors cursor-pointer">
                <FaXTwitter className="w-5 h-5" />
              </button>
              <button type="button" className="w-12 h-12 bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-white transition-colors cursor-pointer">
                <FaInstagram className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

