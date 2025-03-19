import React, { useState } from "react";
import { 
  FiCpu, FiDatabase, FiSettings, FiBarChart, 
  FiMessageSquare, FiZap, FiShield, FiLayers,
  FiGlobe, FiSmartphone
} from 'react-icons/fi';

const services = [
  {
    title: "AI-Powered Chatbots",
    description: "Develop intelligent conversational agents using GPT, Dialogflow, and Rasa. Enhance customer interactions with NLP-driven automation and sentiment analysis.",
    icon: FiMessageSquare,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Machine Learning Models",
    description: "Design and deploy predictive models using TensorFlow, PyTorch, and Scikit-Learn. Leverage AI for advanced analytics, forecasting, and anomaly detection.",
    icon: FiCpu,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "AI Data Processing",
    description: "Automate data pipelines with AI-driven preprocessing and feature engineering. Utilize tools like Apache Spark, Pandas, and Dask for scalable data handling.",
    icon: FiDatabase,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Computer Vision Solutions",
    description: "Implement AI-powered image recognition, object detection, and facial recognition using OpenCV, YOLO, and Google Vision API.",
    icon: FiGlobe,
    color: "from-orange-600 to-amber-500",
  },
  {
    title: "AI-Powered Analytics",
    description: "Gain insights with AI-driven business intelligence, anomaly detection, and pattern recognition. Leverage Power BI, Tableau, and Google Looker.",
    icon: FiBarChart,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "AI Security & Fraud Detection",
    description: "Deploy AI-based security solutions for fraud detection, threat analysis, and anomaly detection using machine learning and deep learning models.",
    icon: FiShield,
    color: "from-rose-600 to-red-500",
  },
  {
    title: "AI in Edge Computing",
    description: "Optimize AI inference on edge devices using TensorFlow Lite, NVIDIA Jetson, and Edge TPU. Enable real-time AI at the edge.",
    icon: FiSmartphone,
    color: "from-teal-600 to-cyan-500",
  },
  {
    title: "AI Workflow Automation",
    description: "Enhance business processes with AI-driven automation using RPA tools like UiPath, Automation Anywhere, and Blue Prism.",
    icon: FiSettings,
    color: "from-yellow-600 to-amber-500",
  },
  {
    title: "AI-Powered Recommendation Systems",
    description: "Implement personalized recommendation engines using collaborative filtering, content-based filtering, and hybrid AI models.",
    icon: FiLayers,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "AI in IoT",
    description: "Enable AI-driven IoT solutions for predictive maintenance, smart monitoring, and automated decision-making using cloud AI services.",
    icon: FiZap,
    color: "from-cyan-600 to-blue-500",
  }
];

const AIEnterpriseUI = () => {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            AI Solutions & Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI technologies, automation, and intelligent insights tailored for enterprise-scale applications.
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

export default AIEnterpriseUI;