
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center bg-hero-pattern relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cloud-100/50 to-white/50 pointer-events-none"></div>
      <div className="container-section grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 md:pr-8">
          <div className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-cloud-100 text-cloud-600 border border-cloud-200">
              DevOps Engineer & AWS Cloud Architect
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="text-gray-900">Hi, I'm </span>
            <span className="text-transparent bg-clip-text animated-gradient">Julius Omoleye</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            I transform IT infrastructure into innovative, scalable, and cost-effective cloud environments. 
            Specializing in AWS, DevOps, and infrastructure as code.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-md bg-cloud-500 hover:bg-cloud-600 text-white font-medium transition-all flex items-center gap-2"
            >
              Get in Touch
              <ArrowDown size={18} />
            </a>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com/in/julius-omoleye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-cloud-100 hover:bg-cloud-200 text-cloud-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:julius.omoleye@outlook.com" 
                className="p-2.5 rounded-full bg-tech-100 hover:bg-tech-200 text-tech-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "relative flex justify-center animate-fade-in",
          "before:absolute before:inset-0 before:bg-tech-dots before:[background-size:20px_20px] before:opacity-10 before:rounded-3xl"
        )} style={{ animationDelay: '1s' }}>
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
            <img 
              src="/lovable-uploads/9a45fe7f-c503-410d-a9f2-9d3fa23ea846.png" 
              alt="Julius Omoleye" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cloud-600/90 to-transparent p-4 text-white">
              <div className="text-sm font-medium">Julius Omoleye</div>
              <div className="text-xs">DevOps & Cloud Architect</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about"
          className="p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
          aria-label="Scroll to About Section"
        >
          <ArrowDown size={24} className="text-cloud-600" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
