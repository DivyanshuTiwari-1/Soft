"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "#services", label: "Services" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
               
              </div>
              <span className="text-xl font-cal font-semibold text-gray-900">SoftAI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-black hover:bg-gray-800 text-white text-sm">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-10 w-10 p-0 border border-gray-300 hover:border-gray-400 hover:bg-gray-50"
            >
              {isMenuOpen ? <X size={20} className="text-gray-900" /> : <Menu size={20} className="text-gray-900" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-lg border border-black shadow-lg z-40">
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors rounded-md mx-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full bg-black hover:bg-gray-800 text-white text-sm rounded-lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;