
import React from 'react';
import { Globe, Database, Cloud, Shield, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  link?: string;
  tags: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "AWS Well-Architected Tool",
      description: "A comprehensive solution for evaluating AWS environments against best practices, helping clients optimize their cloud infrastructure for security, reliability, performance, and cost-efficiency.",
      icon: Shield,
      link: "https://war.klaudlytics.com",
      tags: ["AWS", "Security", "Cloud Architecture", "Assessment"]
    },
    {
      title: "S3 Disaster Recovery Optimizer",
      description: "A tool that optimizes cost and performance for S3 disaster recovery scenarios, helping organizations maintain business continuity while reducing storage costs.",
      icon: Database,
      link: "#",
      tags: ["AWS", "S3", "Disaster Recovery", "Cost Optimization"]
    },
    {
      title: "Automated Insurance Claims Processor",
      description: "An AI-powered system using Amazon Bedrock to automate and streamline insurance claim processing, reducing manual effort and improving accuracy and customer satisfaction.",
      icon: Cloud,
      link: "#",
      tags: ["Amazon Bedrock", "AI/ML", "Automation", "AWS"]
    },
    {
      title: "Kubernetes Migration Framework",
      description: "A comprehensive framework for migrating applications to Kubernetes environments, ensuring seamless transitions with minimal downtime and optimized performance.",
      icon: Globe,
      link: "#",
      tags: ["Kubernetes", "Migration", "DevOps", "Containerization"]
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container-section">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="section-title text-gray-800">Featured Projects</h2>
          <div className="w-16 h-1 bg-sky-500 mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
            These projects showcase my expertise in cloud architecture, DevOps, and platform engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-sky-100 to-teal-100 p-3 rounded-xl text-sky-600">
                    <project.icon size={28} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sky-500 hover:text-sky-600 p-1"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                  
                  <p className="mt-2 text-gray-600">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-sky-100 text-sky-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
