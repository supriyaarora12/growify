'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { work } from '@/asset';

export default function Work() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: 1,
      heading: 'Request a Free Consultation',
      description: 'Our experts begin with a thorough inspection of your property to identify the type of pests and assess the extent of the infestation. We\'ll find where they\'re hiding, how they\'re getting in, and what\'s keeping them around.'
    },
    {
      step: 2,
      heading: 'Get Your Customized Plan',
      description: 'Our experts begin with a thorough inspection of your property to identify the type of pests and assess the extent of the infestation. We\'ll find where they\'re hiding, how they\'re getting in, and what\'s keeping them around.'
    },
    {
      step: 3,
      heading: 'Unlock Opportunities',
      description: 'Our experts begin with a thorough inspection of your property to identify the type of pests and assess the extent of the infestation. We\'ll find where they\'re hiding, how they\'re getting in, and what\'s keeping them around.'
    },
    {
      step: 4,
      heading: 'Scale With Confidence',
      description: 'Our experts begin with a thorough inspection of your property to identify the type of pests and assess the extent of the infestation. We\'ll find where they\'re hiding, how they\'re getting in, and what\'s keeping them around.'
    }
  ];

  const currentStepData = steps.find(s => s.step === activeStep) || steps[0];

  return (
    <section className="bg-[var(--bgcolor)] py-20">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        {/* Top Section - Label */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2  text-black px-5 py-2 rounded-full text-normal font-semibold mb-6 bg-white">
            <span className="w-5 h-5 rounded-full bg-bgcolor"></span>
            How It Works
          </div>
          <h2 className="text-black text-5xl lg:text-6xl font-bold mb-8" style={{ fontSize: '60px', fontFamily: '"Host Grotesk", sans-serif', padding: '20px 0px 0px', color: '#000000' }}>
            Smooth Start, Strong Growth
          </h2>
        </div>

        {/* Steps Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          {steps.map((step) => (
            <button
              key={step.step}
              onClick={() => setActiveStep(step.step)}
              className={`px-35 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                activeStep === step.step
                  ? 'bg-black text-white'
                  : 'bg-gray text-black border border-white'
              }`}
              style={{ transition: '0.4s ease-in-out' }}
            >
              STEP {step.step}
            </button>
          ))}
        </div>

        {/* Main Content - Image and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative smooth-img lg:col-span-8">
            <Image
              src={work}
              alt="Work Process"
              width={1000}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col lg:col-span-4">
            <h3 className="text-4xl font-bold text-black mb-6" style={{ fontFamily: '"Host Grotesk", sans-serif', transition: '0.4s ease-in-out' }}>
              {currentStepData.heading}
            </h3>
            <p className="text-black text-lg leading-relaxed mb-6" style={{ fontFamily: '"Host Grotesk", sans-serif', transition: '0.4s ease-in-out' }}>
              {currentStepData.description}
            </p>
            <div className="h-px bg-gray-300 mb-4"></div>
            <div className="text-2xl font-bold text-black" style={{ fontFamily: '"Host Grotesk", sans-serif', transition: '0.4s ease-in-out' }}>
              {activeStep}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

