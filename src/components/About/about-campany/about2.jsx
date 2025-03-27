import React, { useState } from "react";
import Office from "../../../../public/images/office.jpg";

const About3 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Industry-Leading Expertise",
      content: "Our team combines seasoned professionals and tech innovators with years of hands-on experience. We stay ahead of emerging trends to deliver cutting-edge digital solutions tailored to your needs."
    },
    {
      title: "Tailor-Made Solutions",
      content: " No two businesses are the same, and neither should their solutions be! We design custom strategies that align with your goals, challenges, and industry demands to maximize impact."
    },
    {
      title: "Innovation at the Core",
      content: "We don’t just follow trends—we create them. With advanced technologies, AI-driven insights, and creative problem-solving, we deliver breakthrough solutions that drive sustainable growth."
    },
    {
      title: "Proven Success",
      content: "Results speak louder than words! With a strong track record of satisfied clients and successful projects, we help businesses scale, optimize, and achieve their digital transformation goals."
    },
    {
      title: "Uncompromising Quality",
      content: "Excellence is our standard. From high-performance software to seamless user experiences, we maintain top-tier quality, precision, and security in everything we build"
    },
    {
      title: "Client-Centric Approach",
      content: "We don't just build solutions—we build relationships. Our dedicated team ensures continuous support, strategic guidance, and long-term success for every client."
    }
  ];

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={Office}
          alt="Team Discussion"
          className="w-full h-full object-cover opacity-20 blur-[10px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-8xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-white bg-clip-text text-transparent font-mono tracking-tighter">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          In today's fast-paced digital world, having the right technology partner is key to business growth and success. Here's why we stand out:
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
                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${
                  openIndex === index 
                    ? "bg-purple-400 text-white" 
                    : "bg-gradient-to-r from-purple-400 via-purple-300 to-white text-white"
                }`}>
                  <span className="font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-3 font-mono tracking-tighter ${
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