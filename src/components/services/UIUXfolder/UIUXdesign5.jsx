import React from "react";
import Figma from "../../../../public/images/figma.svg";
import AdobeXD from "../../../../public/images/adobe-xd.svg";
import Sketch from "../../../../public/images/sketch.svg";
import InVision from "../../../../public/images/invision.svg";
import Framer from "../../../../public/images/framer.svg";

const UIUXTechStack = () => {
  const technologies = [
    { img: Figma },
    { img: AdobeXD },
    { img: Sketch },
    { img: InVision },
    { img: Framer }
  ];

  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        {/* Left Section - Text Content */}
        <div className="lg:w-1/2 space-y-8 pr-0 lg:pr-12">
          <div className="space-y-6 border-b border-white/10 pb-8">
            <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 bg-clip-text text-transparent leading-tight">
              UI/UX Design Ecosystem
            </h1>
            <p className="text-xl text-gray-300/90 md:text-2xl max-w-2xl leading-relaxed">
              Crafting exceptional digital experiences with industry-standard design tools, 
              prototyping platforms, and user research technologies for pixel-perfect implementations.
            </p>
          </div>
        </div>

        {/* Right Section - Tech Grid */}
        <div className="lg:w-1/2 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative p-1 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/3 border border-white/10 rounded-2xl transition-all duration-500 hover:scale-[1.05] hover:border-purple-400/30 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-amber-50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative z-10 aspect-square flex items-center justify-center p-4">
                  <img
                    src={tech.img}
                    alt="UI/UX Technology"
                    className="w-full h-auto max-h-32 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]"
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

export default UIUXTechStack;