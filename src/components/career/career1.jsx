import React from "react";

const Career = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Left Content Section */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left py-12 md:py-0 space-y-6 md:space-y-8 md:pr-5 lg:pr-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-300 via-blue-200 to-pink-300 bg-clip-text text-transparent">
          Jobs At Mobisoft Infotech
        </h1>
        <p className="text-lg md:text-xl text-gray-300/80 max-w-2xl leading-relaxed">
          Together we can build cutting-edge products and curate technology solutions for everyone. Opt for the best
          careers in technology and make people's lives better.
        </p>
        <button className="group px-6 py-3 md:px-8 md:py-4 text-lg font-semibold bg-gradient-to-r from-purple-600/90 to-pink-500/90 hover:from-purple-500/80 hover:to-pink-400/80 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl shadow-purple-900/30 hover:shadow-pink-900/30 transform hover:scale-[1.02] active:scale-95">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Featured Positions
          </span>
        </button>
      </div>

      {/* Right Section: Dynamic Glowing Stairs */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        <div className="relative flex flex-col items-center space-y-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="step"
              style={{
                width: `${120 + i * 10}px`,
                height: "20px",
                background: `linear-gradient(to right, rgba(128,0,255,0.8), rgba(255,64,129,0.8))`,
                boxShadow: `0 4px 15px rgba(128,0,255,0.6), 0 -2px 10px rgba(255,64,129,0.5)`,
                borderRadius: "10px",
                transform: `translateY(${i * 50}px) translateX(${i * 20}px)`,
                animation: `glow 3s ${0.2 * i}s infinite`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Tagline Section */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full px-4 text-center">
      <br />
      <br />
        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-300/80">
          Your Future Awaits: <span className="text-purple-400">Step into Career Growth.</span>
        </p>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        /* Glowing Stairs Animation */
        @keyframes glow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }

        .step {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Career;

