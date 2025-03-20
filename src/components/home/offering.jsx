import React from 'react';

const Offering = () => {
  const features = [
    {
      title: "AI Integration",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Seamless artificial intelligence implementation"
    },
    {
      title: "Cloud Native",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      description: "Full cloud infrastructure compatibility"
    },
    {
      title: "Data Analytics",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: "Real-time insights and predictive analysis"
    },
    {
      title: "IoT Ready",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      description: "Enterprise-grade device management"
    }
  ];

  return (
    <div className="w-full h-full relative overflow-hidden mt-10 px-4 sm:px-6 lg:px-8 mb-10">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12 text-center lg:text-left">
          <div className="lg:w-1/2">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-purple-400 mb-4">
              Enterprise Solutions
              <span className="block mt-2 text-transparent bg-clip-text text-stroke-lg">Redefined</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400">
              Transformative technology solutions for modern business challenges
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-gray-900 rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-700"
            >
              <div className="mb-4 text-blue-600 flex justify-center lg:justify-start">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-purple-400 mb-2 text-center lg:text-left">{feature.title}</h3>
              <p className="text-gray-400 text-center lg:text-left">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex justify-center lg:justify-end mt-12">
          <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg 
            font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300
            flex items-center gap-2 shadow-md hover:shadow-lg">
            Explore Solutions
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offering;
