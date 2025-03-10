import React from "react";
import Bgvideo from "../../../src/video/bgvideo.mp4"; // Corrected file extension

const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[180vh] z-0">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full object-cover"
      >
        <source src={Bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;