import React from "react";
import { FiArrowRight, FiCode, FiLayout, FiCloud, FiCheckCircle } from 'react-icons/fi';

const WebProcess = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center px-4 py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-600/20 rounded-full blur-3xl animate-pulse-delayed" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-16 max-w-4xl px-4">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-white font-mono tracking-tighter bg-clip-text text-transparent">
          Building Custom Web Applications
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-white font-mono tracking-tighter bg-clip-text text-transparent">
            The Agile Way
          </span>
        </h1>
        <p className="text-xl text-gray-300/90">
          We harness the power of{' '}
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent font-medium">
            agile application development
          </span>{' '}
          for all our web projects.
        </p>
      </div>

      {/* Process Timeline */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {/* Process Step 1 */}
        <div className="group relative flex-1 p-8 bg-gradient-to-br from-purple-900/40 to-blue-900/30 backdrop-blur-lg rounded-2xl border border-purple-800/30 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl shadow-purple-900/20">
          <div className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center">
            <FiCode className="text-3xl text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-purple-200 mb-4">Discovery & Planning</h3>
          <p className="text-gray-300/80 leading-relaxed">
            Collaborative requirements gathering and agile roadmap development
          </p>
          <div className="absolute right-6 bottom-6 text-purple-400 group-hover:text-blue-400 transition-colors">
            <FiArrowRight className="text-2xl" />
          </div>
        </div>

        {/* Process Step 2 */}
        <div className="group relative flex-1 p-8 bg-gradient-to-br from-blue-900/40 to-purple-900/30 backdrop-blur-lg rounded-2xl border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl shadow-blue-900/20">
          <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-600 to-purple-500 rounded-2xl flex items-center justify-center">
            <FiLayout className="text-3xl text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-blue-200 mb-4">UI/UX Design</h3>
          <p className="text-gray-300/80 leading-relaxed">
            User-centric interface design with iterative prototyping
          </p>
          <div className="absolute right-6 bottom-6 text-blue-400 group-hover:text-purple-400 transition-colors">
            <FiArrowRight className="text-2xl" />
          </div>
        </div>

        {/* Process Step 3 */}
        <div className="group relative flex-1 p-8 bg-gradient-to-br from-purple-900/40 to-red-900/30 backdrop-blur-lg rounded-2xl border border-purple-800/30 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl shadow-purple-900/20">
          <div className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-600 to-red-500 rounded-2xl flex items-center justify-center">
            <FiCloud className="text-3xl text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-purple-200 mb-4">Development</h3>
          <p className="text-gray-300/80 leading-relaxed">
            Agile sprints with continuous integration and deployment
          </p>
          <div className="absolute right-6 bottom-6 text-purple-400 group-hover:text-red-400 transition-colors">
            <FiArrowRight className="text-2xl" />
          </div>
        </div>

        {/* Process Step 4 */}
        <div className="group relative flex-1 p-8 bg-gradient-to-br from-red-900/40 to-blue-900/30 backdrop-blur-lg rounded-2xl border border-red-800/30 hover:border-red-500/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl shadow-red-900/20">
          <div className="w-16 h-16 mb-6 bg-gradient-to-br from-red-600 to-blue-500 rounded-2xl flex items-center justify-center">
            <FiCheckCircle className="text-3xl text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-red-200 mb-4">Delivery & Support</h3>
          <p className="text-gray-300/80 leading-relaxed">
            Continuous monitoring and iterative improvements
          </p>
        </div>
      </div>

      {/* Connecting Lines */}
      <div className="hidden md:block absolute z-0 w-full max-w-5xl h-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-red-500/20 top-1/2 transform -translate-y-1/2" />

      {/* Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}/>
        ))}
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0% { opacity: 0.1; }
          50% { opacity: 0.3; }
          100% { opacity: 0.1; }
        }
        @keyframes float {
          0% { transform: translateY(0) scale(1); opacity: 0.8; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.8; }
        }
        .animate-pulse {
          animation: pulse 6s ease-in-out infinite;
        }
        .animate-pulse-delayed {
          animation: pulse 7s ease-in-out infinite 1s;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WebProcess;