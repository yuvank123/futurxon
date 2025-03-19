import React from "react";
// import CrowdStrike from "../../../images/crowdstrike.svg";
import Symantec from "../../../images/symantec.svg";
// import McAfee from "../../../images/mcafee.svg";
// import PaloAlto from "../../../images/palo-alto.svg";
// import FireEye from "../../../images/fireeye.svg";

const CybersecurityTechStackUI = () => {
  const technologies = [
    { img: Symantec }
  ];

  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        {/* Left Section - Text Content */}
        <div className="lg:w-1/2 space-y-8 pr-0 lg:pr-12">
          <div className="space-y-6 border-b border-white/10 pb-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-400 via-purple-300 to-blue-400 bg-clip-text text-transparent leading-tight">
              Cybersecurity Ecosystem
            </h1>
            <p className="text-xl text-gray-300/90 md:text-2xl max-w-2xl leading-relaxed">
              Fortifying your organization with cutting-edge cybersecurity solutions and technologies to defend against evolving threats.
            </p>
          </div>
        </div>

        {/* Right Section - Tech Grid */}
        <div className="lg:w-1/2 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative p-1 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/3 border border-white/10 rounded-2xl transition-all duration-500 hover:scale-[1.05] hover:border-red-400/30 hover:shadow-2xl hover:shadow-red-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10 aspect-square flex items-center justify-center p-4">
                  <img
                    src={tech.img}
                    alt="Cybersecurity Service"
                    className="w-full h-auto max-h-32 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(239,68,68,0.3)]"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityTechStackUI;
