"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: Replace with any icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-accent2/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <span className="font-bold text-white pr-2 border-r border-gray-600">SN</span>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-accent1 transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-accent1 transition-colors">About</a>
            <a href="#education" className="text-foreground hover:text-accent1 transition-colors">Education</a>
            <a href="#experience" className="text-foreground hover:text-accent1 transition-colors">Experience</a>
            <a href="#skills" className="text-foreground hover:text-accent1 transition-colors">Skills</a>
            <a href="#projects" className="text-foreground hover:text-accent1 transition-colors">Projects</a>
            <a href="#contact" className="text-foreground hover:text-accent1 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-4">
            <a href="#home" className="text-foreground hover:text-accent1">Home</a>
            <a href="#about" className="text-foreground hover:text-accent1">About</a>
            <a href="#education" className="text-foreground hover:text-accent1">Education</a>
            <a href="#experience" className="text-foreground hover:text-accent1">Experience</a>
            <a href="#skills" className="text-foreground hover:text-accent1">Skills</a>
            <a href="#projects" className="text-foreground hover:text-accent1">Projects</a>
            <a href="#contact" className="text-foreground hover:text-accent1">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
