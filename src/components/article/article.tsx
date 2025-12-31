'use client';

import React from 'react';
import Image from 'next/image';
import { HiArrowRight, HiArrowTurnRightUp } from 'react-icons/hi2';
import { article1, article2 } from '@/asset';

const Article = () => {
  const articles = [
    {
      id: 1,
      image: article1,
      tag: 'Tutorials & Tips',
      category: 'Development',
      date: 'Jul 16, 2025',
      comments: '01 Comment',
      title: 'Smart Investment Strategies for Long-Term Wealth Growth',
      description: 'Component library to build your your own components of UI. Reuse existing Hero, sections component like your own components.'
    },
    {
      id: 2,
      image: article2,
      tag: 'Tutorials & Tips',
      category: 'Development',
      date: 'Jul 16, 2025',
      comments: '01 Comment',
      title: 'Smart Investment Strategies for Long-Term Wealth Growth',
      description: 'Component library to build your your own components of UI. Reuse existing Hero, sections component like your own components.'
    }
  ];

  return (
    <section id="blog" className="bg-white py-10 md:py-16 lg:py-20 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-12 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-16">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 border border-gray-500 text-black px-3 py-2 rounded-full text-medium font-semibold mb-6 bg-white">
            <span className="w-6 h-6 rounded-full  bg-[var(--bgcolor)]"></span>
            Recent Articles
          </div>

          {/* Main Heading */}
          <h2 
            className="text-black text-3xl md:text-5xl lg:text-[60px] font-bold mb-8" 
            style={{ 
              fontFamily: '"Host Grotesk", sans-serif', 
              padding: '20px 0px 0px', 
              color: '#000000',
              lineHeight: '1.2'
            }}
          >
            Explore featured articles, industry trends<br className="hidden lg:inline" /> and insights.
          </h2>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              {/* Image Section with Overlay Tag */}
              <div className="relative">
                <div className="relative w-full h-[250px] md:h-[300px] article-image-clip">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Overlay Tag */}
                <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-semibold" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                  {article.tag}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 md:p-6">
                {/* Category and Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-flex items-center gap-2 bg-[var(--bgcolor)] text-black px-3 py-1 rounded-full text-sm font-semibold" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                    {article.category}
                  </div>
                  <span className="text-gray-500 text-sm" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                    {article.date} — {article.comments}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-4" 
                  style={{ fontFamily: '"Host Grotesk", sans-serif' }}
                >
                  {article.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-gray-600 text-medium leading-relaxed mb-6" 
                  style={{ fontFamily: '"Host Grotesk", sans-serif' }}
                >
                  {article.description}
                </p>

                {/* Separator Line */}
                <div className="h-px bg-gray-400 mb-4"></div>

                {/* Reading Continue Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-black font-semibold hover:text-[var(--bgcolor)] transition-colors"
                  style={{ fontFamily: '"Host Grotesk", sans-serif' }}
                >
                  Reading Continue
                  <HiArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;

