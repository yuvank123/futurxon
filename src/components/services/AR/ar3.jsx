import React from "react";
import Trackpng from "../../../images/screen.png";

const ARVR3DProcess = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center px-4 py-20">
      {/* Header Section */}
      <div className="relative z-10 text-center mb-16 max-w-4xl px-4">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Redefining Reality with
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            AR/VR &amp; 3D Modelling
          </span>
        </h1>
        <p className="text-xl text-gray-300/90">
          Dive into immersive experiences where cutting-edge{' '}
          <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent font-medium">
            augmented reality, virtual reality, and 3D design
          </span>{' '}
          converge to create stunning digital worlds.
        </p>
      </div>

      {/* Process Steps - Simplified */}
      <div className="relative z-10 w-full px-4 flex justify-center items-center">
        <img src={Trackpng} alt="AR/VR &amp; 3D Modelling Process" className="rounded-4xl" />
      </div>
    </div>
  );
};

export default ARVR3DProcess;
