'use client';

import React from 'react';
import { HiArrowRight, HiArrowUpRight } from 'react-icons/hi2';
import { FaSearch, FaChartPie, FaHeadset } from 'react-icons/fa';
import { trackButtonClick } from '@/utils/buttonTracking';

export default function Services() {
  const services = [
    {
      icon: FaSearch,
      title: 'Digital Marketing',
      subtitle: 'SEO, social media, PPC, email campaigns.',
      description: 'A custom logo design is a crucial part of your overall branding process. Your logo design is a significant.'
    },
    {
      icon: FaChartPie,
      title: 'Investment & Advisory',
      subtitle: 'Wealth management, financial planning',
      description: 'A custom logo design is a crucial part of your overall branding process. Your logo design is a significant.'
    },
    {
      icon: FaHeadset,
      title: 'Consulting Services',
      subtitle: 'Business, financial, strategy, or management',
      description: 'A custom logo design is a crucial part of your overall branding process. Your logo design is a significant.'
    }
  ];

  return (
    <section id="services" className="bg-white py-20 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-12 lg:px-16">
        {/* Header Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Left Side - Tag and Title */}
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-2 border border-1 text-black px-5 py-2 rounded-full text-normal font-semibold mb-6">
                <span className="w-5 h-5 rounded-full bg-[var(--bgcolor)]"></span>
                Business Services
              </div>
              <h2 className="text-black mb-6 text-3xl md:text-5xl lg:text-[60px] max-w-7xl font-bold" style={{ fontFamily: '"Host Grotesk", sans-serif', padding: '20px 0px 0px', color: '#000000' }}>
                The Best Solution for Your<br className="hidden lg:block" />Business Growth
              </h2>
            </div>
            
            {/* Right Side - Description - Aligned with Card 3 */}
            <div className="flex items-start pt-4 lg:pt-32">
              <p style={{ fontSize: '16px', fontFamily: '"Host Grotesk", sans-serif', color: '#444444', lineHeight: '1.5' }}>
                intangible solutions designed to help companies operate smoothly, reduce costs, improve productivity, and enhance customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:-mt-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const borderColor = 'bg-gray-200';
            
            return (
              <div 
                key={index}
                className={`p-[1px] ${borderColor}`}
                style={{ 
                  clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)'
                }}
              >
                <div 
                  className="service-card group bg-white hover:bg-black p-8 hover:shadow-lg cursor-pointer relative min-h-[350px] lg:min-h-[400px] transition-colors duration-300"
                  style={{ 
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)'
                  }}
                >
                  {/* Icon */}
                  <div className="mb-7 service-icon">
                    <IconComponent className="w-15 h-15 text-gray-600 group-hover:text-[var(--bgcolor)] transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 service-title text-black group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-base mb-6 service-subtitle text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                    {service.subtitle}
                  </p>

                  {/* Separator */}
                  <div className="h-px mb-6 service-separator bg-gray-300 group-hover:bg-gray-600 transition-colors duration-300"></div>

                  {/* Description */}
                  <p className="text-base leading-relaxed mb-20 service-description text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Action Button */}
                  <button onClick={() => trackButtonClick(`services-${service.title.toLowerCase().replace(/\s+/g, '-')}`)} className="service-arrow flex items-center justify-center cursor-pointer group-hover:bg-[var(--bgcolor)] transition-colors duration-300">
                    <HiArrowRight className="w-8 h-5 font-bold text-gray-700 group-hover:text-black transition-colors duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

