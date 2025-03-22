import React from "react";
import Bgvideo from "../../../public/video/bgvideo.mp4";

const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="min-w-full min-h-full w-auto h-auto object-cover opacity-60"
            style={{
              aspectRatio: '16/9',
              transform: 'scale(1.2)', // Adjust this value as needed
            }}
          >
            <source src={Bgvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Background;