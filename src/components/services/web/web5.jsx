import React from "react";
import Mongo from "../../../images/mongo.svg";
import Aws from "../../../images/aws.svg";
import Vscode from '../../../images/vscode.svg';
import Angular from "../../../images/angular.svg";
import Azure from "../../../images/azure.svg";

const WebTechStackUI = () => {
  const technologies = [
    { img: Mongo },
    { img: Aws },
    { img: Vscode },
    { img: Angular },
    { img: Azure },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8 -mt-2">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl h-[60px] font-bold bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500 bg-clip-text text-transparent mb-4">
          Technologies
        </h1>
        <p className="text-lg text-gray-600">
          Powering innovation with modern tech stack
        </p>
      </div>

      {/* Tech Grid */}
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group relative p-6 backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg rounded-2xl transition-transform duration-300 hover:scale-110"
          >
            <div className="relative z-10 w-40 h-24 flex items-center justify-center">
              <img
                src={tech.img}
                alt="Technology"
                className="h-30 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebTechStackUI;