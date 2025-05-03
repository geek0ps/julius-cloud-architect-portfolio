
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cloud-700/90 to-tech-700/90 z-0"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container-section grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-tech-400/20 text-tech-100 border border-tech-400/30 backdrop-blur-sm">
              DevOps Engineer & AWS Cloud Architect
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in text-white" style={{ animationDelay: '0.4s' }}>
            <span>Hi, I'm </span>
            <span className="text-transparent bg-clip-text animated-gradient">Julius Omoleye</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 animate-fade-in max-w-xl" style={{ animationDelay: '0.6s' }}>
            Transforming infrastructure into scalable, secure, and innovative cloud environments.
          </p>
          
          <div className="flex flex-wrap gap-5 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-md bg-tech-500 hover:bg-tech-600 text-white font-medium transition-all flex items-center gap-2 shadow-lg shadow-tech-500/20"
            >
              Get in Touch
              <ArrowDown size={18} />
            </a>
            
            <a 
              href="https://geekops.dev"  
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium transition-all border border-white/20"
            >
              geekops.dev
            </a>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com/in/julius-omoleye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors border border-white/20"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:julius.omoleye@outlook.com" 
                className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors border border-white/20"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors border border-white/20"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative flex justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="absolute -inset-4 bg-gradient-to-br from-tech-400 to-cloud-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative overflow-hidden rounded-full shadow-2xl border-4 border-white/20">
            <img 
              src="/lovable-uploads/9a45fe7f-c503-410d-a9f2-9d3fa23ea846.png" 
              alt="Julius Omoleye" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about"
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
          aria-label="Scroll to About Section"
        >
          <ArrowDown size={24} className="text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
