import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-20">
        
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Aneeb Ahmad. All rights reserved.</p>
        
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/aneeb-ahmad-094766388" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} className="hover:text-cyan-400 transition-colors" />
          </a>
          <a href="https://github.com/Aneeb-Ahmad" target="_blank" rel="noopener noreferrer">
            <FaGithub size={25} className="hover:text-cyan-400 transition-colors" />
          </a>
          <a href="mailto:aneebahmad678@gmail.com">
            <FaEnvelope size={25} className="hover:text-cyan-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
