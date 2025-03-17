import React from "react";
import { FiCloud, FiRepeat, FiServer, FiPackage, FiActivity, FiUsers } from 'react-icons/fi';

const DevOpsTechnologyStack = () => {
  const categories = [
    {
      title: "Cloud Platforms",
      icon: FiCloud,
      items: ["AWS", "Google Cloud", "Azure", "DigitalOcean", "Linode", "IBM Cloud", "Oracle Cloud", "Alibaba Cloud"],
      color: "purple"
    },
    {
      title: "CI/CD",
      icon: FiRepeat,
      items: ["Jenkins", "GitHub Actions", "CircleCI", "GitLab CI", "Argo CD", "Spinnaker", "Travis CI", "Azure DevOps"],
      color: "pink"
    },
    {
      title: "IaC & Config",
      icon: FiServer,
      items: ["Terraform", "Ansible", "Pulumi", "CloudFormation", "Chef", "Puppet", "SaltStack", "Crossplane"],
      color: "blue"
    },
    {
      title: "Containerization",
      icon: FiPackage,
      items: ["Docker", "Kubernetes", "Helm", "OpenShift", "Rancher", "Istio", "Containerd", "Podman"],
      color: "purple"
    },
    {
      title: "Monitoring",
      icon: FiActivity,
      items: ["Prometheus", "Grafana", "New Relic", "Datadog", "Splunk", "Elastic Stack", "Nagios", "Zabbix"],
      color: "pink"
    },
    {
      title: "Collaboration",
      icon: FiUsers,
      items: ["Slack", "Jira", "Confluence", "Notion", "Discord", "Microsoft Teams", "Trello", "Asana"],
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/20 rounded-full animate-blob animate-delay-2000 filter blur-3xl opacity-30" />
        <div className="absolute -top-48 -right-32 w-96 h-96 bg-blue-500/30 rounded-full animate-blob animate-delay-3000 filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full animate-blob filter blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-4 p-1">
            DevOps Ecosystem
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            End-to-end DevOps solutions ensuring seamless development, deployment, and operational excellence
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-${category.color}-400/20 hover:border-${category.color}-400/40 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-${category.color}-500/10`}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br from-${category.color}-400/30 to-transparent -z-10`} />
              
              {/* Category Header */}
              <div className="flex items-center mb-6 space-x-4">
                <div className={`p-3 rounded-xl bg-${category.color}-400/10 backdrop-blur-sm`}>
                  <category.icon className={`text-3xl text-${category.color}-400 animate-icon-hover`} />
                </div>
                <h2 className={`text-2xl font-bold bg-gradient-to-r from-${category.color}-300 to-${category.color}-300 bg-clip-text text-transparent`}>
                  {category.title}
                </h2>
              </div>

              {/* Technology Items */}
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center space-x-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-default"
                  >
                    <div className={`h-2 w-2 rounded-full bg-${category.color}-400 animate-pulse`} />
                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevOpsTechnologyStack;