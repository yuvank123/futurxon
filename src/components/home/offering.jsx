import React from 'react';
import { motion } from 'framer-motion';
import Men from "../../../public/images/men.png";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

// Floating animation keyframes
const floatTransition = {
  y: [0, -10, 0, 10, 0],       // Smooth vertical float
  x: [0, 20, 0, -10, 0],         // Gentle horizontal sway
  rotate: [0, 2, 0, -2, 0],    // Subtle sway rotation
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

const Offering = () => {
  const features = [
    {
      title: "Cloud-Native",
      icon: (
        <svg className="feature-icon" viewBox="0 0 100 100">
          <path className="icon-path" d="M50 15L15 40L50 65L85 40L50 15Z" strokeWidth="3" fill="none" strokeLinejoin="round" />
          <path className="icon-path" d="M50 15V65M15 40H85" strokeWidth="3" fill="none" />
        </svg>
      ),
      description: "Seamless scalability and optimized cloud infrastructure."
    },
    {
      title: "AI Integration",
      icon: (
        <svg className="feature-icon" viewBox="0 0 100 100">
          <circle className="icon-path" cx="50" cy="50" r="30" strokeWidth="3" fill="none" />
          <path className="icon-path" d="M35 35L65 65M65 35L35 65" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
      description: "Effortless artificial intelligence implementation for automation."
    },
    {
      title: "Data Analytics",
      icon: (
        <svg className="feature-icon" viewBox="0 0 100 100">
          <path className="icon-path" d="M20 70L20 30L40 50L60 30L80 50L80 70" strokeWidth="3" fill="none" strokeLinejoin="round" />
          <path className="icon-path" d="M30 70L50 50L70 70" strokeWidth="3" fill="none" />
        </svg>
      ),
      description: "Real-time insights and predictive intelligence for smarter decisions."
    },
    {
      title: "IoT Ready",
      icon: (
        <svg className="feature-icon" viewBox="0 0 100 100">
          <rect className="icon-path" x="20" y="30" width="60" height="40" rx="5" strokeWidth="3" fill="none" />
          <path className="icon-path" d="M35 45H65M35 55H65M35 65H65" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
      description: "Enterprise-grade device connectivity and management."
    }
  ];

  return (
    <div className="w-full min-h-screen relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Animated Floating Image */}
      <motion.img
        src={Men}
        alt="Floating Men"
        className="absolute inset-0 z-0 md:left-[670px] opacity-15 md:opacity-70"
        animate={floatTransition}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row justify-between gap-8 mb-12 text-center lg:text-left"
        >
          <div className="lg:w-1/2">
            <h1 className="text-3xl unbounded-816 sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-300 to-purple-200 mb-4">
              Revolutionizing Enterprise
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-tr from-blue-100 via-blue-300 to-blue-200 playwrite-dk-loopet font-mono">Solutions</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400">
              Innovative technology solutions designed to address today's business challenges.
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              className="group p-8 bg-gradient-to-b from-gray-900/100 to-transparent rounded-2xl border-2 border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-100 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="feature-icon-container">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center flex justify-center items-center mt-10"
        >
          <a href="/contact" aria-label="Start Free Trial">
            <button className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-3 group overflow-hidden">
              <span className="relative z-10">Explore Solutions</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-shine" />
              </div>
            </button>
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        .feature-icon {
          width: 80px;
          height: 80px;
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: draw 1.5s ease-out forwards;
        }

        .icon-path {
          stroke: #818cf8;
          transition: all 0.3s ease;
        }

        .feature-icon-container:hover .icon-path {
          stroke: #a78bfa;
          filter: drop-shadow(0 0 8px rgba(167, 139, 250, 0.3));
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shine {
          animation: shine 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Offering;
