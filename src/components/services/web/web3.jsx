import React from "react";
import Trackpng from "../../../../public/images/1.svg";

const WebProcess = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center px-4 py-40 md:py-20">
      {/* Header Section */}
      <div className="relative z-10 text-center mb-2 md:mb-16 max-w-4xl px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tight mb-4 md:mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-red-400 bg-clip-text text-transparent">
          Building Custom Websites
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300/90 leading-relaxed">
          We harness the power of{" "}
          <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-medium">
            agile website development
          </span>{" "}
          for all our website projects.
        </p>
      </div>

      {/* Process Image Section */}
      <div className="relative z-10 w-full px-2 sm:px-4 flex justify-center items-center">
        <img
          src={Trackpng}
          alt="Development Process Illustration"
          className="w-full h-auto max-w-3xl rounded-2xl"
        />
      </div>
    </div>
  );
};

export default WebProcess;
