import React, { useState } from "react";
import { motion } from "framer-motion";
import Office0 from "../../../../public/images/office0.jpg";
import Office1 from "../../../../public/images/office1.jpg";
import Office2 from "../../../../public/images/office2.jpg"; // Ensure correct path

const About5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "Next-Gen IT Experts",
      content:
        "Our team is a powerhouse of AI specialists, cloud engineers, web and app developers, and UI/UX designers. We connect you with top-tier IT talent worldwide, from independent innovators to fully managed expert teams, ensuring seamless digital transformation.",
      image: Office0,
    },
    {
      title: "Global Time Zone Alignment",
      content:
        "We provide time zone-aligned developers to ensure real-time collaboration, seamless communication, and maximum productivity. Work with experts who are available when you need them, optimizing efficiency for your projects.",
      image: Office1,
    },
    {
      title: "Seasoned Tech Experts",
      content:
        "Our team of highly skilled professionals brings years of experience in AI, cloud computing, web, and app development. With a proven track record of delivering innovative, high-quality solutions, we ensure expertise and excellence in every project.",
      image: Office2,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

   // Framer Motion variant for fade-up animation
   const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 md:py-20 relative overflow-hidden">
    <div className="max-w-6xl w-full relative z-10">
      {/* Header Section */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-purple-800 via-purple-300  to-gray-200 bg-clip-text text-transparent px-2 p-4 font-mono tracking-tighter">
          Our Strengths
        </h1>
        <p className="text-base md:text-xl text-gray-300/90 font-light max-w-2xl mx-auto">
        Experience the difference with our exceptional team.
        </p>
      </motion.div>

        {/* Card Container */}
        <div className="relative group">
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={handlePrev}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-12 p-2 md:p-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 shadow-xl shadow-purple-500/20 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-x-10 md:hover:-translate-x-14 z-20"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-12 p-2 md:p-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-xl shadow-blue-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:translate-x-10 md:hover:translate-x-14 z-20"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl shadow-black/50 overflow-hidden border border-white/10">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            
            <div className="flex flex-col md:flex-row min-h-[400px] md:h-[600px]">
              {/* Image Section */}
              <div className="relative md:w-1/2 h-64 sm:h-80 md:h-auto overflow-hidden">
                <img
                  src={sections[activeIndex].image}
                  alt={sections[activeIndex].title}
                  className="w-full h-full object-cover transform transition-all duration-500 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              </div>

              {/* Text Section */}
              <div className="md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600" />
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r  from-purple-400 via-purple-300  to-gray-200 bg-clip-text text-transparent mb-4 md:mb- font-mono tracking-tighter">
                  {sections[activeIndex].title}
                </h2>
                <p className="text-gray-300/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  {sections[activeIndex].content}
                </p>
                
                {/* Progress Dots - Mobile-friendly */}
                <div className="flex space-x-2 md:space-x-3 mt-4 md:mt-auto justify-center md:justify-start">
                  {sections.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 md:h-2.5 w-6 md:w-8 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-gradient-to-r from-blue-400 to-purple-400 shadow-[0_0_10px] md:shadow-[0_0_15px] shadow-blue-400/30"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="sm:hidden flex justify-center space-x-6 mt-6">
          <button
            onClick={handlePrev}
            className="p-3 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-purple-600 rounded-full shadow-lg hover:bg-purple-700 transition-all"
          >
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About5;