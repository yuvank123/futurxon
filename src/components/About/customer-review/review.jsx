import React from "react";

const Review = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden text-white px-4 md:px-6 py-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[300px] h-[300px] bg-purple-500/20 rounded-full -top-32 -left-32 mix-blend-soft-light animate-float"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500/25 rounded-full -bottom-48 -right-48 mix-blend-soft-light animate-float-delayed"></div>
      </div>

      {/* Main content card */}
      <div className="relative z-10 text-center max-w-4xl backdrop-blur-2xl bg-gradient-to-br from-white/5 to-white/2 rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-3xl group">
        {/* Animated gradient text */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
          <span className="bg-gradient-to-r from-purple-300 via-blue-200 to-purple-300 bg-clip-text text-transparent bg-300% animate-gradient-shine">
            Experience With Futurxon
          </span>
        </h1>

        {/* Content with subtle animation */}
        <div className="space-y-8">
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto transition-all duration-300 group-hover:text-white/90">
            We empower brands through innovative digital transformation, driving product growth and creating lasting market impact through cutting-edge solutions.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "200+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "1M+", label: "Users Reached" },
            ].map((stat, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-blue-200 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/80 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default Review;