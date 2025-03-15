import React from "react";
import Screenpng from '../../../images/screen.png';

const EnterpriseWebUI = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center px-16">
      {/* Left Section */}
      <div className="w-1/2 pr-12">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-300 to-red-400 bg-clip-text text-transparent">
        Leading Enterprise Web Solutions –
          <br /> 
          <span className="bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent">
          Custom Development & Expert Services
          </span>
        </h1>
        <p className="text-lg text-gray-300/80 mb-8 leading-relaxed">
          Custom web technology development services to build secure and scalable web applications.
        </p>
        <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl shadow-purple-900/50 hover:shadow-blue-900/40">
          Consult Us →
        </button>
      </div>
      
      {/* Right Section - Layered Images */}
      <div className="w-1/2 flex justify-center items-center" style={{ perspective: "1200px" }}>
        <div className="relative w-[560px] h-[400px] transform-gpu translate-z-12 -rotate-y-20 -left-3">
          {/* Back Layer */}
          <div className="absolute w-full h-full transform -rotate-[10deg] translate-x-12 translate-y-8 opacity-40 z-0 transition-all duration-500 hover:opacity-60 group">
            <div className="w-full h-full rounded-xl border-2 border-blue-800/30 shadow-2xl shadow-blue-900/30 overflow-hidden">
              <img 
                src={Screenpng} 
                alt="Background UI" 
                className="w-full h-full object-cover brightness-75 contrast-125 saturate-110"
              />
            </div>
          </div>

          {/* Middle Layer */}
          <div className="absolute w-full h-full transform -rotate-[5deg] translate-x-6 translate-y-4 opacity-70 z-10 transition-all duration-500 hover:opacity-90 group">
            <div className="w-full h-full rounded-xl border-2 border-red-800/30 shadow-2xl shadow-red-900/30 overflow-hidden">
              <img 
                src={Screenpng} 
                alt="Middle UI" 
                className="w-full h-full object-cover brightness-90 contrast-110 saturate-110"
              />
            </div>
          </div>

          {/* Front Layer */}
          <div className="absolute w-full h-full transform z-20 transition-transform duration-500 hover:-translate-y-2 group">
            <div className="w-full h-full rounded-xl border-2 border-purple-800/30 shadow-2xl shadow-purple-900/50 overflow-hidden backdrop-blur-[1px]">
              <img 
                src={Screenpng} 
                alt="Main UI" 
                className="w-full h-full object-cover brightness-100 contrast-105 saturate-100 hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_30px_rgba(139,92,246,0.2)] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default EnterpriseWebUI;