'use client';

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Calculate scroll percentage
      const scrollableHeight = documentHeight - windowHeight;
      const percentage = scrollableHeight > 0 
        ? Math.round((scrollTop / scrollableHeight) * 100)
        : 0;
      
      setScrollPercentage(percentage);
    };

    // Initial calculation
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Calculate rotation for the progress (starts from top, goes clockwise)
  const rotation = (scrollPercentage / 100) * 360;
  const isComplete = scrollPercentage === 100;
  
  // Use green border when complete, black otherwise
  const borderColor = isComplete ? '#A9E448' : 'rgb(0, 0, 0)';
  const backgroundGradient = isComplete 
    ? `conic-gradient(from 0deg, ${borderColor} 0deg, ${borderColor} 360deg)`
    : `conic-gradient(from 0deg, rgb(0, 0, 0) 0deg, rgb(0, 0, 0) ${rotation}deg, rgb(255, 255, 255) ${rotation}deg, rgb(255, 255, 255) 360deg)`;

  return (
    <div
      id="scroll-percentage"
      className={`fixed bottom-[30px] right-[30px] h-[60px] w-[60px] bg-[var(--bgcolor)] rounded-full grid place-items-center z-50 transition-transform duration-300 ease-in-out ${
        isComplete ? 'border border-bgcolor cursor-pointer' : 'border-0 cursor-default'
      } ${
        scrollPercentage > 0 ? 'scale-100' : 'scale-0'
      } ${
        isComplete 
          ? 'shadow-[0px_0px_20px_0px_rgba(169,228,72,0.75)]' 
          : 'shadow-[0px_0px_20px_0px_rgba(184,184,184,0.75)]'
      }`}
      onClick={isComplete ? () => window.scrollTo({ top: 0, behavior: 'smooth' }) : undefined}
    >
      <div
        id="scroll-percentage-value"
        className="h-[calc(100%-6px)] w-[calc(100%-6px)] bg-white text-black rounded-full grid place-items-center text-sm font-semibold relative"
        style={{ background: backgroundGradient }}
      >
        <span className="absolute z-[2] bg-white rounded-full w-[calc(100%-12px)] h-[calc(100%-12px)] grid place-items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {isComplete ? (
            <FaArrowUp className="w-5 h-5 text-black" />
          ) : (
            `${scrollPercentage}%`
          )}
        </span>
      </div>
    </div>
  );
}

