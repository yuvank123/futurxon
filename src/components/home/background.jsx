import React from "react";
import { motion } from "framer-motion";
import IMM from "../../../public/images/jupiter.png";
import IMM2 from "../../../public/images/stary.png";
import IMM3 from "../../../public/images/plu.png";
import IMM4 from "../../../public/images/whiteplu.png";
import { animate } from "framer-motion";

const Background = () => {
  // Custom images with animation
  const images = [
    {
      src: IMM2,
      left: "1%",
      top: "6%",
      width: "250px", // increased size
      rotate: "10deg",
      delay: "0s",
    },
    {
      src: IMM,
      left: "80%",
      top: "1%",
      width: "300px", // increased size
      rotate: "23deg",
      delay: "1s",
    },
    {
      src: IMM3,
      left: "25%",
      top: "20%",
      width: "448px",
      rotate: "5deg",
      delay: "1.5s",
    },
    {
      src: IMM,
      left: "75%",
      top: "40%",
      width: "500px",
      rotate: "15deg",
      delay: "0.5s",
    },
  ];

  const CustomImages = () => (
  <motion.div className="absolute inset-0 pointer-events-none z-10">
    {images.map((img, index) => (
      <motion.img
        key={index}
        src={img.src}
        alt={`custom-img-${index}`}
        animate={floatTransition}
        className="absolute"
        style={{
          left: img.left,
          top: img.top,
          width: img.width,
          height: "auto",
          animationDelay: img.delay,
          transform: `rotate(${img.rotate})`,
          opacity: 0.7,
          filter: "brightness(0.8) contrast(1.2) blur(2px)",
        }}
      />
    ))}
  </motion.div>
);

  const floatTransition = {
    y: [0, -5, 0, 2, 0],
    x: [0, 2, 0, -4, 0],
    rotate: [0, 2, 0, -2, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Generate animated particles
  const Particles = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(400)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-purple-400/20 rounded-full animate-float"
          style={{
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            filter: `blur(${Math.random() * 3 + 1}px)`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#07041c] z-0">
      {/* Base Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030006] via-[#6955cc] to-[#5642db] opacity-40" />
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#1912f5] via-[#32aafa] to-[#826fff] opacity-40" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#781bd5] via-[#32aafa] to-[#826fff] opacity-40" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0c05e4] via-[#8dd2ff] to-[#8173dc] opacity-40" /> */}

      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#13045f] via-[#7532e1] to-[#8173dc] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#010101] via-[#002aff] to-[#8173dc] opacity-40" /> */}
      
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#54045f] via-[#9e09b8] to-[#8173dc] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#010101] via-[#683c93] to-[#8173dc] opacity-40" /> */}

      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#a768ff] via-[#6542ff] to-[#8173dc] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#9c3aff] via-[#502878] to-[#8173dc] opacity-40" /> */}

      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#000000] to-[#000000] opacity-40" /> */}
      {/*via-[#413a72] to-[#f1efff] */}
      {/* <CustomImages /> */}
      {/* Central Gradient Circle */}
       <div className="absolute inset-0 flex justify-center">
          <div className="absolute top-140 w-[1100px] h-[1100px] -z-10 bg-gradient-to-r to-pink-500/30 rounded-full"></div>
       </div>
       
      {/* Animated Gradient Blobs */}
      <div className="absolute -top-1/3 -left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/40 to-pink-500/30 rounded-full blur-[100px] animate-rotate-3d" />
      <div className="absolute -bottom-1/3 -right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-blue-400/20 to-purple-600/40 rounded-full blur-[100px] animate-float-3d" />

      {/* Geometric Grid Pattern */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiLz48ZyBzdHJva2U9InJnYmEoMTg0LDEyMywyNTUsMC4xNSkiIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTAgNDBMMjAgMjBMNDAgNDBMNjAgMjBMODAgNDBMMTAwIDIwTTAgMjBMMjAgNDBMNDAgMjBMNjAgNDBMODAgMjBMMTAwIDQwIi8+PC9nPjwvc3ZnPg==')]"
          style={{animation: 'hexagon-pan 40s linear infinite'}}
        />
      </div>

      {/* Binary Code Animation */}
      <div className="absolute inset-0 opacity-45 mix-blend-screen">
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjUlIiB5PSIzNSUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTRweCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSI+MDEwMDEwIDEwMTAxMCAxMTExMDAgMDAwMTExPC90ZXh0Pjwvc3ZnPg==')]"
          style={{animation: 'binary-stream 20s linear infinite'}}
        />
      </div>

      {/* Floating Particles */}
      <Particles />

      {/* Animated Lines Network */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-purple-400/30 to-pink-300/30"
            style={{
              width: `${Math.random() * 30 + 20}%`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `laser-sweep ${Math.random() * 8 + 4}s linear infinite`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Dynamic Noise Texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC4wMyIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIHRyYW5zbGF0ZSgtMjAwLCAwKSI+MDExMCAxMDAxIDAxMTAgMTAxMDwvdGV4dD48L3N2Zz4=')]"
        style={{animation: 'noise 2s infinite steps(10)'}} 
      />
    </div>
  );
};

// Add these keyframes to your global CSS
`
@keyframes rotate-3d {
  100% {
    transform: rotate3d(1,1,1,360deg) scale(1.2);
  }
}

@keyframes float-3d {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20%) scale(1.1); }
}

@keyframes hexagon-pan {
  100% { background-position: 100% 100%; }
}

@keyframes binary-stream {
  100% { background-position-y: 100vh; }
}

@keyframes laser-sweep {
  0% { opacity: 0; transform: translateX(-100%); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateX(100%); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes noise {
  0% { background-position: 0 0; }
  100% { background-position: 100% 100%; }
}
`

export default Background;