import React from "react";

const trustBadges = [
  {
    label: "CLIA Certified",
    icon: (
      <svg width="80" height="48" fill="none" viewBox="0 0 80 48"><text x="0" y="36" fontFamily="inherit" fontWeight="bold" fontSize="36" fill="#fff">CLIA</text></svg>
    ),
    sub: "Certified Accuracy"
  },
  {
    label: "HIPAA Compliant",
    icon: (
      <svg width="80" height="48" fill="none" viewBox="0 0 80 48"><text x="0" y="36" fontFamily="inherit" fontWeight="bold" fontSize="36" fill="#fff">HIPAA</text></svg>
    ),
    sub: "Your Data Protected"
  },
  {
    label: "Privacy Protected",
    icon: (
      <svg width="80" height="48" fill="none" viewBox="0 0 80 48"><circle cx="24" cy="24" r="20" stroke="#fff" strokeWidth="4" fill="none"/><path d="M24 18v6l4 4" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    sub: "Confidential Results"
  },
];

const CLIASection = () => {
  return (
    <section className="w-full bg-[#0A3556] py-16 px-4 flex flex-col items-center justify-center">
      <h2 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl mb-8 text-center" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
        CLIA Certified Precision
      </h2>
      <p className="text-white text-lg sm:text-xl md:text-2xl font-normal mb-12 max-w-3xl text-center" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
        We take testing accuracy and privacy seriously. Our CLIA Certification and HIPAA compliance place us at the highest possible standard of testing and data protection.
      </p>
      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-4xl items-center justify-center">
        {trustBadges.map((badge) => (
          <div key={badge.label} className="flex flex-col items-center">
            <div className="mb-2">{badge.icon}</div>
            <div className="text-white font-bold text-xl text-center" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
              {badge.label}
            </div>
            <div className="text-white text-base text-center opacity-80" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
              {badge.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CLIASection;
