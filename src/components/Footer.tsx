
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              <span className="text-sky-500">Geek</span>Ops<span className="text-sky-500">.</span>dev
            </a>
            <p className="mt-2 text-gray-600 max-w-md">
              DevOps Engineer & AWS Cloud Architect specializing in transforming IT infrastructure.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 mb-6 md:mb-0">
            <a 
              href="#about"
              className="text-gray-600 hover:text-sky-500 transition-colors"
            >
              About
            </a>
            <a 
              href="#skills"
              className="text-gray-600 hover:text-sky-500 transition-colors"
            >
              Skills
            </a>
            <a 
              href="#experience"
              className="text-gray-600 hover:text-sky-500 transition-colors"
            >
              Experience
            </a>
            <a 
              href="#projects"
              className="text-gray-600 hover:text-sky-500 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact"
              className="text-gray-600 hover:text-sky-500 transition-colors"
            >
              Contact
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/julius-omoleye"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 rounded-full hover:bg-sky-100 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} className="text-gray-700" />
            </a>
            <a 
              href="mailto:julius.omoleye@outlook.com"
              className="p-2 bg-gray-200 rounded-full hover:bg-sky-100 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="text-gray-700" />
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-200 rounded-full hover:bg-sky-100 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} className="text-gray-700" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Julius Omoleye. All rights reserved. <a href="https://geekops.dev" className="text-sky-500 hover:text-sky-600">geekops.dev</a>
          </p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            DevOps Engineer & AWS Cloud Architect
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
