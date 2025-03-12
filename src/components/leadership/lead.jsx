import React from 'react';

const LeadershipTeam = () => {
  return (
    <div className="relative min-h-screen text-white py-30 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col justify-center h-full space-y-8">
        {/* Glassmorphism Badge */}
        <div className="inline-block bg-white/5 backdrop-blur-lg border border-white/10 py-2 px-6 text-sm uppercase font-bold rounded-full self-center shadow-lg hover:scale-105 transition-transform duration-300">
          <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Our Forward-Looking Leadership Team
          </span>
        </div>
        
        {/* Gradient Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-200 text-center leading-tight">
          Visionary Leaders Driving Innovation
        </h1>
        
        {/* Paragraph with Gradient Highlight */}
        <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 text-center leading-relaxed max-w-2xl mx-auto">
          Our workspace is a fusion of forward-looking industry leaders of varied cultures who together share common corporate values, but one motive - 
          <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-semibold">
            {" "}Client satisfaction is our highest priority.{" "}
          </span>
          Let's meet our leaders who always motivate us to stay passionately committed to your success.
        </p>
        
        {/* Static Button Design */}
        <div className="relative group self-center">
          <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-medium text-lg transition-all duration-300 hover:shadow-xl flex items-center gap-2">
            <span>Contact Us</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;