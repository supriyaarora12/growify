'use client';

import React from 'react';
import Image from 'next/image';
import { p1, p2, p3, p4, p5, p6, p7, p8 } from '@/asset';

const Partnership = () => {
  const partners = [p1, p2, p3, p4, p5, p6, p7, p8];

  return (
    <section className="py-10 lg:py-20">
      <div className="container mx-auto px-4 md:px-12 lg:px-16 max-w-9xl">
        <div className="rounded-2xl p-6 md:p-10 lg:p-12" style={{ backgroundColor: '#EFEFEF' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text and Statistics */}
          <div className="lg:col-span-5 order-1 lg:order-none">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 border border-1 text-black px-3 py-2 rounded-full text-normal font-semibold mb-6 bg-white">
              <span className="w-5 h-5 rounded-full bg-[var(--bgcolor)]"></span>
              In Partnership With
            </div>

            {/* Main Heading */}
            <h2 
              className="text-black text-3xl md:text-5xl lg:text-[63px] font-bold mb-6" 
              style={{ 
                fontFamily: '"Host Grotesk", sans-serif', 
                padding: '20px 0px 0px', 
                color: '#000000',
                lineHeight: '1.2'
              }}
            >
              Valued Partner &<br className="hidden lg:inline" />Sponsors
            </h2>

            {/* Description */}
            <p 
              className="text-gray-600 text-base leading-relaxed mb-10 lg:mb-20" 
              style={{ 
                fontFamily: '"Host Grotesk", sans-serif',
                color: '#444444',
                lineHeight: '1.5'
              }}
            >
              Supported by our trusted partners and sponsors who share our vision and help us grow stronger together.
            </p>

            {/* Separator Line */}
            <div className="h-px bg-gray-300 mb-10"></div>

            {/* Statistics */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-sans text-black mb-2" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                  25M
                </div>
                <p className="text-gray-600 text-sm" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                  Happy Client  Satisfaction
                </p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-sans text-black mb-2" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                  164K
                </div>
                <p className="text-gray-600 text-sm" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                  Happy Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Partner Logos Grid */}
          <div className="lg:col-span-7 order-2 lg:order-none">
            {/* Mobile View - Single List */}
            <div className="grid grid-cols-2 gap-4 ml-0 lg:hidden">
              {partners.map((partner, index) => (
                <div key={index} className="mb-4">
                  <div className="bg-white rounded-full p-4 md:p-6 flex items-center justify-center hover:shadow-md transition-shadow" style={{ minHeight: '120px' }}>
                    <Image
                      src={partner}
                      alt={`Partner ${index + 1}`}
                      width={150}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View - Duplicated for Animation */}
            <div className="hidden lg:grid grid-cols-2 gap-4 ml-12">
              <div className="overflow-hidden h-[550px]">
                <ul className="sponsors">
                  {[...partners, ...partners].map((partner, index) => (
                    <li key={index} className="mb-4">
                      <div className="bg-white rounded-full p-6 flex items-center justify-center hover:shadow-md transition-shadow" style={{ minHeight: '120px' }}>
                        <Image
                          src={partner}
                          alt={`Partner ${index + 1}`}
                          width={150}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden h-[550px]">
                <ul className="sponsors">
                  {[...partners, ...partners].map((partner, index) => (
                    <li key={`duplicate-${index}`} className="mb-4">
                      <div className="bg-white rounded-full p-6 flex items-center justify-center hover:shadow-md transition-shadow" style={{ minHeight: '120px' }}>
                        <Image
                          src={partner}
                          alt={`Partner ${index + 1}`}
                          width={150}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;

