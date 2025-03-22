import React, { useState } from "react";
import { 
  FiMonitor, FiGlobe, FiActivity, FiTerminal,
  FiKey, FiShield, FiDatabase, FiUserCheck, 
  FiLock, FiAlertTriangle
} from 'react-icons/fi';

const services = [
  {
    title: "AR/VR Experience Design",
    description: "Design immersive augmented and virtual reality experiences tailored for interactive storytelling and marketing.",
    icon: FiMonitor,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "3D Modelling & Rendering",
    description: "Create high-quality, photorealistic 3D models and renders for product visualization, gaming, and architecture.",
    icon: FiGlobe,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Virtual Environment Development",
    description: "Develop interactive virtual worlds with optimized performance and scalability for diverse applications.",
    icon: FiActivity,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Animation & Motion Capture",
    description: "Integrate advanced animation techniques and motion capture technology to bring characters and scenes to life.",
    icon: FiTerminal,
    color: "from-orange-600 to-amber-500",
  },
  {
    title: "Interactive Simulations",
    description: "Build realistic simulations for training, education, and research using cutting-edge AR/VR tools.",
    icon: FiKey,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Spatial Computing Integration",
    description: "Leverage spatial computing to create context-aware AR experiences across diverse platforms.",
    icon: FiShield,
    color: "from-rose-600 to-red-500",
  },
  {
    title: "XR Hardware Integration",
    description: "Integrate and optimize XR hardware for seamless performance across various immersive applications.",
    icon: FiDatabase,
    color: "from-teal-600 to-cyan-500",
  },
  {
    title: "Mixed Reality Solutions",
    description: "Develop hybrid solutions that blend digital and physical environments for engaging mixed reality experiences.",
    icon: FiUserCheck,
    color: "from-yellow-600 to-amber-500",
  },
  {
    title: "3D Asset Optimization",
    description: "Optimize 3D assets for real-time performance and cross-platform compatibility, ensuring smooth interactivity.",
    icon: FiLock,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "Virtual Collaboration Tools",
    description: "Enable remote teamwork with virtual workspaces and interactive meeting environments that enhance collaboration.",
    icon: FiAlertTriangle,
    color: "from-cyan-600 to-blue-500",
  }
];

const ARVR3DModellingUI = () => {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className="h-screen w-full">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            AR/VR & 3D Modelling Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your digital vision with immersive AR/VR experiences and cutting-edge 3D modelling services for entertainment, education, and business.
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default ARVR3DModellingUI;
