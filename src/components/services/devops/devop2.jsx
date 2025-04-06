import React, { useState } from "react";
import { 
  FiCodesandbox, FiServer, FiCloud, FiLock, 
  FiDatabase, FiTerminal, FiMonitor, FiGitBranch,
  FiShield, FiActivity
} from 'react-icons/fi';

const services = [
  {
    title: "CI/CD Pipeline Implementation",
    description: "Design and implement robust CI/CD pipelines using industry-leading tools like Jenkins, GitLab CI, and CircleCI. Automate your build, test, and deployment processes for faster release cycles and improved software quality.",
    icon: FiCodesandbox,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Infrastructure as Code (IaC)",
    description: "Implement Terraform and AWS CloudFormation for provisioning cloud infrastructure. Enable version-controlled, repeatable environment setups across development, staging, and production.",
    icon: FiTerminal,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Cloud Infrastructure Management",
    description: "Optimize AWS, Azure, and GCP environments with automated scaling, load balancing, and cost management strategies. Implement serverless architectures and hybrid cloud solutions.",
    icon: FiCloud,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Containerization & Orchestration",
    description: "Docker containerization and Kubernetes orchestration solutions for scalable microservices architectures. Implement Helm charts and container security scanning.",
    icon: FiServer,
    color: "from-orange-600 to-amber-500",
  },
  {
    title: "Monitoring & Observability",
    description: "Implement comprehensive monitoring stacks with Prometheus, Grafana, and ELK. Configure alerts, log aggregation, and performance metrics for proactive system management.",
    icon: FiMonitor,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "DevSecOps Integration",
    description: "Integrate security into your DevOps pipeline with automated vulnerability scanning, SAST/DAST tools, and compliance as code implementations.",
    icon: FiShield,
    color: "from-rose-600 to-red-500",
  },
  {
    title: "Configuration Management",
    description: "Automate server configuration and management using Ansible, Chef, and Puppet. Ensure consistent environments across your infrastructure.",
    icon: FiDatabase,
    color: "from-teal-600 to-cyan-500",
  },
  {
    title: "Release Management",
    description: "Implement blue-green deployments, canary releases, and feature flagging systems. Reduce downtime and enable rapid rollback capabilities.",
    icon: FiActivity,
    color: "from-yellow-600 to-amber-500",
  },
  {
    title: "Compliance as Code",
    description: "Automate regulatory compliance with policy-as-code implementations using Open Policy Agent and AWS Config. Maintain audit-ready infrastructure.",
    icon: FiLock,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "GitOps Implementation",
    description: "Implement ArgoCD and Flux for GitOps workflows. Achieve declarative infrastructure management with Git as your single source of truth.",
    icon: FiGitBranch,
    color: "from-cyan-600 to-blue-500",
  }
];

const EnterprisedevopUI = () => {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Enterprise DevOps Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Accelerate your software delivery lifecycle with our comprehensive DevOps engineering services and cloud-native expertise
          </p>
        </div>

        {/* Rest of the component remains exactly the same */}
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

export default EnterprisedevopUI;