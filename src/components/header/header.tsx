import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { FiPhone } from 'react-icons/fi';
import { logo, bg } from '@/asset';

export default function Header() {
  return (
    <header className="fixed top-0 z-[50] w-full text-white">
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
      <div className="container mx-auto px-8 md:px-12 lg:px-16 py-3 relative z-10">
        <div className="flex items-center justify-between h-14">
          {/* Left Section - Logo */}
          <div className="flex items-center h-full">
            {/* Logo */}
            <div className="relative h-full w-32 flex items-center justify-center">
              <Image
                src={logo}
                alt="Growify Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Center Section - Navigation Menu */}
          <nav className="hidden md:flex items-center gap-8 text-[var(--header-text-color)] text-sm font-sans">
            <Link href="#home" className="hover:text-[#A9E448] transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#A9E448] transition-colors cursor-pointer">
              About
            </Link>
            <Link href="#services" className="hover:text-[#A9E448] transition-colors cursor-pointer">
              Services
            </Link>
            <Link href="#team" className="hover:text-[#A9E448] transition-colors cursor-pointer">
              Team
            </Link>
            <Link href="#pricing" className="hover:text-[#A9E448] transition-colors cursor-pointer">
              Pricing
            </Link>
            <Link href="#blog" className="hover:text-[#A9E448] transition-colors cursor-pointer">
              Blog
            </Link>
          </nav>

          {/* Right Section - Contact */}
          <div className="flex items-center gap-6">
            {/* Contact Us Button */}
            <button 
              className="hidden lg:flex items-center gap-2 text-[var(--header-text-color)] text-sm font-sans cursor-pointer bg-transparent border border-[var(--header-text-color)] px-4 py-2 rounded-xl hover:bg-[#A9E448] hover:text-black hover:border-[#A9E448] outline-none overflow-hidden relative"
              style={{ transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out' }}
            >
              <HiOutlineEnvelope className="w-5 h-5 button-icon-scroll" />
              <span className="btn-wrap relative inline-block overflow-hidden">
                <span className="text-one inline-block transition-transform duration-300">Contact Us</span>
                <span className="text-two absolute top-full left-0 w-full inline-block transition-transform duration-300">Contact Us</span>
              </span>
            </button>

            {/* Call Now Button */}
            <button 
              className="hidden xl:flex items-center gap-2 text-black text-sm font-sans cursor-pointer bg-[#A9E448] border border-[#A9E448] px-4 py-2 rounded-xl hover:bg-transparent hover:text-white hover:border-white outline-none overflow-hidden relative"
              style={{ transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out' }}
            >
              <FiPhone className="w-5 h-5 button-icon-scroll" />
              <span className="btn-wrap relative inline-block overflow-hidden">
                <span className="text-one inline-block transition-transform duration-300">Call Now</span>
                <span className="text-two absolute top-full left-0 w-full inline-block transition-transform duration-300">Call Now</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

