import React from 'react';
import { FiServer, FiCpu, FiWifi, FiCloud, FiTool } from 'react-icons/fi';

const CaseStudy = () => {
  return (
    <div className="min-h-screen text-gray-100 mt-25">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-300 to-red-400 bg-clip-text text-transparent mb-8">
            IoT-Enabled Bio-Science Monitoring System
          </h1>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-white/10">
              <FiServer className="text-4xl text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Data</h3>
              <p className="text-gray-400">50+ parameters monitored</p>
            </div>
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-white/10">
              <FiCpu className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Device Integration</h3>
              <p className="text-gray-400">15+ legacy systems connected</p>
            </div>
            <div className="backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-white/10">
              <FiWifi className="text-4xl text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wireless Protocols</h3>
              <p className="text-gray-400">3 communication standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent mb-8">
            Overview
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
          Developed an integrated IoT solution for bio-science research.
Enabled real-time data collection and analysis with connected devices.
Monitored research equipment for enhanced efficiency and accuracy.
Reduced operational errors by 42%, improving reliability.
Enhanced research productivity by 35% through automation.
Provided seamless data access for informed decision-making.
Optimized workflow by integrating smart monitoring solutions.
Revolutionized bio-science research with modern IoT technology.
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-purple-300 bg-clip-text text-transparent mb-8">
            Challenges Faced
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Interoperability",
                content: "Integration challenges between modern IoT devices and legacy scientific instruments",
                icon: <FiServer className="text-2xl text-red-400" />
              },
              {
                title: "Firmware Optimization",
                content: "Outdated firmware incompatible with modern sensor requirements",
                icon: <FiTool className="text-2xl text-purple-400" />
              },
              {
                title: "Real-Time Monitoring",
                content: "Lack of remote monitoring capabilities for critical parameters",
                icon: <FiCloud className="text-2xl text-blue-400" />
              },
              {
                title: "Cost Efficiency",
                content: "Budget constraints requiring cost-effective scalable solutions",
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

      {/* Our Solution */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-200 bg-clip-text text-transparent mb-8">
            Implemented Solutions
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  title: "Legacy System Integration",
                  content: "Custom integration layer for seamless data transfer between old and new systems"
                },
                {
                  title: "Firmware Modernization",
                  content: "FreeRTOS implementation for real-time synchronization"
                },
                {
                  title: "Monitoring Algorithms",
                  content: "Advanced protocols for immediate parameter feedback"
                }
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "Rapid Prototyping",
                  content: "Arduino/Raspberry Pi testing platforms for fast iteration"
                },
                {
                  title: "Cost Optimization",
                  content: "Component selection balancing reliability and affordability"
                },
                {
                  title: "Cloud Integration",
                  content: "AWS IoT implementation for remote monitoring"
                }
              ].map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-red-200 bg-clip-text text-transparent mb-8">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Firmware Development",
                items: ["C/Python/Assembly", "FreeRTOS", "STM32CubeMX", "IAR Embedded Workbench"],
                color: "purple"
              },
              {
                category: "Hardware Design",
                items: ["Altium Designer", "ESP32/nRF52840", "Bluetooth/Wi-Fi/Zigbee", "Advanced Sensors"],
                color: "blue"
              },
              {
                category: "Cloud & Networking",
                items: ["AWS IoT Core", "MQTT/HTTP", "Raspberry Pi", "LTSpice/TINA-TI"],
                color: "red"
              }
            ].map((section, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className={`text-xl font-semibold mb-4 text-${section.color}-300`}>
                  {section.category}
                </h3>
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

      {/* Why Choose Techrover */}
      <section className="py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-red-200 bg-clip-text text-transparent mb-12">
            Why Techrover™?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "IoT Expertise",
                content: "150+ successful deployments",
                color: "from-purple-500 to-blue-500"
              },
              {
                title: "Rapid Development",
                content: "40% faster time-to-market",
                color: "from-blue-500 to-red-500"
              },
              {
                title: "Cost Efficiency",
                content: "30% reduced development costs",
                color: "from-red-500 to-purple-500"
              },
              {
                title: "Cross-Disciplinary",
                content: "Full-stack hardware/software solutions",
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

export default CaseStudy;