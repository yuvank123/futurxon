import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const AboutUs = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden text-white px-4 md:px-6 pt-24 md:pt-32">
      {/* Background elements */}
      
      {/* Content */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 text-center max-w-3xl backdrop-blur-lg bg-white/5 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 transition-all hover:bg-white/10"
      >
        <h3 className="text-lg md:text-xl text-purple-300 font-medium mb-4">
          We drive success for businesses worldwide!
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent mb-6 p-2">
          Unlocking Tomorrow's Tech Today!
        </h1>
        <h2 className="text-lg md:text-xl text-purple-100/80 mb-8 leading-relaxed">
          Our mission is to empower digital disruptors to see the invisible and achieve the impossible with cutting-edge digital solutions.
        </h2>
        <div className="group relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000" />
          <button className="relative bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            LET'S TALK
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
