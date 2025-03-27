import React, { useState } from "react";

const Career2 = () => {
  const [activeTab, setActiveTab] = useState("Discover Technology");

  // Content for each tab
  const tabs = {
    "Discover Technology": {
      title: "Explore Tech Frontiers",
      content: "At Infinoid, we foster a culture of innovation, collaboration, and growth. Our experts lead the way in AI, cloud computing, and software development, delivering cutting-edge digital solutions. We hire top tech talent and provide unparalleled opportunities to shape the future of technology. If you're passionate about transforming industries and making an impact, this is your place to thrive. Join us to work on pioneering projects and accelerate your professional growth in a dynamic, future-ready environment.",
      image: "/images/Discover-Technology.png",
    },
    "Ace Your Career": {
      title: "Accelerate Your Growth",
      content: ` If you're driven by innovation and excellence in technology, Infinoid offers the perfect platform to elevate your career. We provide top-tier full-time job opportunities that propel your professional journey forward. Join us to collaborate with industry leaders, work on groundbreaking projects, and make a lasting impact on global businesses. Explore high-growth career paths and unlock your potential in a dynamic, future-focused environment.`,
      image: "/images/Ace-your-career.png",
    },
    "Train with Professionals": {
      title: "Learn from Industry Leaders",
      content: "Gain hands-on experience and mentorship from top professionals in AI, cloud computing, and software development. Our expert-led training programs, internships, and skill development initiatives equip you with the latest tools and techniques to excel in your career. Elevate your expertise with real-world projects and immersive learning opportunities, preparing you to lead and innovate in the ever-evolving tech industry.",
      image: "/images/Train-with-professionals.png",
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Content Section */}
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-300 via-blue-200 to-pink-300 bg-clip-text text-transparent">
          Shape Your Success
          </h2>
          <p className="text-lg text-gray-300/80">
          Explore opportunities to grow, innovate, and succeed.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-lg font-medium rounded-lg transition-colors ${
                activeTab === tab
                  ? "bg-gradient-to-r from-purple-600/90 to-pink-500/90 text-white shadow-lg"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-300 via-blue-200 to-pink-300 bg-clip-text text-transparent">
              {tabs[activeTab].title}
            </h3>
            <p className="text-gray-300/80 leading-relaxed">{tabs[activeTab].content}</p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={tabs[activeTab].image}
              alt={`${activeTab} Image`}
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career2;