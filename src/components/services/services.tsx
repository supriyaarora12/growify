'use client';

import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
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
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Left Side - Tag and Title */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 border border-1 text-black px-5 py-2 rounded-full text-normal font-semibold mb-6">
                <span className="w-5 h-5 rounded-full bg-[var(--bgcolor)]"></span>
                Business Services
              </div>
              <h2 className="text-black text-6xl lg:text-6xl  lg:max-w-[9xl] font-bold" style={{ fontFamily: '"Host Grotesk", sans-serif', lineHeight: '1.2' }}>
                The Best Solutions for Your Business Growth
              </h2>
            </div>
            
            {/* Right Side - Description */}
            <div className="flex-1 lg:max-w-xl">
              <p className="text-gray-600  mt-36 text-normal leading-relaxed">
                intangible solutions designed to help companies operate smoothly, reduce costs, improve productivity, and enhance customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-300 rounded-br-3xl p-8 hover:shadow-lg transition-shadow cursor-pointer"
                style={{ borderBottomRightRadius: '2rem' }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <IconComponent className="w-12 h-12 text-gray-600" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-2">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-600 text-sm mb-4">
                  {service.subtitle}
                </p>

                {/* Separator */}
                <div className="h-px bg-gray-300 mb-4"></div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Action Button */}
                <button className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                  <HiArrowUpRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

