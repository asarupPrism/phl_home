import React from "react";

const PromoPopup = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-[#0A3556] border border-white rounded-2xl px-6 py-10 w-full max-w-xl mx-4 flex flex-col items-center" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl font-bold focus:outline-none hover:text-gray-300"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Content */}
        <div className="flex flex-col items-center w-full">
          <span className="text-white text-xl md:text-2xl font-normal mb-4">Limited Time Only</span>
          <div className="text-center mb-8">
            <span className="text-white text-2xl md:text-3xl font-normal">
              Subscribe for <span className="text-green-300 font-bold">30% off</span> your first at-home health test a la carte
            </span>
            <br />
            <span className="text-white text-2xl md:text-3xl font-normal">
              or <span className="text-green-300 font-bold">40% off</span> your yearly subscription.
            </span>
          </div>
          <form className="flex flex-col sm:flex-row items-center w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-l-lg rounded-r-lg sm:rounded-r-none px-4 py-3 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ minWidth: 0 }}
            />
            <button
              type="submit"
              className="bg-[#E3F1FF] text-[#0A3556] text-lg font-medium px-8 py-3 rounded-r-lg rounded-l-lg sm:rounded-l-none transition hover:bg-[#cbe6ff] focus:outline-none"
              style={{ minWidth: '120px' }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup; 