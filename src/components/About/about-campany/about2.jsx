import React, { useState } from "react";
import Office from "../../../images/office.jpg";

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
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={Office}
          alt="Team Discussion"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            In the ever-evolving landscape of technology, choosing the right IT
            partner is pivotal to your organization's success.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 relative z-10">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="relative group p-8 rounded-2xl border border-white/10 bg-gray-900/30 backdrop-blur-lg hover:bg-gray-700/30 transition-all duration-300 cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                  openIndex === index 
                    ? "bg-purple-400 text-gray-900" 
                    : "bg-gray-700/50 text-purple-400"
                }`}>
                  <span className="font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold mb-3 ${
                    openIndex === index ? "text-purple-400" : "text-gray-100"
                  }`}>
                    {section.title}
                  </h3>
                  {openIndex === index && (
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About3;