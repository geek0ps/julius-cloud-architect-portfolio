
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-bold text-cloud-600">
          Julius<span className="text-tech-500">.Dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="font-medium text-gray-700 hover:text-tech-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-4 py-2 rounded-md bg-cloud-500 text-white font-medium hover:bg-cloud-600 transition-colors"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="py-2 font-medium text-gray-700 hover:text-tech-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="py-2 px-4 rounded-md bg-cloud-500 text-white font-medium hover:bg-cloud-600 transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
