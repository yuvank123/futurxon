import React, { useEffect, useState } from "react";
import CyberBg from "../../../../public/images/uiuxbg.svg";

const FullScreenCyberServices = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newRotation = window.scrollY / 3;
      setRotate(newRotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Animated Glitch Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center">
        <div
          style={{
            transform: `rotate(${rotate}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src={CyberBg}
            alt="Cyber Security Background"
            className="w-full h-full sm:w-[90vw] sm:h-[70vh] md:w-[40vw] md:h-[80vh] lg:w-[35vw] lg:h-[80vh] object-cover animate-glitch opacity-50"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              filter: "hue-rotate(90deg) contrast(1.2)",
            }}
          />
        </div>
      </div>

      {/* Neon Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDI1NSAxOTAgMjU1KSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]" />

      {/* Floating Holographic Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(${
                Math.random() > 0.5 ? "#ec4899" : "#6366f1"
              }, transparent)`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: `blur(${Math.random() * 2}px)`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative text-center px-4 sm:px-6 md:px-8 space-y-6 sm:space-y-8 lg:space-y-10 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 animate-text-shine">
          <span className="inline-block uppercase tracking-[0.2em]">
            Secure The
          </span>
          <br />
          <span className="text-5xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-300 via-blue-300 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
            Cyber Frontier
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-[17px] font-light max-w-3xl md:max-w-4xl mx-auto leading-relaxed backdrop-blur-xl p-4 sm:p-6 rounded-2xl lg:rounded-3xl border border-pink-400/20 bg-gradient-to-br from-purple-900/40 to-blue-900/40">
          Advanced threat detection meets aesthetic security design. Our solutions combine
          <span className="text-pink-300"> AI-powered defense systems</span>,{" "}
          <span className="text-blue-300"> quantum encryption protocols</span>, and{" "}
          <span className="text-purple-300"> neural network monitoring</span> in a seamless digital armor.
        </p>

        <a href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-4 md:px-12 md:py-5 text-lg sm:text-xl font-semibold rounded-full lg:rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-400/30">
          <span className="relative z-10 flex items-center gap-3">
            <ShieldIcon className="w-6 h-6 sm:w-7 sm:h-7 text-pink-200 animate-pulse" />
            <span className="text-shadow">Activate Protection</span>
          </span>
          <div className="absolute inset-0 rounded-full border-2 border-pink-400/30 animate-border-glow" />
        </a>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes text-shine {
          to { background-position: 200% center; }
        }

        @keyframes border-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(236,72,153,0.3); }
          50% { box-shadow: 0 0 20px rgba(236,72,153,0.6); }
        }

        @keyframes cyber-float {
          0%, 100% { transform: translateY(0) rotateX(0deg); }
          50% { transform: translateY(-10px) rotateX(15deg); }
        }

        @keyframes scroll-pulse {
          0% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(8px); opacity: 0.4; }
          100% { transform: translateY(0); opacity: 0.8; }
        }

        .animate-text-shine {
          background-size: 200% auto;
          animation: text-shine 3s linear infinite;
        }

        .animate-border-glow {
          animation: border-glow 1.5s ease-in-out infinite;
        }

        .animate-cyber-float {
          animation: cyber-float 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-scroll-pulse {
          animation: scroll-pulse 2s ease-in-out infinite;
        }

        .animate-glitch {
          animation: glitch 2s infinite linear alternate-reverse;
        }

        .text-shadow {
          text-shadow: 0 2px 10px rgba(236,72,153,0.4);
        }
      `}</style>
    </div>
  );
};

const ShieldIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2.5L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-4.5zM12 22V10" />
    <path d="M3 7l9-4.5L21 7" />
  </svg>
);

export default FullScreenCyberServices;
