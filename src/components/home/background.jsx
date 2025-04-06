import React from "react";
import Bgvideo from "../../../public/video/bgvideo.mp4";

const Background = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className='fixed inset-0 z-0 bg-gradient-to-br from-black via-[#0F0A2E] to-[#1A0933]'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='absolute -top-20 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-blue-400/30 rounded-full blur-3xl animate-pulse' />
              <div className='absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl' />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-10" />
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="min-w-full min-h-full w-auto h-auto object-cover opacity-0 transition-opacity duration-1000 delay-100"
            onLoadedData={(e) => e.currentTarget.classList.remove('opacity-0')}
            style={{
              aspectRatio: '16/9',
              transform: 'scale(1.2)',
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
