import React, { useState } from "react";
import './Style.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-green-500 dark:text-white ml-10 md:mr-10">
              Portfolio
            </a>
          </div>
          <div className="hidden md:block">
            {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 mr-10">
          <ul className="sec">
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="project" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="tech" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
          </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              Home
            </a>
            <a href="#about" className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              About
            </a>
            <a href="#services" className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              Services
            </a>
            <a href="#contact" className="text-black block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
