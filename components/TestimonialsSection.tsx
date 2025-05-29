'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: `I thought I knew better and I could track these things just based on intuition and habits.\nBut knowing my numbers really allowed me to make a difference.`,
    author: "Louise, 38",
  },
  {
    text: `Having a grasp on my numbers at regular intervals really empowered me to actually make a difference. It's empowering because you can basically tackle anything.`,
    author: "James, 28",
  },
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    author: "Sarah, 41",
  },
  {
    text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    author: "Mike, 35",
  },
  {
    text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    author: "Priya, 29",
  },
  {
    text: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    author: "Carlos, 32",
  },
  {
    text: `Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.\nVestibulum ac diam sit amet quam vehicula elementum.`,
    author: "Anna, 27",
  },
];

const CARD_WIDTH = 400; // px
const CARD_HEIGHT = 200; // px
const CARD_GAP = 32; // px
const VISIBLE_CARDS = 2;
const ANIMATION_DURATION = 10000; // ms per card
const FADE_DURATION = 600; // ms

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [batch, setBatch] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setBatch((b) => b + 1);
        setShow(true);
      }, FADE_DURATION);
    }, ANIMATION_DURATION);
    return () => clearInterval(interval);
  }, []);

  // Get the two visible cards, wrapping around
  const visible = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
  ];

  return (
    <section className="w-full bg-[#0A3556] py-16 px-4 flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-white font-normal text-3xl sm:text-4xl md:text-5xl text-center mb-8" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
        Take the leap with<br />
        <span className="font-bold">thousands of others.</span>
      </h2>
      <div className="w-full flex justify-center items-center" style={{ minHeight: `${CARD_HEIGHT + 80}px` }}>
        <div className="relative flex items-center" style={{ width: `${(CARD_WIDTH + CARD_GAP) * VISIBLE_CARDS - CARD_GAP}px`, height: `${CARD_HEIGHT}px` }}>
          <div className="flex gap-8 w-full h-full items-center justify-center">
            <AnimatePresence mode="wait">
              {show && visible.map((t, idx) => (
                <motion.div
                  key={batch + '-' + idx}
                  className="flex-shrink-0 border border-white rounded-2xl p-8 flex flex-col justify-center items-center text-white bg-[#0A3556]"
                  style={{ fontFamily: 'var(--font-geist-sans), sans-serif', width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: FADE_DURATION / 1000 }}
                >
                  <span className="font-bold whitespace-pre-line text-lg mb-6 text-center w-full">{t.text}</span>
                  <span className="font-bold mt-4 text-base text-center w-full">{t.author}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <h3 className="text-white font-normal text-3xl sm:text-4xl md:text-5xl text-center mt-8" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
        <span className="font-bold">The most affordable</span> prices<br />on the market.
      </h3>
    </section>
  );
};

export default TestimonialsSection;
