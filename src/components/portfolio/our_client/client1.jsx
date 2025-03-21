import React from 'react';

const OurClients = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col justify-center items-center p-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Glass Morphism Content Container */}
      <div className="relative z-10 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto transition-all duration-300 hover:bg-white/10 hover:shadow-xl">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
          Our Valued Clients
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-purple-100/90">
          Collaborating with visionary leaders shaping the future of digital innovation
        </p>
      </div>
    </div>
  );
};

export default OurClients;