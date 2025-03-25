import { motion } from "framer-motion";
import React from 'react';
import "../../../src/style/titlepage.css";

const titlepage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 }
    }
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 }
    }
  };

  const colorTransition = {
    hidden: { color: "#ffffff" },
    visible: {
      color: "#3b82f6",
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <motion.div 
      className='relative top-0 lg:top-20 left-0 w-full h-[80vh] z-20 flex flex-col justify-center items-start p-4 md:pl-20 bg-opacity-50 text-white gap-2'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* First Line - AI-Powered Innovation */}
      <motion.div className='mb-4' variants={slideInLeft}>
        <h1 className='text-2xl md:text-4xl font-[1px]'>
          AI-Powered Innovation
        </h1>
      </motion.div>

      {/* Main Title */}
      <motion.div className='w-full md:w-[70vw]' variants={itemVariants}>
        <h1 className='text-4xl md:text-7xl font-bold mb-4 scale-y-110'>
          Agile & Scalable IT Services for{" "}
          <motion.span 
            className='text-blue-300'
            variants={colorTransition}
          >
            Business{" "}
          </motion.span>
          Growth
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.div className='mb-4' variants={itemVariants}>
        <h1 className='text-xl md:text-3xl font-[1px]'>
          Your Trusted Partner for Innovative Technology Solutions
        </h1>
      </motion.div>

      {/* Button */}
      <motion.div 
        className='mb-4'
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className='px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-300'>
          BUILD YOUR OWN TEAM
        </button>
      </motion.div>
    </motion.div>
  );
};

export default titlepage;