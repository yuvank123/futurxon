import React from 'react';

const GlassmorphicSection = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-40 w-96 h-96 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full blur-3xl animate-float-delay" />
      </div>

      {/* Glassmorphic Card */}
      <div className="relative bg-white/5 backdrop-blur-4xl shadow-2xl rounded-4xl p-8 mx-4 sm:p-12 sm:mx-8 max-w-4xl border border-white/10 hover:shadow-3xl transition-all">
        {/* Inner Glow Effect */}
        <div className="absolute inset-0 rounded-4xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 pointer-events-none" />
        
        {/* Content */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Powered by Engineers
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Empowered by Technology
          </span>
        </h2>

        {/* Animated Button */}
        <button className="mt-8 group relative bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-4 px-10 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-xl">
          <span className="relative z-10 flex items-center gap-2">
            PARTNER WITH US
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        {/* Decorative Elements */}
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
      </div>
    </div>
  );
};

export default GlassmorphicSection;