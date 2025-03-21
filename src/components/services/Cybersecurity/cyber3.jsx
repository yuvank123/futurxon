import React from "react";
import CyberImage from "../../../../public/images/screen.png";

const cybersecurityProcess = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center px-4 py-20">
      {/* Header Section */}
      <div className="relative z-10 text-center mb-16 max-w-4xl px-4">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Safeguarding Your Digital World
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Secure and Resilient
          </span>
        </h1>
        <p className="text-xl text-gray-300/90">
          We leverage state-of-the-art cybersecurity measures and advanced threat intelligence to protect your organization's assets.
        </p>
      </div>

      {/* Process Steps - Simplified */}
      <div className="relative z-10 w-full px-4 flex justify-center items-center border-0 border-amber-50">
        <img src={CyberImage} alt="Cybersecurity" className="rounded-4xl"/>
      </div>
    </div>
  );
};

export default cybersecurityProcess;
