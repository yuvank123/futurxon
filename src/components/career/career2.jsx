import React, { useState } from "react";

const Career2 = () => {
  const [activeTab, setActiveTab] = useState("Discover Technology");

  // Content for each tab
  const tabs = {
    "Discover Technology": {
      title: "Discover Technology",
      content: `At Mobisoft, we stand tall in offering a healthy work environment to our employees. 
      For us, they are the pioneers of technology change and client satisfaction. Hiring excellence is 
      what we believe in and transforming the future of our employees is our forte. If you’re passionate 
      enough to redefine the limits of technology, then you’re at the right place. Our recruitment professionals 
      focus on hiring the best talent and offering the best job opportunities across the industry.`,
      image: "/images/Discover-Technology.png",
    },
    "Ace Your Career": {
      title: "Ace Your Career",
      content: `If you are experienced in the pursuit of excellence in technology, we give you the 
      platform to ace your careers. Look no further as we have the most competent 
      full-time job opportunities that will boost your career trajectory. Explore your career 
      path at Mobisoft and work with some of the largest and most-recognized brands in the world. Leverage 
      high-end profiles and opportunities to make a difference for some of the world’s biggest organizations.`,
      image: "/images/Ace-your-career.png",
    },
    "Train with Professionals": {
      title: "Train with Professionals",
      content: `We provide the necessary tools, techniques, and mentorship from industry 
      experts. Get opportunities to hone your skills through our learning, development, and internship 
      programs. Empower your careers with on-the-job experience and training. Our seasoned professionals 
      will help you develop confidence to lead, meet, and succeed.`,
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
            Your Journey to Growth
          </h2>
          <p className="text-lg text-gray-300/80">
            Explore opportunities and achieve your career goals with us.
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
