import React from "react";
import { FiCommand, FiLayout, FiCodesandbox, FiServer, FiCloud, FiDatabase, FiLock, FiShoppingBag, FiSmartphone, FiGlobe } from 'react-icons/fi';

const EnterpriseWebUI = () => {
  // Service data array
  const services = [
    {
      title: "Web Strategy & Consultation",
      description: "Web applications have become an integral part of businesses in today’s world for everything from offering customer support to promoting your brand online. As your end-to-end web development services provider, we will offer our expert guidance in building scalable, secure and user-friendly web applications for all sorts of use cases.",
      icon: FiCommand,
      gradient: "from-purple-900/50 to-blue-900/30",
      border: "border-purple-800/30 hover:border-purple-500/50",
      textGradient: "from-purple-200 to-blue-200"
    },
    {
      title: "Web UI/UX Design",
      description: "Our design team is thoroughly experienced in designing all kinds of web interfaces from web portals, admin panels to customer-facing mobile web apps. By leveraging our design-centric approach, you can deliver intuitive web experiences to your employees and customers and support your business goals.",
      icon: FiLayout,
      gradient: "from-pink-900/50 to-purple-900/30",
      border: "border-pink-800/30 hover:border-pink-500/50",
      textGradient: "from-pink-200 to-purple-200"
    },
    {
      title: "Frontend Development",
      description: "Modern frontend architectures using React, Vue, and Angular for performant, scalable web applications.",
      icon: FiCodesandbox,
      gradient: "from-blue-900/50 to-purple-900/30",
      border: "border-blue-800/30 hover:border-blue-500/50",
      textGradient: "from-blue-200 to-purple-200"
    },
    {
      title: "Backend Solutions",
      description: "Robust backend systems with Node.js, Python, and cloud services for secure, high-performance operations.",
      icon: FiServer,
      gradient: "from-purple-900/50 to-pink-900/30",
      border: "border-purple-800/30 hover:border-purple-500/50",
      textGradient: "from-purple-200 to-pink-200"
    },
    // Add more services here
    {
      title: "Architecture Design & Consultation",
      description: "Our seasoned system architects perform thorough analysis for every web project to design and implement backend architectures that are scalable, flexible, future-ready, agile and user-centered like the shared-nothing architecture.",
      icon: FiCloud,
      gradient: "from-blue-900/50 to-purple-900/30",
      border: "border-blue-800/30 hover:border-blue-500/50",
      textGradient: "from-blue-200 to-purple-200"
    },
    {
      title: "System Integrations",
      description: "Whether it’s developing new applications, upgrading legacy systems or implementing a new system entirely, integration is a critical part of creating effective software solutions. We can implement advanced solutions for the web by facilitating powerful software integrations.",
      icon: FiDatabase,
      gradient: "from-purple-900/50 to-pink-900/30",
      border: "border-purple-800/30 hover:border-purple-500/50",
      textGradient: "from-purple-200 to-pink-200"
    },
    {
      title: "SaaS Product Development",
      description: "Software as a service has changed the way business is carried out today by catering to all kinds of use cases from accounting to recruitment to project management. Building a successful SaaS product requires thorough planning and execution followed by iterative improvements. Our team is well versed to help you with your custom SaaS product development requirements.",
      icon: FiLock,
      gradient: "from-pink-900/50 to-purple-900/30",
      border: "border-pink-800/30 hover:border-pink-500/50",
      textGradient: "from-pink-200 to-purple-200"
    },
    {
      title: "Custom Web Portal Development",
      description: "We specialize in designing and developing purpose-built web portals like - customer portals, employee portals, distribution portals, information portals, etc., to grow sales, improve customer service, streamline content distribution and improve communications.",
      icon: FiShoppingBag,
      gradient: "from-purple-900/50 to-blue-900/30",
      border: "border-purple-800/30 hover:border-purple-500/50",
      textGradient: "from-purple-200 to-blue-200"
    },
    {
      title: "Ecommerce Platform Development",
      description: "We build custom online selling platforms that enable your business to showcase and monetize your products. From beautifully crafted mobile web apps, powerful backend admin panels for easy management, robust payment gateway support to secure checkouts, we offer flexible ecommerce web solutions to grow your online customer base.",
      icon: FiSmartphone,
      gradient: "from-blue-900/50 to-purple-900/30",
      border: "border-blue-800/30 hover:border-blue-500/50",
      textGradient: "from-blue-200 to-purple-200"
    },
    {
      title: "Application Modernization",
      description: "With the right team, you can achieve your legacy application modernization goals without needing to start from scratch. Our team will carefully analyze your software inventory and come up with an upgrade plan (technology, design, integrations) while preserving what works so that the invested time and money doesn’t go wasted.",
      icon: FiGlobe,
      gradient: "from-purple-900/50 to-pink-900/30",
      border: "border-purple-800/30 hover:border-purple-500/50",
      textGradient: "from-purple-200 to-pink-200"
    }
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center px-4 py-16">
      <div className="relative z-10 w-full max-w-6xl">
        <h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Our Web Services Portfolio
        </h1>
        <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          We offer a broad spectrum of <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">
            web development services
          </span> to fully tap into the capabilities of modern web technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${service.gradient} p-6 rounded-xl backdrop-blur-sm border ${service.border} transition-all duration-300 hover:-translate-y-2 shadow-lg`}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 mb-4 bg-gradient-to-br ${service.gradient.replace('/50', '/70').replace('/30', '/50')} rounded-lg flex items-center justify-center`}>
                  <service.icon className="text-xl text-white" />
                </div>
                <h2 className={`text-xl font-semibold text-transparent bg-gradient-to-r ${service.textGradient} bg-clip-text mb-3`}>
                  {service.title}
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseWebUI;