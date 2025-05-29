'use client';
import React from "react";

const AsSeenOnSection = () => {
  return (
    <section className="w-full bg-[#0A3556] py-12 px-4 md:px-8 flex flex-col items-center justify-center">
      <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl text-center" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
        As seen on
      </h2>
      <div className="h-12 md:h-24" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full max-w-5xl">
        {/* Harvard Innovation Labs */}
        <div className="flex items-center gap-4">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="56" height="56" rx="4" fill="white"/>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontFamily="inherit" fontWeight="bold" fontSize="28" fill="#0A3556">Hi</text>
          </svg>
          <div className="flex flex-col">
            <span className="text-white font-medium text-xl md:text-2xl" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>Harvard</span>
            <span className="text-white font-medium text-xl md:text-2xl -mt-1" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>innovation labs</span>
          </div>
        </div>
        {/* BBC StoryWorks */}
        <div className="flex flex-col items-center">
          <div className="flex gap-1 mb-1">
            <span className="bg-white text-[#0A3556] font-bold text-lg md:text-xl px-2 py-1 rounded" style={{ fontFamily: 'inherit' }}>B</span>
            <span className="bg-white text-[#0A3556] font-bold text-lg md:text-xl px-2 py-1 rounded" style={{ fontFamily: 'inherit' }}>B</span>
            <span className="bg-white text-[#0A3556] font-bold text-lg md:text-xl px-2 py-1 rounded" style={{ fontFamily: 'inherit' }}>C</span>
          </div>
          <span className="text-white font-medium text-xl md:text-2xl leading-tight" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>StoryWorks</span>
          <span className="text-white text-base md:text-lg" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>Commercial Productions</span>
        </div>
        {/* ABC 7 Chicago */}
        <div className="flex flex-col items-center">
          <svg width="90" height="56" viewBox="0 0 90 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="45" cy="28" r="26" stroke="white" strokeWidth="6" fill="none"/>
            <text x="32" y="36" fontFamily="inherit" fontWeight="bold" fontSize="20" fill="white">abc</text>
            <text x="55" y="38" fontFamily="inherit" fontWeight="bold" fontSize="32" fill="white">7</text>
          </svg>
          <span className="text-white font-bold text-lg md:text-xl mt-1" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>ABC 7 CHICAGO</span>
        </div>
      </div>
    </section>
  );
};

export default AsSeenOnSection;
