import { useState } from "react";
import C1 from "../../../../public/images/360.png";
import C2 from "../../../../public/images/ARD.svg";
import C3 from "../../../../public/images/Mahi.png";
import C4 from "../../../../public/images/SSOS.png";
import C5 from "../../../../public/images/montorx.png";
import C6 from "../../../../public/images/fmpg.png";
import C7 from "../../../../public/images/revol.jpg";

const logos = [C1, C2, C3, C4, C5, C6, C7];

const ImageCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      <h1 className="text-5xl md:text-8xl font-bold font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-300 to-red-400 mb-10 text-center">
        Our Clients
      </h1>

      {/* Carousel */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full overflow-hidden"
      >
        <div
          className={`flex animate-scroll whitespace-nowrap will-change-transform ${
            isPaused ? "pause" : ""
          }`}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[200px] h-[200px] mx-4 bg-white/5 rounded-xl backdrop-blur-md border border-white/10 p-4 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
