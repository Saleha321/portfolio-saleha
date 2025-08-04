// src/components/navbar.tsx
'use client'; // This is a client component

import React, { useState } from 'react';
import { Menu, X } from "lucide-react"; // Import icons for the hamburger menu

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-accent2/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="font-bold text-white text-xl pr-2 border-r border-gray-600">SN</a>
          
          {/* Mobile menu toggle button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-accent1 transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-accent1 transition-colors">About</a>
            <a href="#education" className="text-foreground hover:text-accent1 transition-colors">Education</a>
            <a href="#experience" className="text-foreground hover:text-accent1 transition-colors">Experience</a>
            <a href="#skills" className="text-foreground hover:text-accent1 transition-colors">Skills</a>
            <a href="#projects" className="text-foreground hover:text-accent1 transition-colors">Projects</a>
            <a href="#contact" className="text-foreground hover:text-accent1 transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div 
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">About</a>
          <a href="#education" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Education</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Experience</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">Contact</a>
        </div>
      </div>
    </nav>
  );
}