import React from "react";

const categories = [
  {
    label: "General Health Tests",
    icon: (
      <svg
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        viewBox="0 0 48 48"
      >
        <path d="M8 24c0-6.627 7.163-12 16-12s16 5.373 16 12-7.163 12-16 12S8 30.627 8 24Z"/>
        <path d="M24 18v12M18 24h12"/>
      </svg>
    ),
  },
  {
    label: "Oral Health Tests",
    icon: (
      <svg
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        viewBox="0 0 48 48"
      >
        <path d="M24 8c-8 0-12 6-12 12 0 8 4 16 12 16s12-8 12-16c0-6-4-12-12-12Z"/>
        <path d="M24 24v8"/>
      </svg>
    ),
  },
  {
    label: "Hormone Tests",
    icon: (
      <svg
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        viewBox="0 0 48 48"
      >
        <circle cx="16" cy="24" r="4"/>
        <circle cx="32" cy="24" r="4"/>
        <path d="M20 24h8"/>
        <circle cx="24" cy="16" r="2"/>
        <circle cx="24" cy="32" r="2"/>
      </svg>
    ),
  },
  {
    label: "Male Health Test",
    icon: (
      <svg
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="24" r="8"/>
        <path d="M32 16l8-8M40 8v8h-8"/>
      </svg>
    ),
  },
  {
    label: "Female Health Test",
    icon: (
      <svg
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="20" r="8"/>
        <path d="M24 28v8M20 36h8"/>
      </svg>
    ),
  },
  {
    label: "Blood Type/RH Factor",
    icon: (
      <svg
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        viewBox="0 0 48 48"
      >
        <path d="M24 8c-8 8-8 16 0 24 8-8 8-16 0-24Z"/>
        <circle cx="24" cy="24" r="4"/>
      </svg>
    ),
  },
  {
    label: "STI Testing",
    icon: (
      <svg
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        viewBox="0 0 48 48"
      >
        <rect x="12" y="12" width="24" height="24" rx="6"/>
        <path d="M24 20v8M20 24h8"/>
      </svg>
    ),
  },
  {
    label: "Gut Health Test",
    icon: (
      <svg
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        viewBox="0 0 48 48"
      >
        <path d="M16 32c0 4 8 4 8 0s-8-4-8 0Zm8-16c0-4 8-4 8 0s-8 4-8 0Z"/>
        <circle cx="24" cy="24" r="8"/>
      </svg>
    ),
  },
  {
    label: "TSH With Reflex Testing",
    icon: (
      <svg
        className="w-8 h-8 sm:w-12 sm:h-12 md:w-12 md:h-12"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        viewBox="0 0 48 48"
      >
        <rect x="12" y="12" width="8" height="24" rx="4"/>
        <rect x="28" y="12" width="8" height="24" rx="4"/>
        <rect x="20" y="32" width="8" height="8" rx="2"/>
      </svg>
    ),
  },
];

const TestCategories = () => {
  return (
    <section className="w-full bg-[#0A3556] py-0 px-4 flex flex-col items-center justify-center">
      <h2
        className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-0 text-center"
        style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
      >
        Over 20+ Tests Available
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full max-w-5xl pt-8">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="
              flex flex-col items-center justify-center border border-white rounded-2xl
              py-4 px-2 h-32
              sm:py-8 sm:px-4 sm:h-44
              md:py-10 md:px-4 md:h-56
              bg-transparent transition hover:bg-white/5
            "
          >
            <div className="mb-3 sm:mb-6">{cat.icon}</div>
            <div
              className="text-white font-bold text-sm sm:text-lg md:text-lg text-center leading-tight"
              style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
            >
              {cat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestCategories;
