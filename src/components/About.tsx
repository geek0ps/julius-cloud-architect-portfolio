
import React from 'react';
import { Server, Cloud, Code, Users, Workflow, Database, Network, Layout, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container-section">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 bg-tech-400 mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
            A skilled Solutions Architect, DevOps Engineer, and Cloud Specialist with exceptional development abilities
            and extensive knowledge of cloud computing and software engineering technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700">
              With strong analytical and problem-solving skills, I transform IT infrastructure, operations, and 
              business applications into innovative, scalable, highly available, secure, cost-effective, and 
              fault-tolerant environments across Azure, AWS, Google Cloud, and custom platforms.
            </p>
            
            <p className="text-gray-700">
              My expertise spans leading complex migrations to Kubernetes environments, architecting cloud solutions, implementing infrastructure 
              as code, and optimizing containerized applications. As a networking specialist and platform engineer, I excel at building robust, 
              scalable systems that meet modern enterprise demands.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="tech-badge">AWS</span>
              <span className="tech-badge">Azure</span>
              <span className="tech-badge">GCP</span>
              <span className="tech-badge">Kubernetes</span>
              <span className="tech-badge">Docker</span>
              <span className="tech-badge">Terraform</span>
              <span className="tech-badge">Ansible</span>
              <span className="tech-badge">CI/CD</span>
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Networking</span>
              <span className="tech-badge">Linux</span>
              <span className="tech-badge">Platform Engineering</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-cloud-100 p-4 rounded-lg border border-cloud-200 hover:shadow-md transition-shadow">
              <Server className="w-8 h-8 mb-3 text-cloud-500" />
              <h3 className="font-semibold text-md mb-1">Infrastructure</h3>
              <p className="text-gray-600 text-sm">
                Designing scalable, secure infrastructure
              </p>
            </div>
            
            <div className="bg-tech-100 p-4 rounded-lg border border-tech-200 hover:shadow-md transition-shadow">
              <Cloud className="w-8 h-8 mb-3 text-tech-500" />
              <h3 className="font-semibold text-md mb-1">Cloud Architecture</h3>
              <p className="text-gray-600 text-sm">
                Creating optimized cloud solutions
              </p>
            </div>
            
            <div className="bg-cloud-100 p-4 rounded-lg border border-cloud-200 hover:shadow-md transition-shadow">
              <Code className="w-8 h-8 mb-3 text-cloud-500" />
              <h3 className="font-semibold text-md mb-1">Automation</h3>
              <p className="text-gray-600 text-sm">
                Building CI/CD pipelines and IaC
              </p>
            </div>
            
            <div className="bg-tech-100 p-4 rounded-lg border border-tech-200 hover:shadow-md transition-shadow">
              <Database className="w-8 h-8 mb-3 text-tech-500" />
              <h3 className="font-semibold text-md mb-1">Containerization</h3>
              <p className="text-gray-600 text-sm">
                Docker and Kubernetes expertise
              </p>
            </div>
            
            <div className="bg-cloud-100 p-4 rounded-lg border border-cloud-200 hover:shadow-md transition-shadow">
              <Network className="w-8 h-8 mb-3 text-cloud-500" />
              <h3 className="font-semibold text-md mb-1">Networking</h3>
              <p className="text-gray-600 text-sm">
                Advanced cloud networking solutions
              </p>
            </div>
            
            <div className="bg-tech-100 p-4 rounded-lg border border-tech-200 hover:shadow-md transition-shadow">
              <Shield className="w-8 h-8 mb-3 text-tech-500" />
              <h3 className="font-semibold text-md mb-1">Security</h3>
              <p className="text-gray-600 text-sm">
                Implementing secure cloud environments
              </p>
            </div>
            
            <div className="bg-tech-100 p-4 rounded-lg border border-tech-200 hover:shadow-md transition-shadow col-span-3 md:col-span-1">
              <Layout className="w-8 h-8 mb-3 text-tech-500" />
              <h3 className="font-semibold text-md mb-1">Platform Engineering</h3>
              <p className="text-gray-600 text-sm">
                Building developer platforms and tooling
              </p>
            </div>
            
            <div className="bg-cloud-100 p-4 rounded-lg border border-cloud-200 hover:shadow-md transition-shadow col-span-3 md:col-span-2">
              <Workflow className="w-8 h-8 mb-3 text-cloud-500" />
              <h3 className="font-semibold text-md mb-1">Migration Specialist</h3>
              <p className="text-gray-600 text-sm">
                Expert in migrating applications to Kubernetes and cloud environments with minimal downtime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
