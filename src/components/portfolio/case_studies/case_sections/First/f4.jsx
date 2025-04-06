import React from 'react';
import { FiServer, FiCpu, FiCloud, FiTool } from 'react-icons/fi';

const PayrollManagementCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-6xl md:text-7xl font-bold bg-gradient-to-r p-2 from-blue-400 via-purple-300 to-red-400 bg-clip-text text-transparent">
            Payroll Management System – Case Study by Infinoid
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-200 bg-clip-text text-transparent mb-8">
            Overview
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            Infinoid Technology developed a comprehensive Payroll Management System that automates payroll processing, ensures compliance with local regulations, and provides real-time financial insights. Designed for businesses of all sizes, this solution streamlines payroll operations while reducing errors and administrative overhead.
          </p>
          <p className="text-xl italic text-purple-300">
            "Automate your payroll and empower your HR — Infinoid transforms payroll processing into a seamless experience."
          </p>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-purple-300 bg-clip-text text-transparent mb-8">
            ❌ Challenges Faced
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Manual Data Processing",
                content: "Relying on spreadsheets led to frequent errors and time-consuming payroll calculations.",
                icon: <FiTool className="text-2xl text-red-400" />
              },
              {
                title: "Regulatory Compliance",
                content: "Keeping up with evolving tax laws and labor regulations was a constant challenge.",
                icon: <FiCloud className="text-2xl text-purple-400" />
              },
              {
                title: "Data Security Risks",
                content: "Sensitive payroll data required robust security measures to prevent breaches and fraud.",
                icon: <FiCpu className="text-2xl text-red-400" />
              },
              {
                title: "Integration Issues",
                content: "Integrating payroll with existing HR and accounting systems was complex and error-prone.",
                icon: <FiServer className="text-2xl text-purple-400" />
              }
            ].map((item, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implemented Solutions Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent mb-8">
            ✅ Implemented Solutions
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                "Automated payroll calculations with rule-based engines",
                "Real-time compliance monitoring and tax updates",
                "Robust data encryption and access control measures"
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <p className="text-gray-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                "Seamless integration with HR and accounting systems",
                "Intuitive dashboard for real-time financial insights",
                "Cloud-based deployment ensuring scalability and uptime"
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="text-gray-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r p-2 from-purple-300 to-purple-200 bg-clip-text text-transparent mb-8">
            💻 Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                items: [
                  "React.js + Next.js (App Router), Tailwind CSS",
                  "Redux for state management",
                  "SASS/Styled Components for modular styling"
                ],
                color: "purple"
              },
              {
                items: [
                  "Node.js, Express.js for backend services",
                  "PostgreSQL for secure data storage",
                  "GraphQL for efficient API interactions"
                ],
                color: "purple"
              },
              {
                items: [
                  "Docker for containerization",
                  "AWS/Azure for cloud hosting",
                  "Jest and Cypress for testing"
                ],
                color: "purple"
              }
            ].map((section, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                <ul className="space-y-3 text-gray-300">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className={`w-2 h-2 bg-${section.color}-400 rounded-full`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Infinoid Section */}
      <section className="py-16 px-6 lg:px-24 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-200 bg-clip-text text-transparent mb-12">
            🌟 Why Infinoid?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Seamless Integration",
                content: "Our solution integrates effortlessly with your existing systems, ensuring a smooth transition."
              },
              {
                title: "Enhanced Security",
                content: "State-of-the-art encryption and compliance monitoring safeguard sensitive payroll data."
              },
              {
                title: "Scalability",
                content: "Built to grow with your business, our system handles increased load without compromising performance."
              },
              {
                title: "User-Friendly Interface",
                content: "An intuitive dashboard delivers real-time insights and simplifies complex payroll processes."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-500 to-blue-500 p-px rounded-2xl">
                <div className="bg-gray-900 rounded-2xl p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayrollManagementCaseStudy;
