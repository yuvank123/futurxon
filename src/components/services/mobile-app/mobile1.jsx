import React from "react";
import Screenpng from '../../../../public/images/screen.png';

const MobileAppDev = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 xs:px-6 sm:px-8 md:px-16">
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left py-8 xs:py-10 sm:py-12 md:py-0 space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 md:pr-5 lg:pr-10 ml-0 xs:ml-2 sm:ml-5 md:ml-9">
        <h1 className="text-5xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-white font-mono tracking-tighter bg-clip-text text-transparent">
          Enterprise Mobile Excellence
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent">
            Premium Development Services
          </span>
        </h1>
        
        <p className="text-base xs:text-lg sm:text-xl md:text-xl text-gray-300/80 max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl leading-relaxed">
          Crafting immersive mobile experiences with cutting-edge technology and 
          pixel-perfect design for iOS & Android platforms
        </p>
        
        <button className="group px-5 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-4 md:px-8 md:py-4 text-base xs:text-lg sm:text-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500/80 hover:to-pink-400/80 transition-all duration-300 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg sm:shadow-lg sm:hover:shadow-xl shadow-purple-900/30 hover:shadow-pink-900/30 transform hover:scale-[1.02] active:scale-95">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Start Your Journey →
          </span>
        </button>
      </div>

      {/* Mobile Mockup Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative min-h-[400px] xs:min-h-[450px] sm:min-h-[500px] md:min-h-[700px] -left-5 xs:-left-6 sm:-left-8 md:-left-10">
        {/* Glowing Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-400/10 to-pink-500/10 blur-xl xs:blur-2xl sm:blur-3xl animate-pulse-slow" />
        
        {/* Main Device */}
        <div className="mobile-mockup relative z-10 w-[200px] h-[400px] xs:w-[220px] xs:h-[440px] sm:w-[240px] sm:h-[480px] md:w-[260px] md:h-[520px] transform transition-[transform] duration-500 hover:scale-105 group">
          {/* Device Frame */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-400/20 to-pink-500/20 rounded-[30px] xs:rounded-[35px] shadow-xl sm:shadow-2xl shadow-purple-900/30 backdrop-blur-md sm:backdrop-blur-lg border border-white/10 overflow-hidden">
            {/* Metallic Frame Border */}
            <div className="absolute inset-0 rounded-[30px] xs:rounded-[35px] border-[0.5px] border-white/5" />
            
            {/* Screen Container */}
            <div className="absolute inset-[4px] xs:inset-[6px] sm:inset-[10px] rounded-[24px] xs:rounded-[28px] sm:rounded-[34px] overflow-hidden border border-white/5 bg-black/50">
              {/* Dynamic Notch */}
              <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-20 xs:w-24 h-4 xs:h-5 bg-black/80 rounded-b-xl xs:rounded-b-2xl flex justify-center items-center">
                <div className="w-6 xs:w-8 h-1.5 xs:h-2 bg-black/60 rounded-full" />
                <div className="absolute -top-0.5 w-3 xs:w-4 h-3 xs:h-4 bg-purple-500/20 rounded-full border border-white/10" />
              </div>
              
              {/* Screen Content */}
              <img 
                src={Screenpng} 
                alt="App Interface" 
                className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute bottom-3 xs:bottom-4 left-1/2 -translate-x-1/2 w-12 xs:w-15 h-1.5 xs:h-2 bg-gray-500 rounded-full" />
              {/* Status Bar */}
              <div className="absolute top-1.5 xs:top-2 left-0 right-0 px-3 xs:px-4 flex items-center text-white text-xs xs:text-sm font-medium">
                <span>9:41</span>
                <div className="ml-auto flex gap-1 xs:gap-2 items-center">
                  <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-green-400 rounded-full animate-pulse" />
                  <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-blue-400 rounded-full" />
                  <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-pink-400 rounded-full" />
                </div>
              </div>
              
              {/* Home Indicator */}
              <div className="absolute bottom-3 xs:bottom-4 left-1/2 -translate-x-1/2 w-12 xs:w-16 h-0.5 xs:h-1 bg-white/20 rounded-full backdrop-blur-sm" />
            </div>
            
            {/* Physical Buttons */}
            <div className="absolute right-0 top-20 xs:top-24 h-12 xs:h-16 w-0.5 bg-white/20 rounded-l" />
            <div className="absolute left-0 top-28 xs:top-32 h-20 xs:h-24 w-0.5 bg-white/20 rounded-r" />
          </div>
          
          {/* Screen Glow */}
          <div className="absolute inset-0 rounded-[30px] xs:rounded-[35px] shadow-[inset_0_0_30px_5px_rgba(139,92,246,0.1)] sm:shadow-[inset_0_0_40px_10px_rgba(139,92,246,0.1)] pointer-events-none" />
        </div>

        {/* Floating Secondary Device */}
        <div className="absolute -right-5 xs:-right-8 sm:-right-10 md:-right-20 top-1/4 w-[120px] h-[240px] xs:w-[140px] xs:h-[280px] sm:w-[160px] sm:h-[320px] md:w-[200px] md:h-[400px] transform rotate-12 opacity-60 hover:opacity-90 transition-all animate-float">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[24px] xs:rounded-[30px] border border-blue-400/30 backdrop-blur-sm sm:backdrop-blur-md p-1.5 sm:p-2 overflow-hidden">
            <div className="w-full h-full rounded-[20px] xs:rounded-[26px] bg-black/50 relative">
              <img 
                src={Screenpng} 
                alt="Secondary App" 
                className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-300 rounded-2xl sm:rounded-3xl"
                loading="lazy"
              />
              <div className="absolute bottom-3 xs:bottom-4 left-1/2 -translate-x-1/2 w-10 xs:w-12 h-1 bg-gray-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
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
          transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateZ(30px);
          transform-style: preserve-3d;
        }
        .mobile-mockup:hover {
          transform: perspective(1000px) rotateY(-10deg) rotateX(3deg) translateZ(40px);
        }

        @media (max-width: 640px) {
          .mobile-mockup {
            transform: none;
          }
          .mobile-mockup:hover {
            transform: scale(1.05);
          }
        }

        @media (max-width: 480px) {
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(8deg); }
            50% { transform: translateY(-10px) rotate(6deg); }
          }
        }
      `}</style>
    </div>
  );
};

export default MobileAppDev;