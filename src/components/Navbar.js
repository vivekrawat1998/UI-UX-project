import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import { Link as ScrollLink } from "react-scroll"; 
import { Link as RouterLink } from "react-router-dom"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 500 }); 
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-30 top-0 left-0 right-0 py-2 font-RobotoRegular px-5 md:px-20 text-white transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-gradient-to-r from-teal-500 to-blue-600 shadow-xl" 
          : "bg-transparent"
      }`}
      data-aos="fade-down" 
    >
      <div className="flex items-center justify-between">
        <div className="w-28 h-12 flex items-center">
          <h1 className="text-xl text-teal-800 font-bold">PitchMasters</h1>
        </div>

        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <FaBars className="text-gray-900" size={24} />
        </div>

        <div className="hidden md:flex text-lg text-teal-800 md:space-x-8 items-center">
          <RouterLink to="/" className="hover:text-white font-semibold transition-colors duration-200 cursor-pointer">
            Home
          </RouterLink>
          <ScrollLink to="aboutus" smooth={true} duration={500} className="hover:text-white font-semibold transition-colors duration-200 cursor-pointer">
            About
          </ScrollLink>
          <ScrollLink to="features" smooth={true} duration={500} className="hover:text-white font-semibold transition-colors duration-200 cursor-pointer">
            Features
          </ScrollLink>
          <ScrollLink to="Play" smooth={true} duration={500} className="hover:text-white font-semibold transition-colors duration-200 cursor-pointer">
            How to play
          </ScrollLink>
          <a href="https://wa.link/ggnow">
            <div className="bg-gradient-to-r from-teal-800 to-blue-500 rounded-md px-10 py-2 text-white text-sm cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-lg">
              Contact us
            </div>
          </a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className={`flex flex-col items-center bg-gray-800 rounded-xl pb-10 md:hidden mt-4 space-y-4 transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-6 opacity-0"}`}>
          <ScrollLink to="home" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-teal-300 hover:bg-teal-700 rounded-md px-10 py-2 transition-colors duration-200 cursor-pointer">
            Home
          </ScrollLink>
          <ScrollLink to="aboutus" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-teal-300 hover:bg-teal-700 rounded-md px-10 py-2 transition-colors duration-200 cursor-pointer">
            about
          </ScrollLink>
          <ScrollLink to="features" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-teal-300 hover:bg-teal-700 rounded-md px-10 py-2 transition-colors duration-200 cursor-pointer">
            Features
          </ScrollLink>
          <ScrollLink to="Play" smooth={true} duration={500} onClick={toggleMenu} className="hover:text-teal-300 hover:bg-teal-700 rounded-md px-10 py-2 transition-colors duration-200 cursor-pointer">
            How  to play
          </ScrollLink>
          <div className="bg-gradient-to-r from-teal-700 to-blue-600 rounded-md px-6 py-2 text-white font-semibold cursor-pointer transition duration-300 transform hover:scale-105 hover:shadow-lg">
            Get started
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
