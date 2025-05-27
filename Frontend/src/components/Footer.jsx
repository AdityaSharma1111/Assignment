import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white px-6 py-10 relative">
      {/* Divider */}
      <hr className="border-gray-700 mb-8" />

      <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        
        {/* Left: Brand and Links */}
        <div>
          <h1 className="text-3xl font-semibold mb-4">
            Eclypse <sup>↗</sup>
          </h1>

          <div className="text-sm space-y-2">
            <div className="uppercase text-gray-400">Contact</div>
            <div className="text-lg font-medium">+91 123-456-7890</div>

            <div className="uppercase text-gray-400 mt-4">Email</div>
            <div>eclypse@gmail.com</div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 text-gray-300 text-sm">
            <a href="/" className="hover:text-white">Home</a>
            <span>/</span>
            <a href="/about" className="hover:text-white">About</a>
            <span>/</span>
            <a href="/buy" className="hover:text-white">Buy</a>
            <span>/</span>
            <a href="/customers" className="hover:text-white">Our Customers</a>
            <span>/</span>
            <a href="/contacts" className="hover:text-white">Contacts</a>
          </div>
        </div>

        {/* Right: Scroll to Top + Copyright */}
        <div className="flex flex-col items-end justify-between h-full w-full md:w-auto">
          <button
            onClick={scrollToTop}
            className="bg-white text-black p-3 rounded-full shadow hover:bg-gray-200 transition"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={16} />
          </button>

          <p className="text-gray-500 text-sm mt-4 md:mt-auto">
            © Eclypse 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
