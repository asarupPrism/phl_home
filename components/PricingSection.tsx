'use client';
import React, { useState, useEffect } from "react";
import PromoPopup from "./PromoPopup";

type PricingCardProps = {
  title: string;
  price: string;
  sub: string;
  button: string;
  onClick?: () => void;
  hovered: boolean;
  setHovered: (v: boolean) => void;
};

const features = [
  {
    title: "Ultra-Fast Turnarounds",
    desc: "Receive your results within 2 business days. This is the fastest on the market.",
  },
  {
    title: "Personalized Insights",
    desc: "Our user portal gives you a series of personalized insights and data tracking so it's easy to understand.",
  },
  {
    title: "At-Home Convenience",
    desc: "Our user portal gives you a series of personalized insights and data tracking so it's easy to understand.",
  },
];

const CARD_WIDTH = 400;
const CARD_HEIGHT = 240;

const PricingCard = ({ title, price, sub, button, onClick, hovered, setHovered }: PricingCardProps) => (
  <div
    className={`rounded-2xl flex flex-col justify-between items-center text-center bg-[#0A3556] transition-colors duration-300 border-2 ${hovered ? 'border-green-400' : 'border-white'}`}
    style={{ fontFamily: 'var(--font-geist-sans), sans-serif', width: CARD_WIDTH, height: CARD_HEIGHT, padding: 28, boxSizing: 'border-box' }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    onTouchStart={() => setHovered(true)}
    onTouchEnd={() => setHovered(false)}
  >
    <div className="w-full flex flex-col items-center flex-1 justify-between">
      <span className="text-white font-bold text-xl md:text-2xl truncate w-full mb-2 mt-0" style={{ lineHeight: 1.2 }}>{title}</span>
      <span className="text-white font-bold text-4xl md:text-5xl truncate w-full mb-2" style={{ lineHeight: 1.2 }}>{price}</span>
      <span className="text-white text-base md:text-lg mb-0" style={{ lineHeight: 1.2 }}>{sub}</span>
    </div>
    <button
      className="bg-[#E3F1FF] text-[#0A3556] font-medium text-2xl rounded-xl px-12 py-4 shadow-md transition hover:bg-[#cbe6ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A3556] mt-0"
      style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
      onClick={onClick}
    >
      {button}
    </button>
  </div>
);

const PricingSection = () => {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-[#0A3556] py-16 px-4 md:px-8 flex flex-col items-center justify-center">
      {showPopup && <PromoPopup onClose={() => setShowPopup(false)} />}
      <div className="w-full max-w-5xl">
        <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl text-left mb-10" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
          Choose Your Option
        </h2>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-12 md:gap-20 w-full">
          {/* Left Column: Pricing Cards */}
          <div className="flex flex-col w-full md:w-[400px] self-stretch items-center md:items-end md:justify-start gap-8">
            <PricingCard
              title="Prism Membership"
              price="$42"
              sub="Per Month"
              button="Join Now"
              hovered={hovered1}
              setHovered={setHovered1}
              onClick={() => {}}
            />
            <PricingCard
              title="A La Carte"
              price="$60–$149"
              sub="Per Test"
              button="Find Your Test"
              hovered={hovered2}
              setHovered={setHovered2}
              onClick={() => {}}
            />
          </div>
          {/* Right Column: Features */}
          <div className="flex flex-col flex-1 self-stretch justify-center w-full md:w-[400px] h-full gap-12 md:gap-12 mt-0 md:mt-2">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col text-left">
                <span className="text-white font-bold text-xl md:text-2xl mb-2" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>{f.title}</span>
                <p className="text-white text-lg md:text-xl" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
