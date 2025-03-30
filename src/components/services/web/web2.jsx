import React, { useState } from "react";
import { 
  FiCommand, FiLayout, FiCodesandbox, FiServer, 
  FiCloud, FiShoppingBag, FiSmartphone, FiLock, 
  FiDatabase, FiGlobe 
} from 'react-icons/fi';

const services = [
  {
    title: "Web Strategy & Consultation",
    description: "Web applications have become an integral part of businesses in today’s world for everything from offering customer support to promoting your brand online. As your end-to-end web development services provider, we will offer our expert guidance in building scalable, secure and user-friendly web applications for all sorts of use cases.",
    icon: FiCommand,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Web UI/UX Design",
    description: "Our design team is thoroughly experienced in designing all kinds of web interfaces from web portals, admin panels to customer-facing mobile web apps. By leveraging our design-centric approach, you can deliver intuitive web experiences to your employees and customers and support your business goals.",
    icon: FiLayout,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Frontend Development",
    description: "Modern frontend architectures using React, Vue, and Angular for performant, scalable web applications. We implement responsive designs with cutting-edge technologies like Next.js and Gatsby for optimal performance.",
    icon: FiCodesandbox,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Backend Solutions",
    description: "Robust backend systems with Node.js, Python, and cloud services for secure, high-performance operations. Our solutions include RESTful APIs, microservices architecture, and real-time communication systems.",
    icon: FiServer,
    color: "from-orange-600 to-amber-500",
  },
  {
    title: "Cloud Integration",
    description: "Seamless cloud integration with AWS, Azure, and Google Cloud Platform. We optimize infrastructure for scalability, reliability, and cost-efficiency with serverless architectures and containerization.",
    icon: FiCloud,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "E-commerce Solutions",
    description: "Full-stack e-commerce development with platforms like Shopify Plus and custom solutions. We build secure payment gateways, inventory management systems, and personalized shopping experiences.",
    icon: FiShoppingBag,
    color: "from-rose-600 to-red-500",
  },
  {
    title: "Mobile Optimization",
    description: "Progressive Web Apps (PWAs) and mobile-first development strategies. Ensure your web applications perform flawlessly across all devices and screen sizes.",
    icon: FiSmartphone,
    color: "from-teal-600 to-cyan-500",
  },
  {
    title: "API Development",
    description: "Custom API development and integration services. We create secure, well-documented APIs that power web, mobile, and third-party applications.",
    icon: FiLock,
    color: "from-yellow-600 to-amber-500",
  },
  {
    title: "Security Audits",
    description: "Comprehensive security audits and penetration testing. Protect your web applications with SSL implementation, data encryption, and compliance certifications.",
    icon: FiDatabase,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "Maintenance & Support",
    description: "24/7 monitoring, maintenance, and technical support services. We offer performance optimization, security updates, and continuous feature enhancements.",
    icon: FiGlobe,
    color: "from-cyan-600 to-blue-500",
  }
];

const EnterpriseWebUI = () => {
  const [selectedService, setSelectedService] = useState(null);
return (
  <div className="min-h-screen w-full">
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-white font-mono tracking-tighter bg-clip-text text-transparent mb-4">
          Enterprise Web Solutions
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Transform your digital presence with our comprehensive suite of web development services and technical expertise
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div 
            key={service.title} 
            className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer group ${
              selectedService?.title === service.title 
                ? "bg-gradient-to-br scale-[1.02] shadow-2xl"
                : "hover:bg-gray-800/30 shadow-lg bg-gray-900/40"
            } ${service.color} border border-gray-700/30`}
            onClick={() => 
              setSelectedService(prev => 
                prev?.title === service.title ? null : service
              )
            }
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} mr-4`}>
                    <service.icon className="text-2xl text-white" />
                  </div>
                  <h2 className={`text-lg font-semibold ${
                    selectedService?.title === service.title 
                      ? "text-white" 
                      : "text-gray-300 group-hover:text-white transition-colors"
                  }`}>
                    {service.title}
                  </h2>
                </div>
                <span className={`text-2xl ${
                  selectedService?.title === service.title 
                    ? "text-white rotate-45" 
                    : "text-gray-400 group-hover:text-white"
                } transition-transform`}>
                  +
                </span>
              </div>

              {selectedService?.title === service.title && (
                <div className="mt-4 overflow-hidden">
                  <p className="text-gray-300 text-base leading-relaxed animate-fadeIn">
                    {service.description}
                  </p>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color.replace('bg-', '')} opacity-50`} />
                </div>
              )}
            </div>

            {selectedService?.title === service.title && (
              <div className="absolute inset-0 -z-10 animate-gradient-rotate opacity-30">
                <div className={`absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-30`} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
)};

export default EnterpriseWebUI;