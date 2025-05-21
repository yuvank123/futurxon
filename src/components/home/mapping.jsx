import React from "react";
import { motion } from "framer-motion";

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
  "Scalable Infrastructure Routing",
];

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Reusable Scrolling Text Component
const ScrollingText = ({ direction }) => (
  <div className="relative h-14 sm:h-16 md:h-20 lg:h-24 overflow-hidden">
    <div
      className={`absolute top-0 ${
        direction === "left" ? "left-0 animate-scroll-left" : "right-0 animate-scroll-right"
      } w-[300%] flex items-center space-x-6 sm:space-x-8 hover:animation-paused`}
    >
      {[...scrollingTerms, ...scrollingTerms].map((term, i) => (
        <span
          key={i}
          className="whitespace-nowrap text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-400 hover:text-purple-400 transition-colors font-mono"
        >
          {term} <span className="mx-2 sm:mx-4 text-purple-500">◆</span>
        </span>
      ))}
    </div>
  </div>
);

const Mapping = () => {
  return (
    <div className="w-full md:h-screen flex flex-col items-center justify-center relative px-4 md:px-8 h-[70vh] md:my-5 overflow-hidden">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q25 30 50 50 T100 50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-800"/>
          <path d="M0 30 Q40 50 80 30 T160 30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-gray-800" transform="translate(-20 20)"/>
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative w-full text-center max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center px-4 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold unbounded-816 text-gray-100 mb-5 leading-tight">
            Advanced Network{" "}
            <span className="bg-clip-text text-transparent playwrite-dk-loopet bg-gradient-to-r from-purple-400 to-blue-400 font-mono">
              Topology Solutions
            </span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
            Real-time topology visualization and smart path optimization for scalable distributed systems.
          </p>
        </motion.div>

        {/* Scrolling Terms */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <ScrollingText direction="left" />
          <ScrollingText direction="right" />
        </motion.div>

        {/* CTA Button */}
        <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center flex justify-center items-center"
                >
                  <a href="/contact" aria-label="Start Free Trial">
                    <button className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold 
                    hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300
                    flex items-center gap-3 group overflow-hidden ">
                      <span className="relative z-10">Instialize Network Scan</span>
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
        
                      {/* Button Hover Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-shine" />
                      </div>
                    </button>
                  </a>
                </motion.div>
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
        .hover\\:animation-paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Mapping;
