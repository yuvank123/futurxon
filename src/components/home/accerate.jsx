import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Accerate = () => {
  return (
    <div className="min-h-screen relative z-10 py-24 px-4">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Transform Your <span className='text-transparent bg-clip-text text-stroke-blue'>Digital Future</span>
          </h1>
          <p className="text-lg text-purple-200/90 font-light max-w-2xl mx-auto">
            Harness next-gen AI capabilities to revolutionize your development workflow
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {[1, 2, 3, 4].map((item) => (
            <motion.div 
              key={item}
              variants={containerVariants}
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
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Accerate;
