import React from "react";
import { FiCode, FiCloud, FiBox, FiTool, FiDatabase } from 'react-icons/fi';

const WebTechnologyStack = () => {
  const categories = [
    {
      title: "Front-end",
      icon: FiCode,
      items: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Vue.js", "Bootstrap", "Sass", "Webpack"],
      color: "purple"
    },
    {
      title: "Back-end",
      icon: FiBox,
      items: ["Node.js", "Python", "Java", "Ruby", "PHP", "Go", "REST APIs", "GraphQL", "Microservices"],
      color: "purple"
    },
    {
      title: "Cloud & DevOps",
      icon: FiCloud,
      items: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Serverless", "Azure", "GCP", "Jenkins"],
      color: "purple"
    },
    {
      title: "Databases",
      icon: FiDatabase,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Cassandra", "Elasticsearch", "Firebase", "DynamoDB"],
      color: "purple"
    },
    {
      title: "Tools",
      icon: FiTool,
      items: ["Git", "VS Code", "IntelliJ", "Postman", "Jira", "Figma", "Swagger", "NPM", "Yarn"],
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-white font-mono tracking-tighter bg-clip-text text-transparent mb-4 p-1">
            Technology Ecosystem
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our comprehensive tech stack enables us to build scalable, secure, and high-performance applications
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
                <h2 className={`text-2xl font-bold font-mono bg-gradient-to-r from-${category.color}-300 to-${category.color}-300 bg-clip-text text-transparent`}>
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

export default WebTechnologyStack;