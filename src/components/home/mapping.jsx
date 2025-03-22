import React from 'react';

const Mapping = () => {
    const scrollingTerms = [
        "Dynamic Node Routing",
        "Intelligent Path Optimization",
        "AI-Powered Network Mapping",
        "Smart Traffic Routing",
        "Neural Path Optimization",
        "Real-Time Topology Optimization",
        "Adaptive Data Flow Management",
        "Predictive Network Navigation",
        "Self-Learning Route Mapping",
        "Scalable Infrastructure Routing"
    ];

    return (
        <div className="w-full h-screen bg-gray-900 overflow-hidden flex flex-col items-center justify-center relative px-4 md:px-8">
            {/* Background Tech SVG Pattern */}
            <div className="absolute inset-0 z-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 50 Q25 30 50 50 T100 50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-800"/>
                    <path d="M0 30 Q40 50 80 30 T160 30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-800" transform="translate(-20 20)"/>
                </svg>
            </div>

            {/* Content Container */}
            <div className="relative w-full text-center max-w-6xl mx-auto">
                {/* Title Section */}
                <div className="flex flex-col items-center px-4 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-4 leading-tight">
                        Advanced Network <span className="text-purple-400">Topology Solutions</span>
                    </h1>
                    <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
                        Real-time topology visualization and smart path optimization for scalable distributed systems.
                    </p>
                </div>

                {/* Scrolling Terms */}
                <div className="mb-8 group w-full overflow-hidden">
                    <div className="relative h-14 sm:h-16 md:h-20 lg:h-24">
                        <div className="absolute top-0 left-0 w-[300%] flex items-center space-x-6 sm:space-x-8 animate-scroll-left hover:animation-paused">
                            {[...scrollingTerms, ...scrollingTerms].map((term, i) => (
                                <span 
                                    key={i} 
                                    className="whitespace-nowrap text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    {term}
                                    <span className="mx-2 sm:mx-4 text-purple-500">◆</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-14 sm:h-16 md:h-20 lg:h-24 mt-4">
                        <div className="absolute top-0 right-0 w-[300%] flex items-center space-x-6 sm:space-x-8 animate-scroll-right hover:animation-paused">
                            {[...scrollingTerms, ...scrollingTerms].map((term, i) => (
                                <span 
                                    key={i} 
                                    className="whitespace-nowrap text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    {term}
                                    <span className="mx-2 sm:mx-4 text-purple-500">◆</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <button className="w-11/12 sm:w-2/3 md:w-1/3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-gray-800 to-purple-900 rounded-lg text-gray-300 font-semibold hover:from-blue-900 hover:to-gray-800 transition-all hover:scale-105 hover:shadow-xl border border-gray-700/50">
                        Initialize Network Scan
                    </button>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scroll-right {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(50%); }
                }
                .animate-scroll-left {
                    animation: scroll-left 30s linear infinite;
                }
                .animate-scroll-right {
                    animation: scroll-right 30s linear infinite;
                }
                .hover\:animation-paused:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default Mapping;
