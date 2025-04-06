import React from "react";
import { motion } from "framer-motion";
import AiImage from "../../../public/images/aiimage.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.8,
      delay: 0.2,
    },
  },
};

const How = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="h-full w-full flex flex-col lg:flex-row items-center justify-center perspective-[600px] px-6 md:px-10 lg:px-20 relative"
      aria-labelledby="ai-api-heading"
    >
      {/* Background SVG */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          className="absolute right-0 top-0 h-full w-1/2"
          viewBox="0 0 100 100"
        >
          <g className="animate-float">
            <path
              d="M50,10 L90,50 L50,90 L10,50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-purple-400"
            />
            <circle
              cx="80"
              cy="20"
              r="8"
              className="text-blue-400 animate-pulse"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="20"
              cy="70"
              r="12"
              className="text-purple-400 animate-pulse delay-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M20,20 Q50,50 80,80"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-blue-400/50"
              strokeDasharray="4 2"
            />
          </g>
        </motion.svg>
      </div>

      {/* Image Card */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-64 md:h-80 lg:h-96 transform-gpu translate-z-3 rotate-y-10 lg:rotate-y-20 hover:translate-z-10 transition-all duration-500 rounded-4xl shadow-lg shadow-gray-800/50"
      >
        <img
          src={AiImage}
          alt="Background"
          className="w-full h-full object-cover rounded-4xl contrast-120"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        variants={containerVariants}
        className="w-full max-w-lg space-y-6 mt-8 lg:mt-0 lg:pl-10 xl:pl-20 text-center lg:text-left"
      >
        <motion.h1
          variants={itemVariants}
          id="ai-api-heading"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg leading-tight"
        >
          AI-Driven API Development: Smarter Integration, Faster Scalability
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed"
        >
          Try our AI-powered API solutions to automate documentation, enhance
          security, and optimize microservices for seamless scalability.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-start gap-4 mt-6"
        >
          <span className="h-1 w-10 sm:w-12 md:w-20 bg-purple-400 rounded-full animate-pulse"></span>
          <span className="h-1 w-6 sm:w-8 md:w-10 bg-blue-400 rounded-full animate-pulse delay-100"></span>
          <span className="h-1 w-3 sm:w-4 md:w-5 bg-purple-400 rounded-full animate-pulse delay-200"></span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-start mt-6 md:mt-8"
        >
          <button
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 
                      rounded-lg text-white font-semibold tracking-wide 
                      transform transition-all duration-300 hover:scale-105 
                      hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 
                      flex items-center gap-2 group"
          >
            BUILD SMARTER APIs
            <svg
              className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default How;
