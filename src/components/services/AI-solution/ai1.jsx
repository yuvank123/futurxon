import React from "react";
import AIsolutionbg from "../../../../public/images/aisolutionbg.svg";

const FullScreenUI = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center">
        <img
          src={AIsolutionbg}
          alt="AI Background"
          className="w-full h-full sm:w-[80vw] sm:h-[60vh] md:w-[50vw] md:h-[80vh] object-contain animate-zoom-in-out animate-spin-slow opacity-50"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            transform: 'scale(1)',
          }}
        />
      </div>
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: "float 4s ease-in-out infinite",
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative text-center px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
        <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-text-shine 
          text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
          <span className="inline-block">Transform With</span>
          <br />
          <span className="font-black uppercase tracking-wider text-white/90 drop-shadow-2xl 
            text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
            AI Solutions
          </span>
        </h1>

        <p className="font-light max-w-4xl mx-auto leading-relaxed backdrop-blur-sm p-3 sm:p-4 rounded-3xl border border-white/20 
          text-base sm:text-lg md:text-xl">
          Revolutionize your business with cutting-edge artificial intelligence. From machine learning implementation to predictive analytics, we deliver intelligent solutions that drive innovation. Harness the power of neural networks, automate processes, and unlock data-driven decisions through our bespoke AI strategies and comprehensive development services.
        </p>

        <button className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg font-semibold rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 hover:from-purple-600 hover:via-blue-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
          <span className="relative z-10">Start AI Transformation</span>
          <div className="absolute inset-0 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30"></div>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <div className="w-8 h-14 rounded-3xl border-2 border-white/50 flex items-start justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      {/* Animation Styles (remain same) */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes zoom-in-out {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes scroll {
          0% { transform: translateY(0); }
          50% { transform: translateY(5px); }
          100% { transform: translateY(0); }
        }

        .animate-zoom-in-out {
          animation: zoom-in-out 20s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 50s linear infinite;
        }

        .animate-text-shine {
          background-size: 200% auto;
          animation: text-shine 3s linear infinite;
        }

        @keyframes text-shine {
          to {
            background-position: 200% center;
          }
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FullScreenUI;
