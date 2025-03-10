import React from 'react';
import Bgvideo from '../../../src/video/bgvideo.mp4';

const how = () => {
  return (
    <div className='h-full w-full flex items-center justify-center perspective-[600px] px-20 relative'>
      {/* Media SVG Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <svg className="absolute right-0 top-0 h-full w-1/2 opacity-5" viewBox="0 0 100 100">
          <g className="animate-float">
            {/* Play Button */}
            <path d="M50,10 L90,50 L50,90 L10,50 Z" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="0.5"
                  className="text-purple-400" />
            
            {/* Circular Media Icons */}
            <circle cx="80" cy="20" r="8" 
                    className="text-blue-400 animate-pulse" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0.5" />
            <circle cx="20" cy="70" r="12" 
                    className="text-purple-400 animate-pulse delay-700" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="0.5" />
            
            {/* Connection Lines */}
            <path d="M20,20 Q50,50 80,80" 
                  stroke="currentColor" 
                  strokeWidth="0.2" 
                  className="text-blue-400/50"
                  strokeDasharray="4 2" />
          </g>
        </svg>
      </div>

      {/* Background SVG patterns */}
      <svg className="absolute inset-0 -z-10 opacity-10" width="100%" height="100%">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <circle cx="50%" cy="50%" r="200" fill="url(#grid)" 
                className="animate-pulse opacity-20"/>
      </svg>

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className='relative w-[500px] h-[400px] transform-gpu translate-z-12 rotate-y-20 
                        hover:translate-z-24 transition-all duration-500 rounded-4xl ml-[100px]
                        shadow-[0_0_20px_rgba(0,0,0,0.7)] 
                        after:content-[""] after:absolute after:inset-0 
                        after:shadow-[-20px_-20px_50px_rgba(255,255,255,0.1)] 
                        after:rounded-4xl after:-z-10'>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover rounded-4xl contrast-125"
        >
          <source src={Bgvideo} type="video/mp4" />
        </video>
      </div>

      <div className='w-[500px] space-y-6 animate-fade-in-right pl-20'>
        <h2 className='text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 
                      bg-clip-text text-transparent drop-shadow-lg leading-tight'>
          Bacancy AI Agent: Smarter Coding, Faster Innovation
        </h2>
        <p className='text-white/80 text-lg leading-relaxed'>
          Try our AI Agent to complete your project or start from the scratch! Get automation, development, and everything in one place.
        </p>
        <div className='flex gap-4 mt-8'>
          <div className='h-1 w-20 bg-purple-400 rounded-full animate-pulse'></div>
          <div className='h-1 w-10 bg-blue-400 rounded-full animate-pulse delay-100'></div>
          <div className='h-1 w-5 bg-purple-400 rounded-full animate-pulse delay-200'></div>
        </div>
        
        {/* New Button */}
        <button className='mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 
                         rounded-lg text-white font-semibold tracking-wide
                         transform transition-all duration-300
                         hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25
                         active:scale-95 animate-fade-in
                         flex items-center gap-2 group'>
          START CODING SMARTER
          <svg 
            className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default how;