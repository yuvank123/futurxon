import React, { useEffect, useState } from "react";
import UIUXbg from "../../../images/uiuxbg.svg"; // Make sure this image exists in your project

const FullScreenUI = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust the divisor to control the rotation speed
      const newRotation = window.scrollY / 3;
      setRotate(newRotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Animated Background with Rotation */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center">
        <div
          style={{
            transform: `rotate(${rotate}deg)`,
            transition: "transform 0.1s ease-out"
          }}
        >
          <img
            src={UIUXbg}
            alt="UI/UX Background"
            className="w-full h-full md:w-[50vw] md:h-[80vh] object-contain animate-slow-bounce opacity-50"
            style={{
              maxHeight:"100%",
              maxWidth:"100%",
              transform:"scale(1)"
            }}
          />
        </div>
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
          <span className="inline-block">Elevate Your</span>
          <br />
          <span className="text-6xl md:text-8xl font-black uppercase tracking-wider text-white/90 drop-shadow-2xl">
            UI-UX Technique
          </span>
        </h1>

        <p className="text-xl md:text-[17px] font-light max-w-4xl mx-auto leading-relaxed backdrop-blur-sm p-4 rounded-3xl border border-white/20">
          Elevate your digital presence with our comprehensive UI/UX solutions. From in-depth user research to intuitive interface design, we empower businesses to create engaging and delightful digital experiences. Enhance user satisfaction, ensure seamless interactions, and unlock innovation through our tailored design strategies and creative services.
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
        @keyframes slow-bounce {
          0%, 100% { 
            transform: translateY(0); 
          }
          50% { 
            transform: translateY(-20px); 
          }
        }

        .animate-slow-bounce {
          animation: slow-bounce 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes zoom-in-out {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        @keyframes scroll {
          0% { transform: translateY(0); }
          50% { transform: translateY(5px); }
          100% { transform: translateY(0); }
        }

        .animate-zoom-in-out {
          animation: zoom-in-out 20s ease-in-out infinite;
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
