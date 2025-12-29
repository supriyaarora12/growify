'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowUp } from 'react-icons/hi2';
import { FaStar } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { RiTwitterXLine } from 'react-icons/ri';
import { PiInstagramLogoLight } from 'react-icons/pi';
import { li1, li2, li3, li4 } from '@/asset';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white font-sans pt-[120px] text-base">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        {/* Top Section - Social Media Links */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="bg-gray-800 hover:bg-gray-700 rounded-lg w-[350px] h-[60px] flex items-center justify-between text-[#212529] text-base font-sans px-6 transition-colors">
            <span className="text-white">Facebook</span>
            <CiFacebook className="w-6 h-6 text-white" />
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 rounded-lg w-[350px] h-[60px] flex items-center justify-between text-[#212529] text-base font-sans px-6 transition-colors">
            <span className="text-white">Linkedin</span>
            <CiLinkedin className="w-6 h-6 text-white" />
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 rounded-lg w-[350px] h-[60px] flex items-center justify-between text-[#212529] text-base font-sans px-6 transition-colors">
            <span className="text-white">Twitter</span>
            <RiTwitterXLine className="w-6 h-6 text-white" />
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 rounded-lg w-[350px] h-[60px] flex items-center justify-between text-[#212529] text-base font-sans px-6 transition-colors">
            <span className="text-white">Instagram</span>
            <PiInstagramLogoLight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Middle Section - Three Columns */}
        <div className="flex justify-center gap-4 mb-16 mx-[-12px] pt-[120px] text-base font-sans">
          {/* Expertise Column - Aligned with Facebook */}
          <div className="w-[350px] flex-shrink-0 ml-16">
            <h2 className="text-[var(--bgcolor)] text-2xl font-semibold mb-4">Expertise</h2>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-white hover:text-[var(--bgcolor)] transition-colors">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[var(--bgcolor)] transition-colors">
                  Financial Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[var(--bgcolor)] transition-colors">
                  Technology Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[var(--bgcolor)] transition-colors">
                  Marketing Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[var(--bgcolor)] transition-colors">
                  HR & Recruitment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[var(--bgcolor)] transition-colors">
                  Changelog Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column - Aligned with LinkedIn */}
          <div className="w-[350px] flex-shrink-0 ">
            <h2 className="text-[var(--bgcolor)] text-2xl font-semibold mb-4">Links.</h2>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-white hover:text-[var(--bgcolor)] transition-colors">
                  Company history
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[var(--bgcolor)] transition-colors">
                  List of offerings
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[var(--bgcolor)] transition-colors">
                  Custom quotes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[var(--bgcolor)] transition-colors">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[var(--bgcolor)] transition-colors">
                  Customer support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-[var(--bgcolor)] transition-colors">
                  Client Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Column - Aligned with Twitter */}
          <div className="w-[350px] flex-shrink-0 ">
            <h2 className="text-[var(--bgcolor)] text-2xl font-semibold mb-4">Subscribe to the newsletter.</h2>
            <p className="text-white  mb-4">Get seasonal cleaning tips,exclusive offers & more</p>
            
            {/* Newsletter Form */}
            <form id="subscribe-form" className="footer-form subscribe-form flex gap-2 mt-5 mb-10 text-[#212529] text-base font-sans">
              <input
                type="email"
                placeholder="thomas@domain.com"
                className="flex-1 bg-gray-800 text-white font-semibold rounded-xl px-25 py-5 focus:outline-none focus:ring-2 focus:ring-[var(--bgcolor)]"
              />
              <button
                type="submit"
                className="bg-[var(--bgcolor)] hover:bg-[#8fc038] text-black font-semibold rounded-xl px-10 py-5 flex items-center gap-3 transition-colors"
              >
                <span>Subscribe</span>
                <HiArrowUp className="w-4 h-4 rotate-45" />
              </button>
            </form>

            {/* Profile Pictures */}
            <div className="flex mb-3">
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
            <p className="text-white text-lg">Connect With 7,000+ Professionals.</p>
          </div>
          {/* Placeholder for Instagram button alignment */}
          <div className="w-[350px] flex-shrink-0"></div>
        </div>

        {/* Bottom Section - Copyright and Rating */}
        <div className="flex justify-center">
          <div className="border-t border-gray-800 pt-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 w-full max-w-[1448px]">
          <p className="text-white text-sm font-semibold">
            Copyright © 2025 Grithub by Winsfolio. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <FcGoogle className="w-6 h-6" />
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400 w-4 h-4" />
              <FaStar className="text-yellow-400 w-4 h-4" />
              <FaStar className="text-yellow-400 w-4 h-4" />
              <FaStar className="text-yellow-400 w-4 h-4" />
              <FaStar className="text-yellow-400 w-4 h-4" />
            </div>
            <span className="text-white text-sm">4.9 out of 5 rating</span>
          </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <HiArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}

