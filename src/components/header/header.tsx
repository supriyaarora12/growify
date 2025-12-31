'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineEnvelope, HiBars3, HiXMark } from 'react-icons/hi2';
import { FiPhone } from 'react-icons/fi';
import { logo, bg } from '@/asset';
import ContactDrawer from '@/components/contactDrawer/contactDrawer';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            <div className="relative h-full w-40 flex items-center justify-center">
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
          <nav className="hidden md:flex items-center gap-8 text-[var(--header-text-color)] text-sm font-semibold">
            <Link 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="hover:text-[#A9E448] transition-colors cursor-pointer"
            >
              Home
            </Link>
            <Link 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="hover:text-[#A9E448] transition-colors cursor-pointer"
            >
              About
            </Link>
            <Link 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="hover:text-[#A9E448] transition-colors cursor-pointer"
            >
              Services
            </Link>
            <Link 
              href="#team" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('team')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="hover:text-[#A9E448] transition-colors cursor-pointer"
            >
              Team
            </Link>
            <Link 
              href="#pricing" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="hover:text-[#A9E448] transition-colors cursor-pointer"
            >
              Pricing
            </Link>
            <Link 
              href="#blog" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="hover:text-[#A9E448] transition-colors cursor-pointer"
            >
              Blog
            </Link>
          </nav>

          {/* Right Section - Contact */}
          <div className="flex items-center gap-4">
            {/* Contact Us Button - Mobile and Desktop (lg+) */}
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="flex md:hidden lg:flex items-center gap-2 text-[var(--header-text-color)] text-sm font-sans cursor-pointer bg-transparent border border-[var(--header-text-color)] px-3 md:px-4 py-2 rounded-xl hover:bg-[#A9E448] hover:text-black hover:border-[#A9E448] outline-none overflow-hidden relative"
              style={{ transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out', fontFamily: '"Host Grotesk", sans-serif' }}
            >
              <HiOutlineEnvelope className="w-4 h-4 md:w-5 md:h-5 button-icon-scroll" />
              <span className="btn-wrap relative inline-block overflow-hidden">
                <span className="text-one inline-block transition-transform duration-300">Contact Us</span>
                <span className="text-two absolute top-full left-0 w-full inline-block transition-transform duration-300">Contact Us</span>
              </span>
            </button>

            {/* Call Now Button - Desktop Only (xl+) */}
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

            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-white hover:text-[#A9E448] transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <HiBars3 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[100] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#0B1714] z-[101] md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.3)' }}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="relative h-10 w-32">
            <Image
              src={logo}
              alt="Growify Logo"
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-10 h-10 text-white hover:text-[#A9E448] transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <HiXMark className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col p-6 h-[calc(100vh-80px)] overflow-y-auto">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 mb-8">
            <Link 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-white text-base font-semibold hover:text-[#A9E448] transition-colors cursor-pointer"
              style={{ fontFamily: '"Host Grotesk", sans-serif' }}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-white text-base font-semibold hover:text-[#A9E448] transition-colors cursor-pointer"
              style={{ fontFamily: '"Host Grotesk", sans-serif' }}
            >
              About
            </Link>
            <Link 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-white text-base font-semibold hover:text-[#A9E448] transition-colors cursor-pointer"
              style={{ fontFamily: '"Host Grotesk", sans-serif' }}
            >
              Services
            </Link>
            <Link 
              href="#team" 
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('team')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-white text-base font-semibold hover:text-[#A9E448] transition-colors cursor-pointer"
              style={{ fontFamily: '"Host Grotesk", sans-serif' }}
            >
              Team
            </Link>
            <Link 
              href="#pricing" 
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-white text-base font-semibold hover:text-[#A9E448] transition-colors cursor-pointer"
              style={{ fontFamily: '"Host Grotesk", sans-serif' }}
            >
              Pricing
            </Link>
            <Link 
              href="#blog" 
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="text-white text-base font-semibold hover:text-[#A9E448] transition-colors cursor-pointer"
              style={{ fontFamily: '"Host Grotesk", sans-serif' }}
            >
              Blog
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-white/10">
            <button 
              onClick={() => {
                setIsDrawerOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 text-white text-sm font-sans cursor-pointer bg-transparent border border-white px-4 py-3 rounded-xl hover:bg-[#A9E448] hover:text-black hover:border-[#A9E448] outline-none transition-all"
              style={{ fontFamily: '"Host Grotesk", sans-serif' }}
            >
              <HiOutlineEnvelope className="w-5 h-5" />
              <span>Contact Us</span>
            </button>

            <button 
              className="flex items-center justify-center gap-2 text-black text-sm font-sans cursor-pointer bg-[#A9E448] border border-[#A9E448] px-4 py-3 rounded-xl hover:bg-transparent hover:text-white hover:border-white outline-none transition-all"
              style={{ fontFamily: '"Host Grotesk", sans-serif' }}
            >
              <FiPhone className="w-5 h-5" />
              <span>Call Now</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Contact Drawer */}
      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </header>
  );
}

