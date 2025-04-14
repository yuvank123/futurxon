import React from 'react';
import { FiServer, FiCpu, FiWifi, FiCloud, FiTool } from 'react-icons/fi';
import OverviewImg2 from '../../../../../../public/images/1.png'

const BusinessDashboardCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-6xl md:text-7xl font-bold bg-gradient-to-r p-2 from-purple-400 via-blue-300 to-red-400 bg-clip-text text-transparent">
            Business Analytical Dashboard
          </h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent mb-8">
            Overview
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            In an era where data is the new oil, businesses need real-time, actionable insights to stay ahead. infinoid partnered with a leading retail enterprise to design a fully dynamic business analytical dashboard that transforms raw data into revenue-driving decisions.
          </p>
          <p className="text-xl italic text-purple-300">
            "From scattered data to streamlined intelligence — infinoid turns insights into impact."
          </p>
        </div>
        {/* Overview Image */}
        <div className="flex justify-center mt-20">
          <img
            src={OverviewImg2}
            alt="AR/VR Overview"
            className="rounded-2xl w-full max-w-4xl"
          />
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
                title: "Fragmented Data Sources",
                content: "Sales, marketing, inventory, and customer data existed in silos, making cross-departmental analysis difficult.",
                icon: <FiServer className="text-2xl text-red-400" />
              },
              {
                title: "Lack of Real-Time Decision-Making",
                content: "Manual reporting caused delays, reducing agility in responding to market changes.",
                icon: <FiTool className="text-2xl text-purple-400" />
              },
              {
                title: "Limited Data Accessibility",
                content: "Only technical teams could extract insights, while business teams struggled with static reports.",
                icon: <FiCloud className="text-2xl text-blue-400" />
              },
              {
                title: "Poor Visualization & Usability",
                content: "Legacy tools lacked interactivity and mobile compatibility, leading to low adoption.",
                icon: <FiCpu className="text-2xl text-red-400" />
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
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-200 bg-clip-text text-transparent mb-8">
            ✅ Implemented Solutions
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                "Centralized Data Integration using Apache Kafka & Spark",
                "AI-Powered Forecasting Engine for demand and churn analysis",
                "Custom Role-Based Dashboards for tailored KPI views"
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
                "SEO-Optimized Frontend built with Next.js (App Router)",
                "Mobile-Responsive UX with Dark Mode using Tailwind CSS",
                "Secure & Scalable Backend deployed via Docker and Kubernetes"
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

      {/* Tech Stack Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r p-2 from-purple-300 to-red-200 bg-clip-text text-transparent mb-8">
            💻 Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                items: [
                  "React.js + Next.js (App Router), Tailwind CSS",
                  "Apache ECharts, Recharts",
                  "Node.js, Express.js (optionally NestJS)",
                  "PostgreSQL (primary), MongoDB (logging/metadata)"
                ],
                color: "purple"
              },
              {
                items: [
                  "Apache Kafka, Apache Spark",
                  "JWT, OAuth2",
                  "Vercel, Docker, Kubernetes",
                  "Prometheus + Grafana"
                ],
                color: "blue"
              },
              {
                items: [
                  "Next SEO, Google Analytics 4",
                  "IAR Embedded Workbench",
                  "ESP32/nRF52840",
                  "Bluetooth/Wi-Fi/Zigbee"
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

      {/* Why Choose infinoid Section */}
      <section className="py-16 px-6 lg:px-24 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-red-200 bg-clip-text text-transparent mb-12">
            🌟 Why Infinoid?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "End-to-End Expertise",
                content: "From data engineering to UI/UX design and deployment — we own the full stack.",
                color: "from-purple-500 to-blue-500"
              },
              {
                title: "Future-Proof Architecture",
                content: "Our systems are scalable, AI-ready, and microservice-based for long-term growth.",
                color: "from-blue-500 to-red-500"
              },
              {
                title: "Data with Design",
                content: "We marry intuitive interfaces with powerful data to ensure adoption by all stakeholders.",
                color: "from-red-500 to-purple-500"
              },
              {
                title: "Speed + Security",
                content: "We don’t compromise — expect fast, responsive dashboards with enterprise-grade security.",
                color: "from-purple-500 to-red-500"
              }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${item.color} p-px rounded-2xl`}>
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

export default BusinessDashboardCaseStudy;
