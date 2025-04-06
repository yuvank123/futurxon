import React, { useState } from "react";
import { 
  FiShield, FiLock, FiUserCheck, FiAlertTriangle, 
  FiDatabase, FiKey, FiTerminal, FiMonitor,
  FiGlobe, FiActivity
} from 'react-icons/fi';

const services = [
  {
    title: "Network Security",
    description: "Implement robust firewalls, IDS/IPS systems, and zero-trust architectures to safeguard enterprise networks from cyber threats.",
    icon: FiShield,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Cloud Security",
    description: "Secure cloud environments with IAM policies, encryption, and compliance strategies across AWS, Azure, and GCP.",
    icon: FiGlobe,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Endpoint Protection",
    description: "Deploy advanced endpoint protection solutions to detect and mitigate malware, ransomware, and unauthorized access.",
    icon: FiMonitor,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Identity & Access Management (IAM)",
    description: "Enhance authentication and authorization mechanisms with multi-factor authentication (MFA), role-based access control (RBAC), and SSO.",
    icon: FiUserCheck,
    color: "from-orange-600 to-amber-500",
  },
  {
    title: "Threat Intelligence",
    description: "Leverage real-time threat intelligence and proactive monitoring to detect and respond to cyber threats before they escalate.",
    icon: FiAlertTriangle,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Data Encryption & Privacy",
    description: "Implement end-to-end encryption, data loss prevention (DLP), and privacy frameworks to protect sensitive data.",
    icon: FiLock,
    color: "from-rose-600 to-red-500",
  },
  {
    title: "Security Operations Center (SOC)",
    description: "Establish a 24/7 SOC for continuous security monitoring, incident response, and forensics.",
    icon: FiDatabase,
    color: "from-teal-600 to-cyan-500",
  },
  {
    title: "Penetration Testing",
    description: "Conduct ethical hacking and vulnerability assessments to identify security weaknesses before attackers do.",
    icon: FiKey,
    color: "from-yellow-600 to-amber-500",
  },
  {
    title: "Compliance & Risk Management",
    description: "Ensure compliance with GDPR, ISO 27001, HIPAA, and NIST frameworks while minimizing business risks.",
    icon: FiTerminal,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "Incident Response & Forensics",
    description: "Develop a robust incident response plan and conduct digital forensics to investigate security breaches.",
    icon: FiActivity,
    color: "from-cyan-600 to-blue-500",
  }
];

const CybersecurityUI = () => {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-mono tracking-tighter font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect your digital assets with our comprehensive cybersecurity services, including threat detection, compliance, and risk management.
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
  )};

export default CybersecurityUI;
