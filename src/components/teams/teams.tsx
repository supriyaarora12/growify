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
      role: 'Community Manager',
      name: 'Olivia Harris',
      description: 'Senior Business Consultant with over 10 years of experience in strategy and operations.',
      image: t3
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        {/* Top Section - Label and Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-1 text-black px-5 py-2 rounded-full text-normal font-semibold mb-6">
            <span className="w-5 h-5 rounded-full bg-[var(--bgcolor)]"></span>
            Meet Our Team
          </div>
          <h2 className="text-black text-5xl lg:text-6xl font-bold mb-8" style={{ fontSize: '60px', fontFamily: '"Host Grotesk", sans-serif', padding: '20px 0px 0px', color: '#000000' }}>
            Our Leadership & Team
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="relative overflow-visible"
              style={{ width: '676px', maxWidth: '100%', minHeight: '352.4px' }}
            >
              {/* Card with clip-path */}
              <div 
                className="bg-white border border-gray-300  p-8 hover:shadow-lg transition-shadow cursor-pointer relative"
                style={{ width: '676px', height: '352.4px', maxWidth: '100%', clipPath: 'polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 80% 100%, 0 100%, 0% 80%, 0 0)' }}
              >
                {/* Left Side - Text Content */}
                <div className="flex flex-col h-full pr-64">
                  <div className="text-base font-semibold text-black mb-2" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                    {member.role}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-15" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                    {member.name}
                  </h3>
                  <div className="h-px bg-gray-300 mb-8"></div>
                  <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                    {member.description}
                  </p>
                  
                  {/* Social Media Icons */}
                  <div className="flex gap-3">
                    <button className="w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center justify-center transition-colors">
                      <CiFacebook className="w-8 h-8 text-gray-700" />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center justify-center transition-colors">
                      <FcGoogle className="w-8 h-8" />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100 flex items-center justify-center transition-colors">
                      <CiLinkedin className="w-8 h-8 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Image (positioned at right end, extending above and below card) */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20" style={{ clipPath: 'none' }}>
                <div className="relative  overflow-hidden" style={{ width: '250px', height: '320.8px' }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

