import React from "react";
import Devopsbg from "../../../images/devopsbg.svg";

const FullScreenUI = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center">
        <img
          src={Devopsbg}
          alt="Background"
          className="w-full h-full md:w-[50vw] md:h-[100vh] object-contain animate-zoom-in-out animate-spin-slow opacity-50"
          style={{
            maxHeight:"100%",
            maxWidth:"100%",
            transform:"scale(1)"
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
      <div className="relative text-center px-4 space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-text-shine">
          <span className="inline-block">Transform Your</span>
          <br />
          <span className="text-6xl md:text-8xl font-black uppercase tracking-wider text-white/90 drop-shadow-2xl">
            DevOps Skills
          </span>
        </h1>

        <p className="text-xl md:text-[17px] font-light max-w-4xl mx-auto leading-relaxed backdrop-blur-sm p-4 rounded-3xl border border-white/20">
          We make it easier for your high-performing teams to build, manage, and deliver your bigger projects faster. With our DevOps automation services, you can focus on your business goals, reduce manual tasks, improve productivity, ensure security, and automate processes in a collaborative environment.
        </p>

        <button className="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 text-lg font-semibold rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 hover:from-purple-600 hover:via-blue-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
          <span className="relative z-10">Start Your Journey</span>
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