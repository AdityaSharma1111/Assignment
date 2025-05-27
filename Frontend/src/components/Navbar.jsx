import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md text-white flex items-center justify-between px-8 py-8 shadow-md">
      
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          onClick={handleLogoClick}
          className="h-12 w-auto rounded cursor-pointer"
        />
      </div>

      {/* Nav Links */}
      <div className="flex items-center space-x-6">
        <button className="hover:text-gray-300 cursor-pointer text-xl p-2" onClick={() => navigate('/about')}>
          About Us
        </button>
        <button className="hover:text-gray-300 cursor-pointer text-xl p-2" onClick={() => navigate('/waitlist')}>
          Waitlist
        </button>
        <button
          onClick={() => navigate('/cart')}
          className="hover:text-gray-300 cursor-pointer text-xl p-2"
        >
          Cart
        </button>
        <button
          onClick={() => navigate('/buy')}
          className="bg-white text-xl p-2 text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          Buy
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
