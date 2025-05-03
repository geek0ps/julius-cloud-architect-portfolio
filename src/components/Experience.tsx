
import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  isExpanded?: boolean;
}

const Experience: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([
    {
      company: "Opsfleet",
      role: "Senior DevOps Engineer",
      period: "January 2024 - Present",
      location: "Israel (Remote)",
      description: [
        "Led multiple successful client migrations from on-premises environments to AWS cloud, specializing in Kubernetes workloads (EKS and ROSA).",
        "Architected highly available cloud environments utilizing AWS services including ECS, EKS, Lambda, API Gateway, DynamoDB, and RDS.",
        "Designed and implemented scalable hybrid solutions connecting on-premises infrastructure with AWS cloud services using AWS services like AWS Site-to-Site VPN, Transit Gateways, AWS Direct Connect.",
        "Created AI solutions leveraging Amazon Bedrock integrated with Lambda, S3, DynamoDB, Glue, and Redshift.",
        "Implemented infrastructure as code using Terraform and Terragrunt, ensuring consistent and repeatable deployments.",
        "Orchestrated containerized applications with Docker and Helm, optimizing deployment workflows and resource utilization."
      ],
      isExpanded: true
    },
    {
      company: "Tramango",
      role: "Lead DevOps Engineer",
      period: "January 2022 - December 2024",
      location: "Nigeria",
      description: [
        "Spearheaded implementation of a multi-account AWS Organizations strategy as Lead DevOps Engineer, reducing operational overhead by 30% and improving cost auditing efficiency by 25%, contributing to the startup's successful $5M funding round.",
        "Led the architectural redesign and migration of the company's flight system from EC2 to EKS, enhancing scalability by 50% and reducing response time by 35%, positioning the startup as Nigeria's fastest online travel agency (OTA).",
        "Designed and implemented a warm standby disaster recovery system with executive stakeholders, reducing potential recovery time by 60% through automated replication procedures and infrastructure-as-code practices.",
        "Established the company's cloud infrastructure foundation using Terraform and Terragrunt, improving system reliability by 30% and operational efficiency by 20% while enabling rapid scaling to support business growth."
      ],
      isExpanded: false
    },
    {
      company: "University of Chicago",
      role: "AI Engineer",
      period: "April 2022 - January 2023",
      location: "Chicago (Remote)",
      description: [
        "Streamlined system operations by reducing manual interventions by 50% through the development of custom automation scripts with Python.",
        "Developed and trained machine learning models using Python-based libraries such as Scikit-learn and TensorFlow, improving predictive analytics and enhancing data-driven decision-making.",
        "Optimized and fine-tuned existing machine learning models by improving performance metrics (accuracy, precision, recall), resulting in significant enhancements in model efficiency and processing speed.",
        "Engineered a custom program for the CDC to automate the generation of their cancer research documentation website, leveraging Markdown for content formatting and ensuring streamlined, consistent updates."
      ],
      isExpanded: false
    },
    {
      company: "FastRyders",
      role: "Software Engineer (DevOps)",
      period: "January 2019 - January 2022",
      location: "Nigeria",
      description: [
        "Developed the backend of a production-grade payment gateway using Django, ensuring secure and reliable transaction processing.",
        "Built an ordering system using Flask and pure Python scripting, integrating Telegram and WhatsApp bots to enable seamless customer bookings through these messaging platforms.",
        "Led migration from on-premises servers and VMs to cloud solutions (Amazon ECS, EKS, Red Hat OpenShift), optimizing resources and boosting deployment flexibility.",
        "Developed CI/CD pipelines using AWS CodeBuild, CodeDeploy, and CodePipeline, enhancing automation and efficiency of software delivery.",
        "Created an advanced alerting mechanism with AWS SNS and CloudWatch, monitoring 200 metrics, enabling faster decisions and improving operational effectiveness."
      ],
      isExpanded: false
    }
  ]);

  const toggleExpand = (index: number) => {
    setJobs(jobs.map((job, i) => 
      i === index ? { ...job, isExpanded: !job.isExpanded } : job
    ));
  };

  return (
    <section id="experience" className="bg-white py-16 md:py-24">
      <div className="container-section">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="section-title">Work Experience</h2>
          <div className="w-16 h-1 bg-tech-400 mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
            My professional journey and accomplishments
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              className={cn(
                "border border-gray-200 rounded-lg overflow-hidden transition-shadow",
                job.isExpanded ? "shadow-md" : "hover:shadow-sm"
              )}
            >
              <div 
                className="p-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                  <h4 className="text-lg font-medium text-cloud-600">{job.company}</h4>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={16} className="text-tech-500" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} className="text-tech-500" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label={job.isExpanded ? "Collapse details" : "Expand details"}
                >
                  {job.isExpanded ? 
                    <ChevronUp size={20} className="text-gray-600" /> : 
                    <ChevronDown size={20} className="text-gray-600" />
                  }
                </button>
              </div>
              
              {job.isExpanded && (
                <div className="bg-gray-50 p-6 border-t border-gray-200">
                  <ul className="space-y-3">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-tech-100 text-tech-600 flex items-center justify-center mt-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-tech-600"></span>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block p-4 rounded-lg bg-gradient-to-r from-cloud-100 to-tech-100 border border-gray-200">
            <div className="flex items-center gap-2">
              <Briefcase className="text-cloud-500" size={20} />
              <p className="text-gray-700">
                <span className="font-semibold">Education: </span> 
                B.Sc Statistics, University of Agriculture Abeokuta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
