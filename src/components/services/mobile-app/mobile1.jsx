import React from "react";
import Screenpng from '../../../images/screen.png';

const MobileAppDev = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-16">
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left py-12 md:py-0 space-y-6 md:space-y-8 md:pr-5 lg:pr-10 ml-9 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-300 via-blue-200 to-pink-300 bg-clip-text text-transparent">
          Enterprise Mobile Excellence
          <br />
          <span className="bg-gradient-to-r from-pink-200 via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Premium Development Services
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300/80 max-w-2xl leading-relaxed">
          Crafting immersive mobile experiences with cutting-edge technology and 
          pixel-perfect design for iOS & Android platforms
        </p>
        
        <button className="group px-6 py-3 md:px-8 md:py-4 text-lg font-semibold bg-gradient-to-r from-purple-600/90 to-pink-500/90 hover:from-purple-500/80 hover:to-pink-400/80 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl shadow-purple-900/30 hover:shadow-pink-900/30 transform hover:scale-[1.02] active:scale-95">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Start Your Journey →
          </span>
        </button>
      </div>

      {/* Mobile Mockup Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative min-h-[500px] md:min-h-[700px] -left-10">
        {/* Glowing Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-400/10 to-pink-500/10 blur-3xl animate-pulse-slow" />
        
        {/* Main Device */}
        <div className="mobile-mockup relative z-10 w-[240px] h-[480px] md:w-[260px] md:h-[520px] transform transition-[transform] duration-500 hover:scale-105 group">
          {/* Device Frame */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-400/20 to-pink-500/20 rounded-[35px] shadow-2xl shadow-purple-900/30 backdrop-blur-lg border border-white/10 overflow-hidden">
            {/* Metallic Frame Border */}
            <div className="absolute inset-0 rounded-[35px] border-[0.5px] border-white/5" />
            
            {/* Screen Container */}
            <div className="absolute inset-[6px] md:inset-[10px] rounded-[28px] md:rounded-[34px] overflow-hidden border border-white/5 bg-black/50">
              {/* Dynamic Notch */}
              <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-24 h-5 bg-black/80 rounded-b-2xl flex justify-center items-center">
                <div className="w-8 h-2 bg-black/60 rounded-full" />
                <div className="absolute -top-0.5 w-4 h-4 bg-purple-500/20 rounded-full border border-white/10" />
              </div>
              
              {/* Screen Content */}
              <img 
                src={Screenpng} 
                alt="App Interface" 
                className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-15 h-2 bg-gray-500 rounded-full" />
              {/* Status Bar */}
              <div className="absolute top-2 left-0 right-0 px-4 flex items-center text-white text-sm font-medium">
                <span>9:41</span>
                <div className="ml-auto flex gap-2 items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <div className="w-2 h-2 bg-pink-400 rounded-full" />
                </div>
              </div>
              
              {/* Home Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full backdrop-blur-sm" />
            </div>
            
            {/* Physical Buttons */}
            <div className="absolute right-0 top-24 h-16 w-0.5 bg-white/20 rounded-l" />
            <div className="absolute left-0 top-32 h-24 w-0.5 bg-white/20 rounded-r" />
          </div>
          
          {/* Screen Glow */}
          <div className="absolute inset-0 rounded-[35px] shadow-[inset_0_0_40px_10px_rgba(139,92,246,0.1)] pointer-events-none" />
        </div>

        {/* Floating Secondary Device */}
        <div className="absolute -right-10 md:-right-20 top-1/4 w-[160px] h-[320px] md:w-[200px] md:h-[400px] transform rotate-12 opacity-60 hover:opacity-90 transition-all animate-float">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[30px] border border-blue-400/30 backdrop-blur-md p-2 overflow-hidden">
            <div className="w-full h-full rounded-[26px] bg-black/50 relative">
              <img 
                src={Screenpng} 
                alt="Secondary App" 
                className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-300 rounded-3xl"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .mobile-mockup {
          transform: perspective(1200px) rotateY(-20deg) rotateX(5deg) translateZ(50px);
          transform-style: preserve-3d;
        }
        .mobile-mockup:hover {
          transform: perspective(1200px) rotateY(-15deg) rotateX(3deg) translateZ(60px);
        }
      `}</style>
    </div>
  );
};

export default MobileAppDev;
