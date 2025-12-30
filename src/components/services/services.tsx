'use client';

import React from 'react';
import { HiArrowRight, HiArrowUpRight } from 'react-icons/hi2';
import { FaSearch, FaChartPie, FaHeadset } from 'react-icons/fa';

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
    <section className="bg-white py-20">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        {/* Header Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Left Side - Tag and Title */}
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-2 border border-1 text-black px-5 py-2 rounded-full text-normal font-semibold mb-6">
                <span className="w-5 h-5 rounded-full bg-[var(--bgcolor)]"></span>
                Business Services
              </div>
              <h2 className="text-black mb-6 text-6xl max-w-7xl font-bold" style={{ fontSize: '60px', fontFamily: '"Host Grotesk", sans-serif', padding: '20px 0px 0px', color: '#000000' }}>
                The Best Solution for Your<br />Business Growth
              </h2>
            </div>
            
            {/* Right Side - Description - Aligned with Card 3 */}
            <div className="flex items-start pt-32">
              <p style={{ fontSize: '16px', fontFamily: '"Host Grotesk", sans-serif', color: '#444444', lineHeight: '1.5' }}>
                intangible solutions designed to help companies operate smoothly, reduce costs, improve productivity, and enhance customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="service-card bg-white border border-gray-300 rounded-br-3xl p-8 hover:shadow-lg cursor-pointer"
                style={{ borderBottomRightRadius: '2rem', minHeight: '400px', clipPath: 'polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 80%, 0 0)' }}
              >
                {/* Icon */}
                <div className="mb-7 service-icon">
                  <IconComponent className="w-15 h-15 text-gray-600" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-4 service-title">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-600 text-base mb-6 service-subtitle">
                  {service.subtitle}
                </p>

                {/* Separator */}
                <div className="h-px bg-gray-300 mb-6 service-separator"></div>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-20 service-description">
                  {service.description}
                </p>

                {/* Action Button */}
                <button className="service-arrow flex items-center justify-center">
                  <HiArrowRight className="w-8 h-5 font-bold text-gray-700" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

