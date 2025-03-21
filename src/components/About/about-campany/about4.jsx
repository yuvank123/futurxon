import React, { useState } from "react";
import Office0 from "../../../images/office0.jpg";
import Office1 from "../../../images/office1.jpg";
import Office2 from "../../../images/office2.jpg"; // Ensure correct path

const About5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    {
      title: "Top-Tier IT Geniuses",
      content:
        "Our team is an exclusive hub of top dedicated software developers, UI/UX designers, QA experts, and product managers with rare and hidden talents. We let you access exceptional IT talent globally, from independent developers to fully managed teams.",
      image: Office0,
    },
    {
      title: "Time Zone Aligned",
      content:
        "We ensure seamless collaboration by aligning with your time zone. Work with developers who are available when you need them the most, ensuring efficiency and productivity.",
      image: Office1,
    },
    {
      title: "Experienced Team",
      content:
        "With years of experience in various domains, our team is equipped with the skills to deliver high-quality solutions. We bring expertise, innovation, and dedication to every project we undertake.",
      image: Office2,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent px-2 p-4">
            Our Strengths
          </h1>
          <p className="text-base md:text-xl text-gray-300/90 font-light max-w-2xl mx-auto">
            Discover what makes our team truly exceptional
          </p>
        </div>

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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent mb-4 md:mb-6">
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
