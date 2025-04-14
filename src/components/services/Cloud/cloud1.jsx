import React from "react";
import Cloudbg from "../../../../public/images/cloud.svg"; // Make sure this image exists in your project

const FullScreenUI = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Responsive Animated Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center">
        <img
          src={Cloudbg}
          alt="Cloud Background"
          className="w-full h-full sm:w-[80vw] sm:h-[60vh] md:w-[40vw] md:h-[80vh] lg:w-[35vw] lg:h-[75vh] object-contain animate-zoom-in-out animate-spin-slow opacity-50"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            transform: "scale(1)"
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: "float 4s ease-in-out infinite",
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Responsive Content */}
      <div className="relative text-center px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8 lg:space-y-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-text-shine">
          <span className="inline-block">Elevate Your</span>
          <br />
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider text-white/90 drop-shadow-2xl">
            Cloud Solutions
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-[17px] font-light max-w-3xl md:max-w-4xl mx-auto leading-relaxed backdrop-blur-sm p-4 sm:p-6 rounded-2xl lg:rounded-3xl border border-white/20">
          Accelerate your digital transformation with our comprehensive cloud services. From seamless migration to optimized infrastructure management, we empower businesses to leverage scalable cloud solutions. Enhance operational efficiency, ensure robust security, and unlock innovation through our tailored cloud strategy and management services.
        </p>

        <a href="/contact" className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg font-semibold rounded-2xl lg:rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 hover:from-purple-600 hover:via-blue-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
          <span className="relative z-10">Start Your Journey</span>
          <div className="absolute inset-0 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30"></div>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
        </a>
      </div>

      {/* Animation Styles */}
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
