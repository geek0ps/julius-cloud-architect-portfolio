
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cloud-700 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              Julius<span className="text-tech-300">.Dev</span>
            </a>
            <p className="mt-2 text-cloud-200 max-w-md">
              DevOps Engineer & AWS Cloud Architect specializing in transforming IT infrastructure.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6 md:mb-0">
            <a 
              href="#about"
              className="text-cloud-200 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#skills"
              className="text-cloud-200 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a 
              href="#experience"
              className="text-cloud-200 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a 
              href="#contact"
              className="text-cloud-200 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/julius-omoleye"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-cloud-600 rounded-full hover:bg-cloud-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:julius.omoleye@outlook.com"
              className="p-2 bg-cloud-600 rounded-full hover:bg-cloud-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-cloud-600 rounded-full hover:bg-cloud-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-cloud-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-cloud-300">
            &copy; {currentYear} Julius Omoleye. All rights reserved.
          </p>
          <p className="text-sm text-cloud-300 mt-2 md:mt-0">
            DevOps Engineer & AWS Cloud Architect
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
