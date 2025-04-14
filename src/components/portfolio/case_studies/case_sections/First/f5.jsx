import React from 'react';
import { FiServer, FiCpu, FiCloud, FiTool, FiShoppingCart } from 'react-icons/fi';
import OverviewImg5 from '../../../../../../public/images/5.png'

const InventoryManagementCaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-15 px-6 lg:px-24 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <h1 className="mt-12 text-6xl md:text-7xl font-bold bg-gradient-to-r p-2 from-blue-400 via-purple-300 to-red-400 bg-clip-text text-transparent">
            Inventory Management System
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
            Infinoid Technology developed a comprehensive Inventory Management System that provides real-time tracking of stock levels, automates restocking processes, and optimizes supply chain operations. Designed for scalability, this solution streamlines operations, reduces manual errors, and enhances business efficiency.
          </p>
          <p className="text-xl italic text-purple-300">
            "Transform your inventory into a strategic asset — Infinoid redefines supply chain management."
          </p>
        </div>
        {/* Overview Image */}
        <div className="flex justify-center mt-20">
          <img
            src={OverviewImg5}
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
                title: "Fragmented Inventory Data",
                content: "Data was siloed across multiple channels, making it difficult to get a unified view of stock levels.",
                icon: <FiServer className="text-2xl text-red-400" />
              },
              {
                title: "Manual Tracking Inefficiencies",
                content: "Reliance on spreadsheets led to errors and delayed responses in restocking.",
                icon: <FiTool className="text-2xl text-purple-400" />
              },
              {
                title: "Stockouts & Overstock Issues",
                content: "Inaccurate forecasting resulted in either shortages or excess inventory, impacting cash flow.",
                icon: <FiShoppingCart className="text-2xl text-blue-400" />
              },
              {
                title: "Complex Multi-Channel Integration",
                content: "Integrating sales data from various channels posed significant technical challenges.",
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
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent mb-8">
            ✅ Implemented Solutions
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                "Real-time inventory tracking with integrated IoT sensors",
                "Automated restocking alerts and order processing",
                "Unified dashboard consolidating multi-channel data"
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
                "Advanced analytics for accurate demand forecasting",
                "Seamless integration with ERP and eCommerce platforms",
                "Cloud-based deployment for scalability and high availability"
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
          <h2 className="text-3xl font-bold bg-gradient-to-r p-2 from-blue-300 to-purple-200 bg-clip-text text-transparent mb-8">
            💻 Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                items: [
                  "React.js + Next.js (App Router), Tailwind CSS",
                  "Redux for state management",
                  "Styled Components for modular styling"
                ],
                color: "blue"
              },
              {
                items: [
                  "Node.js, Express.js for backend services",
                  "MongoDB/PostgreSQL for database management",
                  "GraphQL for efficient data querying"
                ],
                color: "purple"
              },
              {
                items: [
                  "Docker for containerization",
                  "AWS/Azure for cloud hosting",
                  "Jest and Cypress for testing and QA"
                ],
                color: "blue"
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
                title: "Unified Visibility",
                content: "Get a holistic view of your inventory across all channels in real time."
              },
              {
                title: "Operational Efficiency",
                content: "Automate routine tasks and reduce manual errors, saving time and resources."
              },
              {
                title: "Scalable & Flexible",
                content: "Our cloud-based solution grows with your business, handling increased load effortlessly."
              },
              {
                title: "Actionable Insights",
                content: "Advanced analytics and forecasting empower smarter, data-driven decisions."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-500 to-purple-500 p-px rounded-2xl">
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

export default InventoryManagementCaseStudy;
