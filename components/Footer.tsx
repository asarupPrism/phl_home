'use client';
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A3556] py-6 px-4 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between">
      {/* Logo */}
      <div className="flex items-center mb-4 md:mb-0">
        <svg width="90" height="40" viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <polygon points="10,35 25,10 40,35" fill="white" />
            <polygon points="17.5,27.5 25,15 32.5,27.5" fill="#0A3556" />
            <text x="45" y="32" fontFamily="inherit" fontWeight="bold" fontSize="32" fill="white" letterSpacing="4">PRISM</text>
          </g>
        </svg>
      </div>
      {/* Links */}
      <div className="flex flex-col items-center md:items-end text-white gap-1 md:gap-2" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
        <a href="#" className="text-base md:text-lg hover:underline">Contact Us</a>
        <a href="#" className="text-base md:text-lg hover:underline">Our Services</a>
        <a href="#" className="text-base md:text-lg hover:underline">Our Products</a>
        <a href="#" className="text-base md:text-lg hover:underline">About Us</a>
      </div>
    </footer>
  );
};

export default Footer;
