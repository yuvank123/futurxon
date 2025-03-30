import React from "react";

const Career = () => {
  return (
    <div className="relative h-[80vh] md:min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-16 text-white overflow-hidden">

      {/* Left Content Section */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left py-0 space-y-6 md:space-y-8 md:pr-5 lg:pr-10">
        <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold  font-mono tracking-tight lg:leading-20 bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent">
          Shape the Future at<br className="hidden md:block"/> Infinoid
        </h1>
        <p className="text-base md:text-xl text-gray-200/80 max-w-2xl leading-relaxed">
          Join our constellation of innovators where quantum computing meets AI frontiers. Craft solutions that redefine reality while orbiting in a culture of relentless curiosity.
        </p>
        <button className="group relative px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold bg-gradient-to-r from-purple-600/90 to-purple-300/90 hover:from-purple-500 transition-all duration-300 rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl shadow-purple-900/50 hover:shadow-blue-900/50 transform hover:scale-[1.02] active:scale-95 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Launch Your Odyssey →
          </span>
        </button>
      </div>

      {/* Right Animation Section - Hidden on Small Screens */}
      <div className="relative z-10 w-full md:w-1/2 justify-center items-center mt-12 md:mt-0 hidden md:flex">
        <div className="relative h-52 w-52 sm:h-64 sm:w-64 md:h-96 md:w-96 perspective-midrange">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-12 w-full origin-bottom transform animate-continuous-wave"
              style={
                {
                  "--tz": `${i * -40}px`,
                  transform: `rotateX(45deg) translateZ(${i * -40}px)`,
                  background: `linear-gradient(135deg, 
                    rgba(126, 34, 206, ${0.8 - (i * 0.1)}) 0%, 
                    rgba(59, 130, 246, ${0.8 - (i * 0.1)}) 100%)`,
                  boxShadow: `0 8px 32px rgba(139, 92, 246, ${0.3 - (i * 0.03)})`,
                  filter: `blur(${Math.min(i * 0.8, 3)}px)`,
                  borderRadius: '12px',
                  top: `${i * 52}px`,
                  animationDelay: `${i * 0.15}s`
                }
              }
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>
            </div>
          ))}
          <div className="absolute inset-0 bg-purple-500/10 rounded-xl blur-2xl"></div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes continuous-wave {
          0%, 100% {
            transform: rotateX(45deg) translateZ(var(--tz)) scaleY(1) translateY(0);
          }
          25% {
            transform: rotateX(45deg) translateZ(var(--tz)) scaleY(0.85) translateY(8px);
          }
          50% {
            transform: rotateX(45deg) translateZ(var(--tz)) scaleY(1.1) translateY(-5px);
          }
          75% {
            transform: rotateX(45deg) translateZ(var(--tz)) scaleY(0.95) translateY(4px);
          }
        }

        .animate-continuous-wave {
          animation: continuous-wave 2s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Career;
