'use client';

import React from 'react';
import Image from 'next/image';
import { FaBullhorn, FaFileAlt, FaChartLine } from 'react-icons/fa';
import { leadbanner, leadgrowth, leads, leadtrusted } from '@/asset';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Leads() {

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-12 lg:px-16">
        {/* Top Section - Label and Headings */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 border border-1 text-black px-5 py-2 rounded-full text-normal font-semibold mb-6">
            <span className="w-5 h-5 rounded-full bg-[var(--bgcolor)]"></span>
            Website That Brings Leads
          </div>
          <h2 className="text-black mb-6 max-w-7xl text-3xl md:text-5xl lg:text-[60px] font-bold mx-auto" style={{ fontFamily: '"Host Grotesk", sans-serif', padding: '30px 0px 0px', color: '#000000' }}>
            We provide comprehensive office support services that help businesses run smoothly and efficiently.
          </h2>
          <p className="text-lg md:text-2xl text-gray-700 max-w-7xl  font-semibold mx-auto">
            Our skilled team manages administrative tasks, technical support, and daily operations to ensure your business runs smoothly.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Side - Swiper Slider */}
          <div className="lg:col-span-4 relative order-1 lg:order-none">
            <div className="our-mission-swiper bg-[#F7F7F2] pb-[140px] relative mission-swiper-clip" style={{ overflow: 'visible' }}>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: false,
                }}
                className="swiper mission-swiper-custom"
                style={{ position: 'relative', overflow: 'visible' }}
              >
                <SwiperSlide>
                  <div className="rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
                    <div className="h-1 bg-gray-300 mb-4"></div>
                    <p className="text-black text-normal leading-relaxed">
                      we specialize in comprehensive financial planning and advisory services tailored to your unique goals. Whether you are planning for retirement, growing your investments.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-black mb-4">our vision</h3>
                    <div className="h-1 bg-gray-300 mb-4"></div>
                    <p className="text-black text-normal leading-relaxed">
                      we specialize in comprehensive financial planning and advisory services tailored to your unique goals. Whether youare planning for retirement, growing your investments.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-black mb-4">Our goals</h3>
                    <div className="h-1 bg-gray-300 mb-4"></div>
                    <p className="text-black text-normal leading-relaxed">
                      we specialize in comprehensive financial planning and advisory services tailored to your unique goals. Whether you are planning for retirement, growing your investments.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            

            {/* Trusted Section */}
            <div className="mt-10 mb-2">
              <p className="text-black text-xl md:text-2xl font-semibold mb-8">
                Trusted by 280+ professional & growing businesse
              </p>
              <div className="relative w-full h-32 flex items-center justify-center">
                <Image
                  src={leadtrusted}
                  alt="Trusted Chart"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Center - Woman with Data Overlays */}
          <div className="lg:col-span-4 relative order-2 lg:order-none">
            <div className="relative flex justify-center">
              <Image
                src={leads}
                alt="Professional Woman"
                width={200}
                height={300}
                className="w-full max-w-[450px] lg:w-[400px] h-auto lg:h-[730px] object-cover rounded-xl"
                
                priority
              />
              
              {/* Leads Generated Overlay - Top Right */}
              <div className="absolute top-32 md:top-48 lg:top-56 right-2 md:right-3">
                <Image
                  src={leadbanner}
                  alt="Leads Generated"
                  width={180}
                  height={135}
                  className="w-[140px] md:w-[200px] lg:w-[180px] lg:h-[135px] object-contain rounded-xl groth"
                  style={{ animation: 'topshap 3s infinite' }}
                />
              </div>

              {/* 325k Overlay - Bottom Left */}
              <div className="absolute bottom-4 md:bottom-6 left-0 lg:left-0">
                <Image
                  src={leadgrowth}
                  alt="Growth Stats"
                  width={280}
                  height={233}
                  className="w-[140px] md:w-[200px] lg:w-[280px] lg:h-[233px] object-contain rounded-xl groth"
                  style={{ animation: 'topshap 3s infinite' }}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Statistics Cards */}
          <div className="lg:col-span-4 space-y-6 order-3 lg:order-none">
            {/* Card 1 */}
            <div className="count-text statistic-card bg-white shadow-lg w-full min-h-0 lg:min-h-55 cursor-pointer flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-[20px] p-6 lg:p-[46px]" style={{ border: '1px solid #B1B1B1', transition: '.4s ease-in-out', color: '#212529', fontSize: '16px', fontFamily: '"Host Grotesk", sans-serif' }}>
              <div className="w-20 h-20 bg-bgcolor rounded-full flex items-center justify-center shrink-0 statistic-icon-wrapper" style={{ transition: '.4s ease-in-out' }}>
                <FaBullhorn className="w-10 h-10 text-black statistic-icon" style={{ transition: '.4s ease-in-out' }} />
              </div>
              <div className="text-center flex-1">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-1">25K+</div>
                <div className="text-gray-600 text-base">Unique & new business tips</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="count-text statistic-card bg-white shadow-lg w-full min-h-0 lg:min-h-55 cursor-pointer flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-[20px] p-6 lg:p-[46px]" style={{ border: '1px solid #B1B1B1', transition: '.4s ease-in-out', color: '#212529', fontSize: '16px', fontFamily: '"Host Grotesk", sans-serif' }}>
              <div className="w-20 h-20 bg-bgcolor rounded-full flex items-center justify-center shrink-0 statistic-icon-wrapper" style={{ transition: '.4s ease-in-out' }}>
                <FaFileAlt className="w-10 h-10 text-black statistic-icon" style={{ transition: '.4s ease-in-out' }} />
              </div>
              <div className="text-center flex-1">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-1">14K+</div>
                <div className="text-gray-600 text-base">Successful projects delivered</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="count-text statistic-card bg-white shadow-lg w-full min-h-0 lg:min-h-55 cursor-pointer flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-[20px] p-6 lg:p-[46px]" style={{ border: '1px solid #B1B1B1', transition: '.4s ease-in-out', color: '#212529', fontSize: '16px', fontFamily: '"Host Grotesk", sans-serif' }}>
              <div className="w-20 h-20 bg-bgcolor rounded-full flex items-center justify-center shrink-0 statistic-icon-wrapper" style={{ transition: '.4s ease-in-out' }}>
                <FaChartLine className="w-10 h-10 text-black statistic-icon" style={{ transition: '.4s ease-in-out' }} />
              </div>
              <div className="text-center flex-1">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-1">31K+</div>
                <div className="text-gray-600 text-base">Growth-focused solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

