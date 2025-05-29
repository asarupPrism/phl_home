'use client';
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    q: "How often should I test?",
    a: "This ultimately depends on the test you are getting. Some tests require intervals of every 3 months, some once every year, or even our personal recommendation.",
  },
  {
    q: "What if I don&#39;t know what to test for?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "How quickly can I get my results?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "How do I know my results are private?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "Is there a specific time of day I should take my sample?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#0A3556] py-16 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl px-4 md:px-8">
        <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-8 text-left" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
          Frequently asked<br />questions
        </h2>
        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
          {/* Left column */}
          <div className="w-full md:w-1/2 flex flex-col justify-start md:pr-16 mb-8 md:mb-0">
            <p className="text-white text-lg md:text-xl max-w-md" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
              Have more questions? Our FAQ should answer of them! If not, don&apos;t hesitate to contact us – we&apos;d love to hear from you!
            </p>
          </div>
          {/* Right column */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="mb-2">
                <button
                  className="w-full text-left text-white font-bold text-lg md:text-xl focus:outline-none transition"
                  style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {faq.q}
                </button>
                <AnimatePresence initial={false}>
                  {open === i && faq.a && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="text-white text-base md:text-lg font-normal mt-2 mb-2 pr-2" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
