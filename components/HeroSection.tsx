import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full flex items-center justify-center bg-[#0A3556] px-4 py-16">
      <div className="flex flex-col items-center text-center w-full max-w-3xl">
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl leading-tight md:leading-tight mb-6" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
          At-Home Lab Testing<br />
          Made Easy.
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl font-normal mb-0 max-w-2xl" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
          Personalized at-home testing made easy by a world class<br className="hidden sm:inline" />
          CLIA Certified Laboratory built by doctors.
        </p>
        <button
          className="mt-8 bg-[#E3F1FF] text-[#0A3556] font-medium text-2xl rounded-xl px-12 py-4 shadow-md transition hover:bg-[#cbe6ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A3556]"
          style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
