import React from "react";
import Blockchainbg from "../../../images/blockchainbg.svg";

const FullScreenUI = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Responsive Animated Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center">
        <img
          src={Blockchainbg}
          alt="Blockchain Background"
          className="w-full h-full md:w-[40vw] md:h-[85vh] lg:w-[35vw] lg:h-[80vh] object-contain animate-zoom-in-out animate-spin-slow"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            transform: 'scale(1)'
          }}
        />
      </div>

      {/* Optimized Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/80 rounded-full hidden sm:block"
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
      <div className="relative text-center px-4 space-y-6 md:space-y-8 lg:space-y-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 animate-text-shine">
          <span className="inline-block">Empower Your</span>
          <br />
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-wide md:tracking-wider text-white/90 drop-shadow-2xl">
            Blockchain Solutions
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-[17px] font-light max-w-3xl md:max-w-4xl mx-auto leading-relaxed backdrop-blur-sm p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/20">
          Revolutionize your business with secure and transparent blockchain solutions. From decentralized applications to smart contracts and secure digital transactions, we provide cutting-edge blockchain technologies to drive innovation, enhance security, and streamline operations in a trustless environment.
        </p>

        <button className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg font-semibold rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-500 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl sm:hover:shadow-2xl hover:shadow-blue-500/30">
          <span className="relative z-10">Explore Blockchain</span>
          <div className="absolute inset-0 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30"></div>
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Responsive Scrolling Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 animate-bounce">
        <div className="w-6 h-12 sm:w-8 sm:h-14 rounded-2xl sm:rounded-3xl border-2 border-white/50 flex items-start justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      {/* Responsive Animation Styles */}
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
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes zoom-in-out {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        @media (max-width: 640px) {
          .animate-spin-slow {
            animation-duration: 80s;
          }
          
          .animate-zoom-in-out {
            animation: zoom-in-out-mobile 25s ease-in-out infinite;
          }

          @keyframes zoom-in-out-mobile {
            0% { transform: scale(0.95); }
            50% { transform: scale(1); }
            100% { transform: scale(0.95); }
          }
        }

        @media (min-width: 1024px) {
          .animate-spin-slow {
            animation-duration: 45s;
          }
        }
      `}</style>
    </div>
  );
};

export default FullScreenUI;