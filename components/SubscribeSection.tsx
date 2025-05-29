import React from "react";

const SubscribeSection = () => {
  return (
    <section className="w-full bg-[#0A3556] py-16 px-4 flex flex-col items-center justify-center">
      <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-8" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
        <span className="font-bold">Subscribe</span> and stay<br />on track
      </h2>
      <div className="flex flex-col items-center w-full max-w-2xl">
        <p className="text-white text-lg sm:text-xl text-center mb-6" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
          We automatically send you your tests on-time<br />
          and at the appropriate intervals so you don&apos;t<br />
          have to worry about it.
        </p>
        <button className="mt-8 bg-[#E3F1FF] text-[#0A3556] font-medium text-2xl rounded-xl px-12 py-4 shadow-md transition hover:bg-[#cbe6ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A3556]" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
          Subscribe
        </button>
        <h3 className="text-white font-bold text-3xl sm:text-4xl text-center mb-4" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
          <span className="font-bold">Order</span> a la carte
        </h3>
        <p className="text-white text-lg sm:text-xl text-center mb-6" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
          If you&apos;re looking for a one-off test, that&apos;s ok too.<br />
          We still send you the full range of personalized<br />
          insights & recommendations.
        </p>
        <button className="bg-[#E3F1FF] text-[#0A3556] font-medium text-2xl rounded-xl px-12 py-4 shadow-md transition hover:bg-[#cbe6ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A3556]" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
          Order
        </button>
      </div>
    </section>
  );
};

export default SubscribeSection;
