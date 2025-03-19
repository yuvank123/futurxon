import React, { useState } from "react";
import { 
  FiUser, FiLayout, FiPenTool, FiMonitor, FiTarget, 
  FiCheckCircle, FiDatabase, FiCloud, FiShield, FiActivity 
} from 'react-icons/fi';

const services = [
  {
    title: "User Research",
    description: "Conduct in-depth user research to understand behaviors, needs, and pain points. Gain insights that drive data-informed design decisions.",
    icon: FiUser,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Information Architecture",
    description: "Structure and organize content effectively with well-planned information architecture, ensuring intuitive navigation and content flow.",
    icon: FiLayout,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Wireframing & Prototyping",
    description: "Develop wireframes and interactive prototypes rapidly to iterate design concepts and validate ideas before moving to high-fidelity designs.",
    icon: FiPenTool,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Visual Design",
    description: "Craft high-fidelity visual designs that align with your brand identity, ensuring pixel-perfect interfaces and engaging aesthetics.",
    icon: FiMonitor,
    color: "from-orange-600 to-amber-500",
  },
  {
    title: "Interaction Design",
    description: "Design intuitive interactions and micro-animations that enhance the overall user experience and create meaningful user engagements.",
    icon: FiTarget,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Usability Testing",
    description: "Validate designs through comprehensive usability testing, gathering real user feedback to refine and optimize your digital interfaces.",
    icon: FiCheckCircle,
    color: "from-rose-600 to-red-500",
  },
  {
    title: "Design Systems",
    description: "Develop scalable design systems and component libraries to ensure consistency, streamline development, and accelerate product delivery.",
    icon: FiDatabase,
    color: "from-teal-600 to-cyan-500",
  },
  {
    title: "Responsive & Adaptive Design",
    description: "Create designs that adapt seamlessly across devices and screen sizes, ensuring an optimal experience on mobile, tablet, and desktop.",
    icon: FiCloud,
    color: "from-yellow-600 to-amber-500",
  },
  {
    title: "Accessibility",
    description: "Implement inclusive design practices that ensure digital experiences are accessible to all users, including those with disabilities.",
    icon: FiShield,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "Motion Design",
    description: "Incorporate engaging motion design and micro-interactions to bring your interfaces to life and enhance user delight.",
    icon: FiActivity,
    color: "from-cyan-600 to-blue-500",
  }
];

const UIUXDesignUI = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl p-3 font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-4">
            UI/UX Design Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your digital presence with our comprehensive UI/UX design solutions. From user research to engaging visual experiences, we create intuitive designs that resonate with your audience.
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
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color.replace('from-', '').replace('to-', '')} opacity-50`} />
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

export default UIUXDesignUI;
