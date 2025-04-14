import React, { useState } from "react";
import Bgvideo from "../../../public/video/bgvideo.mp4";
import Bgimg from "../../../public/images/bgimg.png";

const Background = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden">
      <div className="relative w-full h-full">

        {/* Gradient & Blur Overlays */}
        <div className='fixed inset-0 z-0 bg-gradient-to-br from-black via-[#0F0A2E] to-[#1A0933]'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-20 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-blue-400/30 rounded-full blur-3xl animate-pulse' />
          <div className='absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl' />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-10" />
        </div>
      </div>

        {/* Fallback Background Image */}
        <img
          src={Bgimg}
          alt="Fallback Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{ zIndex: 10 }}
        />

        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            aspectRatio: "16/9",
            transform: "scale(1.2)",
            zIndex: 20,
          }}
        >
          <source src={Bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Background;
