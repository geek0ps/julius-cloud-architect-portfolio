
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-cloud-100/50 py-16 md:py-24">
      <div className="container-section">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="section-title">Contact Me</h2>
          <div className="w-16 h-1 bg-tech-400 mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
            Let's discuss how I can help transform your IT infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-xl mb-4 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cloud-100 rounded-full text-cloud-600">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 font-medium">Phone</h4>
                    <p className="text-gray-800">+234 7067 315852</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-tech-100 rounded-full text-tech-600">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 font-medium">Email</h4>
                    <p className="text-gray-800">julius.omoleye@outlook.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-full text-gray-600">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 font-medium">Remote Work</h4>
                    <p className="text-gray-800">Available for remote positions worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cloud-500 to-tech-600 p-6 rounded-lg text-white">
              <h3 className="font-bold text-xl mb-4">Looking For</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Cloud Architecture Consulting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>DevOps Implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Kubernetes & Container Solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Cloud Migration Projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Remote Senior DevOps Positions</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-bold text-xl mb-6 text-gray-900">Send me a message</h3>
              
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cloud-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cloud-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cloud-500 focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cloud-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-cloud-600 text-white rounded-md hover:bg-cloud-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
