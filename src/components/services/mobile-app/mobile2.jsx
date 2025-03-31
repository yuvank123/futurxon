import React, { useState } from "react";
import { 
  FiCommand, FiLayout, FiCodesandbox, FiServer, 
  FiCloud, FiShoppingBag, FiSmartphone, FiLock, 
  FiDatabase, FiGlobe 
} from 'react-icons/fi';

const services = [
  {
    title: "Mobile Strategy & Consultation",
    description: "Mobile applications are crucial for engaging customers and streamlining operations. Our experts provide strategic planning to help you choose the right platforms (iOS, Android, cross-platform) and define feature sets that align with your business objectives.",
    icon: FiCommand,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Mobile UI/UX Design",
    description: "Crafting intuitive and visually appealing mobile interfaces optimized for touch interactions. Our designers follow platform-specific guidelines while creating engaging user experiences that drive adoption and retention.",
    icon: FiLayout,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Native App Development",
    description: "High-performance native applications built with Swift for iOS and Kotlin for Android. Leverage platform-specific features and hardware capabilities for superior speed and user experience.",
    icon: FiSmartphone,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Cross-Platform Development",
    description: "Cost-effective solutions using React Native and Flutter to create apps that work seamlessly across iOS and Android. Maintain native-like performance while sharing code between platforms.",
    icon: FiCodesandbox,
    color: "from-orange-600 to-amber-500",
  },
  {
    title: "Backend Solutions",
    description: "Scalable backend infrastructure supporting mobile apps with Node.js, Firebase, and AWS. Implement user authentication, real-time databases, and cloud synchronization.",
    icon: FiServer,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Mobile E-commerce",
    description: "Feature-rich shopping apps with secure payment gateways, product catalogs, and personalized recommendations. Integrate with existing ERP and CRM systems for unified operations.",
    icon: FiShoppingBag,
    color: "from-rose-600 to-red-500",
  },
  {
    title: "Cloud Integration",
    description: "Seamless integration with AWS Amplify, Google Firebase, and Azure Mobile Services. Implement cloud storage, push notifications, and serverless functions.",
    icon: FiCloud,
    color: "from-teal-600 to-cyan-500",
  },
  {
    title: "API Development",
    description: "Custom RESTful APIs and GraphQL endpoints for mobile app integration. Ensure secure communication with OAuth 2.0 and JWT authentication.",
    icon: FiLock,
    color: "from-yellow-600 to-amber-500",
  },
  {
    title: "Security & Compliance",
    description: "End-to-end encryption, biometric authentication, and GDPR compliance audits. Protect user data and meet industry regulatory requirements.",
    icon: FiDatabase,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "Maintenance & Support",
    description: "Proactive app updates, performance monitoring, and store deployment management. We provide 24/7 support for bug fixes and feature enhancements.",
    icon: FiGlobe,
    color: "from-cyan-600 to-blue-500",
  }
];

const EnterpriseMobileUI = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-white font-mono tracking-tighter bg-clip-text text-transparent mb-4">
            Enterprise Mobile Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your mobile presence with our comprehensive suite of app development services and technical expertise
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
  );
};

export default EnterpriseMobileUI;