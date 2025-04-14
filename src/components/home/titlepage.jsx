import { motion } from "framer-motion";
import React from "react";
import "../../../src/style/titlepage.css";

const TitlePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const colorTransition = {
    hidden: { color: "#ffffff" },
    visible: {
      color: "#3b82f6",
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <header className="relative top-0 lg:top-20 left-0 w-full h-[80vh] z-20 flex flex-col justify-center items-start p-4 md:pl-20 bg-opacity-50 text-white gap-2">
      {/* First Line - AI-Powered Innovation */}
      <motion.div className="mb-4" variants={slideInLeft}>
        <h2 className="text-2xl md:text-4xl font-semibold">
          AI-Powered Innovation
        </h2>
      </motion.div>

      {/* Main Title */}
      <motion.section className="w-full md:w-[70vw]" variants={itemVariants}>
        <h2 className="text-4xl md:text-7xl font-bold mb-4 scale-y-110">
          Agile & Scalable IT Services for{" "}
          <motion.span className="text-blue-300" variants={colorTransition}>
            Business{" "}
          </motion.span>
          Growth
        </h2>
      </motion.section>

      {/* Subtitle */}
      <motion.section className="mb-4" variants={itemVariants}>
        <h2 className="text-xl md:text-3xl font-medium">
          Your Trusted Partner for Innovative Technology Solutions
        </h2>
      </motion.section>

      {/* Call to Action */}
      <motion.div
        className="mb-4"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="/contact" aria-label="Contact-us">
          <button className="px-4 py-2 md:px-6 md:py-3 font-bold bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors duration-300">
            Get Started
          </button>
        </a>
      </motion.div>
    </header>
  );
};

export default TitlePage;
