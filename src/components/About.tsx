
import React from 'react';
import { Server, Cloud, Code, Users, Workflow, Database } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container-section">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="section-title">About Me</h2>
          <div className="w-16 h-1 bg-tech-400 mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
            A skilled Solutions Architect, DevOps, and Cloud Engineer with exceptional development abilities
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
              My experience spans leading complex migrations, architecting cloud solutions, implementing infrastructure 
              as code, and optimizing containerized applications with Docker and Kubernetes. I'm passionate about automation, 
              system optimization, and building robust CI/CD pipelines.
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
              <span className="tech-badge">Linux</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-cloud-100 p-6 rounded-lg border border-cloud-200 hover:shadow-md transition-shadow">
              <Server className="w-10 h-10 mb-4 text-cloud-500" />
              <h3 className="font-semibold text-lg mb-2">Infrastructure</h3>
              <p className="text-gray-600 text-sm">
                Designing and implementing scalable, secure infrastructure in AWS, Azure, and GCP.
              </p>
            </div>
            
            <div className="bg-tech-100 p-6 rounded-lg border border-tech-200 hover:shadow-md transition-shadow">
              <Cloud className="w-10 h-10 mb-4 text-tech-500" />
              <h3 className="font-semibold text-lg mb-2">Cloud Architecture</h3>
              <p className="text-gray-600 text-sm">
                Creating well-architected cloud solutions optimized for performance, security, and cost.
              </p>
            </div>
            
            <div className="bg-tech-100 p-6 rounded-lg border border-tech-200 hover:shadow-md transition-shadow">
              <Code className="w-10 h-10 mb-4 text-tech-500" />
              <h3 className="font-semibold text-lg mb-2">Automation</h3>
              <p className="text-gray-600 text-sm">
                Building CI/CD pipelines and infrastructure as code with Terraform and Ansible.
              </p>
            </div>
            
            <div className="bg-cloud-100 p-6 rounded-lg border border-cloud-200 hover:shadow-md transition-shadow">
              <Database className="w-10 h-10 mb-4 text-cloud-500" />
              <h3 className="font-semibold text-lg mb-2">Containerization</h3>
              <p className="text-gray-600 text-sm">
                Containerizing applications with Docker and orchestrating with Kubernetes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
