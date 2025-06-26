"use client"
import React, { useState } from "react";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center w-full pt-4 z-50">
      <nav className="w-full max-w-6xl bg-black/80 backdrop-blur-md border border-gray-800 shadow-lg rounded-full px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <img src="/photo/logo.jpeg" className="text-white w-7 h-7 font-bold text-xl rounded-full  border-pink-400"></img>
              </div>
              <span className=" md:block text-lg font-semibold text-gray-300">SoftAI</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a>
            <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">Features</a>
            <a href="#benifit" className="text-gray-300 hover:text-purple-400 transition-colors">Benifit</a>
            <a href="#cta" className="btn-white ml-2">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col items-center space-y-4 bg-gray-900/90 backdrop-blur-md rounded-2xl p-4 border border-gray-800">
              <a href="#services" className="text-gray-300 hover:text-purple-400 transition-colors">Services</a>
              <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">Features</a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
              <a href="#cta" className="btn-white ml-2">Contact Us</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;