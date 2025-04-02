import React from "react";
import Screenpng from '../../../../public/images/screen.png';

const EnterpriseWebUI = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-0">
      {/* Left Section */}
      <div className="mt-10 w-full md:w-1/2 pr-0 md:pr-8 lg:pr-12 mb-12 md:mb-0 text-center md:text-left">
        <h1 className="text-5xl xs:text-6xl sm:text-6xl tracking-tight font-bold mb-4 xs:mb-5 sm:mb-6 bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent">
          Leading Enterprise Web Solutions
          <br /> 
          <span className="text-2xl xs:text-3xl sm:text-6xl bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent">
          Expert IT Services
          </span>
        </h1>
        <p className="text-base xs:text-lg sm:text-xl text-gray-300/80 mb-6 xs:mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
          Custom web technology development services to build secure and scalable web applications.
        </p>
        <button className="bg-gradient-to-r from-purple-600 via-purple-500 to-gray-400  hover:from-purple-400 hover:to-purple-400 text-white font-semibold py-4 xs:py-3 px-8 xs:px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg sm:shadow-lg sm:hover:shadow-xl shadow-purple-900/50 hover:shadow-blue-900/40 text-sm xs:text-base">
          Consult Us →
        </button>
      </div>
      
      {/* Right Section - Layered Images */}
      <div className="w-full md:w-1/2 flex justify-center items-center" style={{ perspective: "1200px" }}>
        <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[560px] h-[200px] xs:h-[240px] sm:h-[300px] md:h-[400px] transform-gpu translate-z-12 md:-rotate-y-20 md:-left-3">
          {/* Back Layer */}
          <div className="absolute w-full h-full transform md:-rotate-[10deg] md:translate-x-12 md:translate-y-8 opacity-40 z-0 transition-all duration-500 hover:opacity-60 group">
            <div className="w-full h-full rounded-lg md:rounded-xl border-2 border-blue-800/30 shadow-lg md:shadow-2xl shadow-blue-900/30 overflow-hidden">
              <img 
                src={Screenpng} 
                alt="Background UI" 
                className="w-full h-full object-cover brightness-75 contrast-125 saturate-110"
              />
            </div>
          </div>

          {/* Middle Layer */}
          <div className="absolute w-full h-full transform md:-rotate-[5deg] md:translate-x-6 md:translate-y-4 opacity-70 z-10 transition-all duration-500 hover:opacity-90 group">
            <div className="w-full h-full rounded-lg md:rounded-xl border-2 border-red-800/30 shadow-lg md:shadow-2xl shadow-red-900/30 overflow-hidden">
              <img 
                src={Screenpng} 
                alt="Middle UI" 
                className="w-full h-full object-cover brightness-90 contrast-110 saturate-110"
              />
            </div>
          </div>

          {/* Front Layer */}
          <div className="absolute w-full h-full transform z-20 transition-transform duration-500 md:hover:-translate-y-2 group">
            <div className="w-full h-full rounded-lg md:rounded-xl border-2 border-purple-800/30 shadow-lg md:shadow-2xl shadow-purple-900/50 overflow-hidden backdrop-blur-[1px]">
              <img 
                src={Screenpng} 
                alt="Main UI" 
                className="w-full h-full object-cover brightness-100 contrast-105 saturate-100 md:hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg md:rounded-xl shadow-[inset_0_0_15px_rgba(139,92,246,0.2)] md:shadow-[inset_0_0_30px_rgba(139,92,246,0.2)] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseWebUI;