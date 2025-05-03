
import React from 'react';
import { Check, PieChart } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 95 },
        { name: "Azure", level: 85 },
        { name: "GCP", level: 80 }
      ]
    },
    {
      title: "DevOps Tools",
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 90 },
        { name: "Jenkins", level: 85 },
        { name: "GitHub Actions", level: 90 }
      ]
    },
    {
      title: "IaC & Configuration",
      skills: [
        { name: "Terraform", level: 95 },
        { name: "Ansible", level: 90 },
        { name: "CloudFormation", level: 85 }
      ]
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "CloudWatch", level: 90 },
        { name: "Prometheus/Grafana", level: 90 },
        { name: "ELK Stack", level: 85 },
        { name: "Datadog", level: 80 }
      ]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "AWS Certified DevOps Engineer Professional",
    "Microsoft Certified: Azure Fundamentals",
    "AWS Knowledge: Migration Foundations"
  ];

  return (
    <section id="skills" className="bg-cloud-50/50 py-16 md:py-24">
      <div className="container-section">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="section-title">Skills & Certifications</h2>
          <div className="w-16 h-1 bg-tech-400 mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
            My technical expertise and professional certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="section-subtitle flex items-center gap-2">
              <PieChart className="text-cloud-500" />
              Technical Proficiency
            </h3>
            
            <div className="grid gap-8">
              {skillCategories.map((category, idx) => (
                <div key={idx}>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    {category.title}
                  </h4>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full animated-gradient" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="section-subtitle">Professional Certifications</h3>
            
            <div className="grid gap-5">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="p-1.5 bg-cloud-100 rounded-full text-cloud-500">
                    <Check size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{cert}</h4>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-gradient-to-r from-cloud-600 to-tech-600 rounded-lg text-white">
              <h4 className="font-semibold text-xl mb-3">Additional Skills</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                <li className="flex items-center gap-2">
                  <Check size={16} />
                  <span>Linux & Windows</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} />
                  <span>Python</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} />
                  <span>Bash Scripting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} />
                  <span>Django & Flask</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} />
                  <span>SQL & NoSQL</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} />
                  <span>CI/CD Pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} />
                  <span>Web Servers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} />
                  <span>Monitoring Tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
