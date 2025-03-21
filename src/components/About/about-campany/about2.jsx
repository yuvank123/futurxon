import React, { useState } from "react";
import Office from "../../../images/Office.jpg"

const About3 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Expertise That Matters",
      content: "Our team comprises industry veterans and emerging talents who are passionate about technology. With years of experience and a commitment to staying at the forefront of industry trends, we bring a wealth of expertise to the table."
    },
    {
      title: "Tailored Solutions",
      content: "We don’t believe in one-size-fits-all solutions. Every organization is unique, and we take the time to understand your specific needs. Our solutions are meticulously crafted to align with your goals and challenges."
    },
    {
      title: "Innovation at the Core",
      content: "Innovation isn’t just a buzzword for us; it’s in our DNA. We embrace cutting-edge technologies, explore new possibilities, and challenge the status quo to deliver solutions that drive your business forward."
    },
    {
      title: "Proven Track Record",
      content: "Our success is measured by the results we’ve achieved for our clients. With a portfolio of successful projects and satisfied clients, we have a proven track record of delivering value and excellence."
    },
    {
      title: "Dedication to Quality",
      content: "Quality is non-negotiable for us. From the code we write to the services we provide, we maintain the highest standards of quality and attention to detail."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section: Image */}
        <div className="lg:w-1/2 w-full">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition duration-1000"></div>
            <img
              src={Office}
              alt="Team Discussion"
              className="relative rounded-2xl border border-white/10 shadow-2xl shadow-black/30 transform transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="lg:w-1/2 w-full space-y-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-300 to-pink-400 bg-clip-text text-transparent p-2">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-300">
            In the ever-evolving landscape of technology, choosing the right IT
            partner is pivotal to your organization's success.
          </p>
          
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg shadow-black/20"
              >
                <button
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-700/20 transition-all duration-300 rounded-xl"
                  onClick={() => toggleDropdown(index)}
                >
                  <span className="text-lg font-medium text-gray-100">
                    {section.title}
                  </span>
                  <svg
                    className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-2 text-gray-300">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;