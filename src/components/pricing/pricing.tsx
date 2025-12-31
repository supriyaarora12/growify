'use client';

import React from 'react';
import { HiCheck, HiX } from 'react-icons/hi';
import { HiArrowRight } from 'react-icons/hi';

export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'Individuals',
      price: 70,
      description: 'For small businesses or startups looking to get started with AI-powered insights.',
      features: [
        { text: 'Data Integration', included: true },
        { text: 'Real-Time Sync', included: true },
        { text: 'Centralized Dashboard', included: true },
        { text: 'Advanced Reporting', included: true },
        { text: 'Email, Chat & Phone Support', included: false },
        { text: 'Campaign Automation (Full)', included: false },
        { text: 'Predictive Analytics', included: false },
        { text: 'Premium Support', included: false }
      ],
      isPopular: false
    },
    {
      id: 2,
      name: 'Professionals',
      price: 110,
      description: 'For small businesses or startups looking to get started with AI-powered insights.',
      features: [
        { text: 'Data Integration', included: true },
        { text: 'Real-Time Sync', included: true },
        { text: 'Centralized Dashboard', included: true },
        { text: 'Advanced Reporting', included: true },
        { text: 'Email, Chat & Phone Support', included: true },
        { text: 'Campaign Automation (Full)', included: true },
        { text: 'Predictive Analytics', included: false },
        { text: 'Premium Support', included: false }
      ],
      isPopular: true
    },
    {
      id: 3,
      name: 'Premium',
      price: 190,
      description: 'For small businesses or startups looking to get started with AI-powered insights.',
      features: [
        { text: 'Data Integration', included: true },
        { text: 'Real-Time Sync', included: true },
        { text: 'Centralized Dashboard', included: true },
        { text: 'Advanced Reporting', included: true },
        { text: 'Email, Chat & Phone Support', included: true },
        { text: 'Campaign Automation (Full)', included: true },
        { text: 'Predictive Analytics', included: true },
        { text: 'Premium Support', included: true }
      ],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="bg-white py-10 lg:py-20 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-12 lg:px-16">
        {/* Top Section - Label and Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-1 text-black px-5 py-2 rounded-full text-normal font-semibold mb-6">
            <span className="w-5 h-5 rounded-full bg-bgcolor"></span>
            Plans And Pricing
          </div>
          <h2 className="text-black text-3xl md:text-5xl lg:text-[62px] max-w-7xl font-bold mb-8 mx-auto" style={{ fontFamily: '"Host Grotesk", sans-serif', padding: '27px 0px 0px', color: '#000000' }}>
            Honest Pricing. No Surprises. No Credit Card Required.
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-8xl mx-auto">
           {plans.map((plan) => (
             <div
               key={plan.id}
               className={`p-[1px] ${plan.isPopular ? 'bg-black' : 'bg-gray-200'}`}
               style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)' }}
             >
               <div
                 className={`overflow-hidden shadow-lg h-full ${plan.isPopular ? 'pricing-popular bg-black' : 'bg-white'}`}
                 style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)' }}
               >
               {/* Top Section - Header, Price, Description */}
               <div className={`${plan.isPopular ? 'bg-bgcolor' : 'bg-gray-100'} m-3 p-6 lg:p-8`}>
                 <div className="flex items-center justify-between mb-10 lg:mb-14">
                   <div className="inline-flex items-center gap-2  text-black px-5 py-2 rounded-full text-normal font-semibold bg-white">
                     {plan.name}
                   </div>
                   {plan.isPopular && (
                     <div className="flex items-center gap-2">
                       <span className="w-3 h-3 rounded-full bg-black"></span>
                       <span className="text-sm font-semibold text-black">Most Popular</span>
                     </div>
                   )}
                 </div>
                 <div className="mb-4">
                   <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-black" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                     ${plan.price}
                   </span>
                   <span className="text-lg md:text-xl text-black ml-1" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                     /month
                   </span>
                 </div>
                 <p className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                   {plan.description}
                 </p>
               </div>

               {/* Bottom Section - Features */}
               <div className={`${plan.isPopular ? 'bg-black' : 'bg-white'} p-6 lg:p-8`}>
                <ul className="space-y-4 mb-6 lg:mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {feature.included ? (
                        <HiCheck className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isPopular ? 'text-[var(--bgcolor)]' : 'text-[var(--bgcolor)]'}`} />
                      ) : (
                        <HiX className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isPopular ? 'text-gray-500' : 'text-gray-400'}`} />
                      )}
                      <span className={`text-base ${plan.isPopular ? 'text-white' : 'text-black'}`} style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`py-5 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-colors overflow-hidden relative cursor-pointer w-full lg:w-auto ${
                    plan.isPopular
                      ? 'bg-[var(--bgcolor)] hover:bg-[#8fc038] text-black'
                      : 'bg-[var(--bgcolor)] hover:bg-[#8fc038] text-black'
                  }`}
                  style={{ fontFamily: '"Host Grotesk", sans-serif', marginLeft: '0', transition: 'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out' }}
                >
                  <span className="btn-wrap relative inline-block overflow-hidden">
                    <span className="text-one inline-block transition-transform duration-300">Get Started Today</span>
                    <span className="text-two absolute top-full left-0 w-full inline-block transition-transform duration-300">Get Started Today</span>
                  </span>
                  <HiArrowRight className="w-5 h-5 button-icon-scroll" />
                </button>
              </div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

