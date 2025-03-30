import React from "react";

const AboutUs = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden text-white px-4 md:px-6 pt-24 md:pt-32">
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl backdrop-blur-lg bg-white/5 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 transition-all hover:bg-white/10 ">
        <h3 className="text-lg md:text-xl text-purple-200 font-medium mb-4">
        Driving Global Success, One Innovation at a Time!
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent mb-6 p-2">
        Transforming the Future with Today's Technology!
        </h1>
        <h2 className="text-lg md:text-xl text-purple-100/80 mb-8 leading-relaxed">
        Our mission is to empower visionary businesses and digital disruptors, helping them envision the unseen and accomplish the extraordinary through next-gen digital solutions.
        </h2>
        <div className="group relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000" />
          <button className="relative bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            Let's Connect 
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;