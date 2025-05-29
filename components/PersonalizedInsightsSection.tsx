'use client';
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const PersonalizedInsightsSection = () => {
  return (
    <section className="w-full bg-[#0A3556] py-16 px-4 flex flex-col items-center justify-center">
      {/* Animated header */}
      <motion.h2
        className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-8 text-center"
        style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Personalized insights that<br />guide you all the way.
      </motion.h2>
      {/* Phone image placeholder with slide-up animation */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="w-64 h-96 bg-[#183B54] rounded-3xl flex items-center justify-center text-white text-lg font-bold">PHONE</div>
      </motion.div>
      {/* Animated subtext */}
      <motion.p
        className="text-white text-base sm:text-lg md:text-xl font-normal mb-8 text-center max-w-2xl"
        style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <span className="font-bold">Don&apos;t guess.</span> Let our <span className="font-bold">personalized insights</span> guide you to the best possible outcomes <span className="font-bold">based on the data.</span>
      </motion.p>
      {/* Animated Down arrow */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
        viewport={{ once: true }}
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M16 8v16M8 20l8 8 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </motion.div>
      {/* Lab value and range */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-8 w-full max-w-4xl">
        {/* Lab value */}
        <div className="flex flex-col items-center">
          <div className="flex items-end">
            <span className="text-white font-bold text-6xl md:text-7xl" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
              <CountUp end={45} duration={3} enableScrollSpy scrollSpyOnce />
            </span>
            <span className="text-white text-2xl ml-2 mb-2">miU/l</span>
          </div>
          <motion.div
            className="flex items-center mt-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="mr-2"><path d="M16 24V8M16 8l-6 6M16 8l6 6" stroke="#4ADE80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="text-green-400 font-bold text-2xl">
              <CountUp end={10} duration={3} suffix="%" enableScrollSpy scrollSpyOnce />
            </span>
          </motion.div>
          <span className="text-white text-sm mt-1">improvement since your last test</span>
        </div>
        {/* Range bar and insight */}
        <div className="flex flex-col items-center">
          <span className="text-white font-bold text-xl mb-2">Normal Range</span>
          {/* Range bar with animated tab */}
          <div className="w-64 flex flex-col items-center mb-4">
            <div className="flex justify-between w-full text-white text-sm mb-1">
              <span>20</span>
              <span>70</span>
            </div>
            <div className="relative w-full h-2 bg-white rounded-full">
              <motion.div
                className="absolute top-1/2 -translate-y-1/2"
                initial={{ left: '0%' }}
                whileInView={{ left: '50%' }}
                transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
                style={{ translateX: '-50%' }}
              >
                <div className="w-6 h-6 bg-[#0A3556] border-4 border-green-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="absolute left-1/2 top-full mt-1 -translate-x-1/2 text-xs text-white whitespace-nowrap"></div>
              </motion.div>
            </div>
          </div>
          {/* Insight text, in a white bordered box, left-justified */}
          <div className="border border-white rounded-xl p-4 text-white text-left max-w-xs mt-2 w-full" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
            <span className="text-green-400 font-bold">This is an optimal range.</span><br />
            <span className="font-bold">You have improved significantly since your last test at 85.</span><br />
            Continue to implement routines such as exercising and cutting down on sugar.
          </div>
        </div>
      </div>
      {/* Next test date */}
      <div className="text-white text-lg text-center mb-8">
        Your next test to stay on track: <span className="font-bold">March 25<sup>th</sup>, 2025</span>
      </div>
      {/* Animated Down arrow */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
        viewport={{ once: true }}
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M16 8v16M8 20l8 8 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </motion.div>
    </section>
  );
};

export default PersonalizedInsightsSection;
