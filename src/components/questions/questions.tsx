'use client';

import React, { useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';

export default function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      id: 1,
      question: 'How Can Business Consulting Help My Company?',
      answer: 'At the top-right corner of the Page Overview, click the blue Publish button. From the drop-down menu that appears, click Publish Now: See our documentation to learn more about Scheduled Publishing.'
    },
    {
      id: 2,
      question: 'Will I Learn How To Code Websites As Well?',
      answer: 'At the top-right corner of the Page Overview, click the blue Publish button. From the drop-down menu that appears, click Publish Now: See our documentation to learn more about Scheduled Publishing.'
    },
    {
      id: 3,
      question: 'Why Choose Business Consulting?',
      answer: 'At the top-right corner of the Page Overview, click the blue Publish button. From the drop-down menu that appears, click Publish Now: See our documentation to learn more about Scheduled Publishing.'
    },
    {
      id: 4,
      question: 'Understand And Analyze The Information?',
      answer: 'Yes, our consulting process includes comprehensive analysis of your business data, market trends, and operational metrics. We provide clear, actionable insights that help you make informed decisions and understand the implications for your business.'
    },
    {
      id: 5,
      question: 'What Is The Value Of Business Consulting?',
      answer: 'At the top-right corner of the Page Overview, click the blue Publish button. From the drop-down menu that appears, click Publish Now: See our documentation to learn more about Scheduled Publishing.'
    },
    {
      id: 6,
      question: 'What Is The Value Of Business Consulting?',
      answer: 'At the top-right corner of the Page Overview, click the blue Publish button. From the drop-down menu that appears, click Publish Now: See our documentation to learn more about Scheduled Publishing.'
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="questions py-20">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        {/* Top Section - Label and Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-1 text-black px-5 py-2 rounded-full text-normal font-semibold mb-6 bg-white">
            <span className="w-5 h-5 rounded-full bg-[var(--bgcolor)]"></span>
            Questions
          </div>
          <h2 className="text-black text-7xl lg:text-7xl font-bold mb-8" style={{ fontSize: '60px', fontFamily: '"Host Grotesk", sans-serif', padding: '20px 0px 0px', color: '#000000' }}>
            Have Questions? We ve Got Answers!
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-gray-300 shadow-lg overflow-hidden">
            {questions.map((item, index) => (
              <div key={item.id} className="border-b border-gray-300 last:border-b-0">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-8 py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl font-semibold text-black flex-1" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                    {item.question}
                  </span>
                  <div className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <HiMinus className="w-6 h-6 text-black" />
                    ) : (
                      <HiPlus className="w-6 h-6 text-black" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: '"Host Grotesk", sans-serif' }}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

