import React from 'react';

const Accerate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Transform Your <span className='text-transparent bg-clip-text text-stroke-blue'>Digital Future</span>
          </h1>
          <p className="text-lg text-purple-200/90 font-light max-w-2xl mx-auto">
            Harness next-gen AI capabilities to revolutionize your development workflow
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item}
              className="p-8 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{item}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {[
                    'AI-Driven Automation',
                    'Data-Driven Insights',
                    'Scalable Cloud Solutions',
                    'Real-Time Team Collaboration'
                  ][item - 1]}
                </h3>
                <p className="text-sm text-purple-100/80 font-light">
                  {[
                    'Boost efficiency with intelligent workflow automation and process optimization.',
                    'Utilize advanced AI-powered analytics for smarter, real-time business decisions.',
                    'Seamlessly integrate with cloud infrastructure for enhanced flexibility and security.',
                    'Enhance productivity with seamless, AI-enhanced collaboration across global teams.'
                  ][item - 1]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold 
            hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20
            flex items-center gap-2 group">
            Start Free Trial
            <svg 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accerate;