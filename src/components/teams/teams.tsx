'use client';

import React from 'react';
import Image from 'next/image';
import { t1, t2, t3, leads } from '@/asset';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FcGoogle } from 'react-icons/fc';

export default function Teams() {
  const teamMembers = [
    {
      id: 1,
      role: 'Expert Consultant',
      name: 'Thomas Willimes',
      description: 'Senior Business Consultant with over 10 years of experience in strategy and operations.',
      image: t1
    },
    {
      id: 2,
      role: 'Expert Consultant',
      name: 'Sarah Johnson',
      description: 'Senior Business Consultant with over 10 years of experience in strategy and operations.',
      image: t2
    },
    {
      id: 3,
      role: 'Creative Director',
      name: 'Sophia Martinez',
      description: 'Senior Business Consultant with over 10 years of experience in strategy and operations.',
      image: leads
    },
    {
      id: 4,
      role: 'Comunity manager',
      name: 'Olivia Harris',
      description: 'Senior Business Consultant with over 10 years of experience in strategy and operations.',
      image: t3
    }
  ];

  return (
    <section id="team" className="bg-white py-20 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-12 lg:px-16">
        {/* Top Section - Label and Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-1 text-black px-5 py-2 rounded-full text-normal font-semibold mb-6">
            <span className="w-5 h-5 rounded-full bg-[var(--bgcolor)]"></span>
            Meet Our Team
          </div>
          <h2 className="text-black text-3xl md:text-5xl lg:text-[60px] font-bold mb-8" style={{ fontFamily: '"Host Grotesk", sans-serif', padding: '20px 0px 0px', color: '#000000' }}>
            Our Leadership & Team
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => {
            // Use different border color for the first card (index 0) as "Popular" card
            const isPopular = index === 0;
            const borderColor = isPopular ? 'bg-gray-200' : 'bg-gray-200';
            
            return (
              <div 
                key={member.id}
                className="relative overflow-visible w-full mx-auto"
                style={{ minHeight: 'auto', height: 'auto' }}
              >
                {/* Outer container with clip-path and border color */}
                <div 
                  className={`p-[1px] ${borderColor} w-full h-auto md:h-[380px] lg:h-[480px] xl:h-[352.4px]`}
                  style={{ 
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)'
                  }}
                >
                  {/* Inner card with clip-path and white background */}
                  <div 
                    className="bg-white p-6 lg:p-8 hover:shadow-lg transition-shadow hover:bg-gray-100 cursor-pointer relative h-full"
                    style={{ 
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)'
                    }}
                  >
                    {/* Mobile Image - Above text on mobile */}
                    <div className="relative md:hidden mb-6 flex justify-center">
                      <div className="relative overflow-hidden w-[200px] h-[250px]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col h-full pr-0 md:pr-[280px] lg:pr-[220px] xl:pr-64 text-center md:text-left">
                      <div className="text-normal font-semibold text-black mb-2" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                        {member.role}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6 lg:mb-15" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                        {member.name}
                      </h3>
                      <div className="h-0.5 bg-gray-400 mb-4 lg:mb-8" style={{ width: '100%', borderTop: '1px solid #9ca3af' }}></div>
                      <p className="text-gray-600 text-base leading-relaxed mb-4 lg:mb-6 flex-1" style={{ fontFamily: '"Host Grotesk", sans-serif', textAlign: 'inherit' }}>
                        {member.description}
                      </p>
                      
                      {/* Social Media Icons */}
                      <div className="flex gap-3 justify-center md:justify-start">
                        <button className="w-12 h-12 rounded-full border border-gray-500 hover:bg-gray-100 flex items-center justify-center transition-colors cursor-pointer">
                          <CiFacebook className="w-8 h-8 text-gray-700" />
                        </button>
                        <button className="w-12 h-12 rounded-full border border-gray-500 hover:bg-gray-100 flex items-center justify-center transition-colors cursor-pointer">
                          <FcGoogle className="w-8 h-8" />
                        </button>
                        <button className="w-12 h-12 rounded-full border border-gray-500 hover:bg-gray-100 flex items-center justify-center transition-colors cursor-pointer">
                          <CiLinkedin className="w-8 h-8 text-gray-700" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Image - Right side (absolute positioning) */}
                <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-20" style={{ clipPath: 'none' }}>
                  <div className="relative overflow-hidden w-[200px] lg:w-[180px] xl:w-[250px] h-[256px] lg:h-[230px] xl:h-[320.8px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

