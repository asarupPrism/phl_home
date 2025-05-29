'use client';
import React, { useState } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0A3556] h-20 flex items-center justify-between px-4 md:px-8 z-50 font-sans" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
      {/* Logo */}
      <div className="flex items-center">
        <svg width="90" height="40" viewBox="0 0 90 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <polygon points="10,35 25,10 40,35" fill="white" />
            <polygon points="17.5,27.5 25,15 32.5,27.5" fill="#0A3556" />
            <text x="45" y="32" fontFamily="inherit" fontWeight="bold" fontSize="32" fill="white" letterSpacing="4">PRISM</text>
          </g>
        </svg>
      </div>
      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-x-12">
        <a className="text-white text-lg hover:underline transition" href="#">Our Products</a>
        <a className="text-white text-lg hover:underline transition" href="#">Our Company</a>
        <a className="text-white text-lg hover:underline transition" href="#">Shop</a>
        <a className="text-white text-lg hover:underline transition" href="#">Blog</a>
      </div>
      {/* Desktop Auth + Cart */}
      <div className="hidden md:flex items-center gap-x-6">
        <a className="text-white font-bold text-lg hover:underline transition" href="#">Login</a>
        <a className="text-white font-bold text-lg hover:underline transition" href="#">Sign Up</a>
        <button className="flex items-center bg-white/10 hover:bg-white/20 transition rounded-xl px-6 py-2 text-white text-lg font-medium ml-2 focus:outline-none">
          $119
          <svg className="ml-2" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </button>
      </div>
      {/* Hamburger for Mobile */}
      <button
        className="md:hidden flex items-center text-white focus:outline-none z-50"
        aria-label="Open menu"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0A3556] flex flex-col items-center pt-28 gap-8 transition-transform duration-300 z-40 md:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
      >
        <a className="text-white text-xl hover:underline transition" href="#" onClick={() => setMobileOpen(false)}>Our Products</a>
        <a className="text-white text-xl hover:underline transition" href="#" onClick={() => setMobileOpen(false)}>Our Company</a>
        <a className="text-white text-xl hover:underline transition" href="#" onClick={() => setMobileOpen(false)}>Shop</a>
        <a className="text-white text-xl hover:underline transition" href="#" onClick={() => setMobileOpen(false)}>Blog</a>
        <a className="text-white font-bold text-xl hover:underline transition" href="#" onClick={() => setMobileOpen(false)}>Login</a>
        <a className="text-white font-bold text-xl hover:underline transition" href="#" onClick={() => setMobileOpen(false)}>Sign Up</a>
        <button className="flex items-center bg-white/10 hover:bg-white/20 transition rounded-xl px-6 py-3 text-white text-xl font-medium focus:outline-none mt-2">
          $119
          <svg className="ml-2" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </button>
      </div>
      {/* Overlay for mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu overlay"
        />
      )}
    </nav>
  );
};

export default Navbar;
