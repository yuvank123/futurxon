import React, { useState } from "react";
import { 
  FiCloud, FiServer, FiShield, FiDatabase, 
  FiTerminal, FiActivity, FiLock, FiGitBranch,
  FiZap, FiBox
} from 'react-icons/fi';

const services = [
  {
    title: "Cloud-Native CI/CD Pipelines",
    description: "Implement enterprise-grade deployment pipelines using AWS CodePipeline, Google Cloud Build, and Azure DevOps. Automate cloud deployments with integrated security checks and multi-environment promotion.",
    icon: FiZap,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Multi-Cloud IaC",
    description: "Unified infrastructure as code solutions using Terraform Cloud, AWS CDK, and Azure Bicep. Manage cross-cloud resources with version-controlled templates and collaborative workflows.",
    icon: FiTerminal,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Cloud Cost Optimization",
    description: "Implement automated cost management with AWS Cost Explorer, Azure Cost Management, and GCP Cost Tools. Right-size resources and leverage spot instances across cloud platforms.",
    icon: FiCloud,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Managed Kubernetes Services",
    description: "Enterprise Kubernetes solutions using EKS, AKS, and GKE. Implement auto-scaling, service meshes, and cloud-native storage solutions with integrated monitoring.",
    icon: FiServer,
    color: "from-orange-600 to-amber-500",
  },
  {
    title: "Cloud Monitoring & Analytics",
    description: "Full-stack observability with AWS CloudWatch, Azure Monitor, and Google Cloud Operations. Centralize logs, metrics, and traces across hybrid cloud environments.",
    icon: FiActivity,
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Cloud Security Posture",
    description: "Implement CSPM solutions with AWS Security Hub, Azure Defender, and GCP Security Command Center. Automated compliance checks and real-time threat detection.",
    icon: FiShield,
    color: "from-rose-600 to-red-500",
  },
  {
    title: "Cloud Database Management",
    description: "Managed cloud database services including AWS RDS, Azure CosmosDB, and Google Cloud SQL. Automated backups, scaling, and performance tuning.",
    icon: FiDatabase,
    color: "from-teal-600 to-cyan-500",
  },
  {
    title: "Cloud Migration Services",
    description: "End-to-end cloud migration strategies with AWS Migration Hub, Azure Migrate, and Google Migrate. Lift-and-shift to cloud-native transformations with zero downtime.",
    icon: FiBox,
    color: "from-yellow-600 to-amber-500",
  },
  {
    title: "Cloud Identity Management",
    description: "Centralized access control with AWS IAM, Azure Active Directory, and Google Cloud IAM. Implement SSO, MFA, and least-privilege policies across cloud environments.",
    icon: FiLock,
    color: "from-red-600 to-pink-500",
  },
  {
    title: "Serverless Cloud Architectures",
    description: "Build scalable solutions with AWS Lambda, Azure Functions, and Google Cloud Run. Event-driven architectures with automated scaling and pay-per-use pricing.",
    icon: FiGitBranch,
    color: "from-cyan-600 to-blue-500",
  }
];

const EnterpriseCloudUI = () => {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-mono tracking-tighter bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Enterprise Cloud Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your cloud infrastructure with full-stack management, optimization, and security services across AWS, Azure, and Google Cloud Platform
          </p>
        </div>

        {/* Service grid remains structurally the same */}
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
              {/* Card content remains same structure */}
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

export default EnterpriseCloudUI;