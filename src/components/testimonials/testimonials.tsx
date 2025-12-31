'use client';

import React from 'react';
import Image from 'next/image';
import { tr1, tr2, tr3, testimonal1, testimonal2, utube, facebook, google, trustpilot } from '@/asset';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      stars: 5,
      logo: 'facebook',
      subtitle: 'Professional & Reliable',
      quote: '"This company truly understands business needs. Their team provided us with expert guidance and delivered results beyond our expectations".',
      avatar: tr1,
      name: 'Samuel Christopher'
    },
    {
      id: 2,
      stars: 5,
      logo: 'trustpilot',
      subtitle: 'Professional & Reliable',
      quote: '"This company truly understands business needs. Their team provided us with expert guidance and delivered results beyond our expectations".',
      avatar: tr2,
      name: 'Michael R'
    },
    {
      id: 3,
      stars: 5,
      logo: 'google',
      subtitle: 'Professional & Reliable',
      quote: '"This company truly understands business needs. Their team provided us with expert guidance and delivered results beyond our expectations".',
      avatar: tr3,
      name: 'Daniel Benjamin'
    }
  ];

  const videoCards = [
    {
      id: 1,
      title: 'Trusted Partners',
      quote: '"Their expertise exceeded our expectations. They helped streamline our operations and introduced practical tools that immediately boosted productivity".',
      name: 'Lomixo Tamosh',
      image: testimonal1,
      videoUrl: 'https://www.youtube.com/watch?v=1La4QzGeaaQ'
    },
    {
      id: 2,
      title: 'Highly Recommended',
      quote: '"Their expertise exceeded our expectations. They helped streamline our operations and introduced practical tools that immediately boosted productivity".',
      name: 'Sophia Maikal',
      image: testimonal2,
      videoUrl: 'https://www.youtube.com/watch?v=1La4QzGeaaQ'
    }
  ];

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="container mx-auto px-4 md:px-12 lg:px-16">
        {/* Top Section - Label, Heading, and Rating */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 border border-1 text-black px-5 py-2 rounded-full text-normal font-semibold mb-6">
                <span className="w-5 h-5 rounded-full bg-[var(--bgcolor)]"></span>
                Testimonials & Reviews
              </div>
              <h2 className="text-black text-3xl md:text-5xl lg:text-[60px] max-w-4xl font-bold" style={{ fontFamily: '"Host Grotesk", sans-serif', padding: '20px 0px 0px', color: '#000000' }}>
                Trusted by Leading Brands and Professionals
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end mt-6 md:mt-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-3xl font-bold text-black">4.7/</span>
                 <span className="text-xl font-normal text-black">5.0M</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-black  font-semibold text-m">From 32000+ ratings</p>
            </div>
          </div>
        </div>

        {/* First Row - Testimonial Cards */}
        <div className="mb-8 w-full overflow-hidden">
          <div className="marquee-content">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div key={`${testimonial.id}-${idx}`} className="testimonial flex-shrink-0 w-[280px] md:w-[400px] lg:w-[460px]">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <div className="w-15 h-10 flex items-center justify-center">
                  {testimonial.logo === 'facebook' && (
                    <Image
                      src={facebook}
                      alt="Facebook"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  )}
                  {testimonial.logo === 'google' && (
                    <Image
                      src={google}
                      alt="Google"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  )}
                  {testimonial.logo === 'trustpilot' && (
                    <Image
                      src={trustpilot}
                      alt="Trustpilot"
                      width={50}
                      height={50}
                    
                      className="object-contain"
                    />
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-sans text-black mb-6" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                {testimonial.subtitle}
              </h3>
              <p className="text-gray-600 text-l leading-relaxed mb-15" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xl font-semibold text-black" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                  {testimonial.name}
                </span>
              </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videoCards.map((card, index) => (
            <div
              key={card.id}
              className="testimonial-two flex-col lg:flex-row"
            >
              {/* Image Section with YouTube Play Button - Left Side */}
              <div className="relative testimonial-two-img w-full lg:w-[300px] h-[300px] lg:h-[400px]" style={{ flexShrink: 0 }}>
                <figure className="relative w-full h-full">
                  <Image
                    src={index === 0 ? testimonal1 : testimonal2}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  {/* YouTube Play Button Overlay - Centered for first card */}
                  {index === 0 && (
                    <a
                      className="video-pop absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={() => handleVideoClick(card.videoUrl)}
                    >
                      <Image
                        src={utube}
                        alt="Play video"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </a>
                  )}
                  
                </figure>
                {/* YouTube Play Button - Outside image for second card */}
                {index === 1 && (
                  <a
                    className="video-pop absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => handleVideoClick(card.videoUrl)}
                   
                  >
                    <Image
                      src={utube}
                      alt="Play video"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </a>
                )}
              </div>

              {/* Text Content Section - Right Side */}
              <div className="flex flex-col justify-center text-center lg:text-left gap-6">
                <h4 className="text-2xl font-semibold text-gray-800 mb-0 lg:mb-4" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                  {card.title}
                </h4>
                <p className="text-gray-600 text-base leading-relaxed mb-0 lg:mb-10" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                  {card.quote}
                </p>
                <h3 className="text-2xl font-bold text-black" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                  {card.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

