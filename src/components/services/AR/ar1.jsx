import React, { useEffect, useState } from "react";
import ArvrBg from "../../../images/arvrbg.svg";

const FullScreenCyberServices = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const newRotation = window.scrollY / 3;
            setRotate(newRotation);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center text-white relative overflow-hidden">
            {/* Animated Glitch Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden flex justify-center items-center">
                <div
                //   style={{
                //     transform: `rotate(${rotate}deg)`,
                //     transition: "transform 0.1s ease-out"
                //   }}
                >
                    <img
                        src={ArvrBg}
                        alt="Cyber Security Background"
                        className="w-full h-full md:w-[40vw] md:h-[80vh] object-contain animate-bounce opacity-40"
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            transform: 'scale(1)',
                            filter: "hue-rotate(90deg) contrast(1.2)"
                        }}
                    />
                </div>
            </div>

            {/* Neon Grid Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDI1NSAxOTAgMjU1KSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')]" />

            {/* Floating Holographic Particles */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: `radial-gradient(${Math.random() > 0.5 ? "#ec4899" : "#6366f1"
                                }, transparent)`,
                            animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                            filter: `blur(${Math.random() * 2}px)`
                        }}
                    ></div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative text-center px-4 space-y-8 z-10">
                <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 animate-text-shine">
                    <span className="inline-block uppercase tracking-[0.2em]">
                        Redefine Reality
                    </span>
                    <br />
                    <span className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-300 via-blue-300 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                        AR/VR & 3D Modelling
                    </span>
                </h1>

                <p className="text-xl md:text-[17px] font-light max-w-4xl mx-auto leading-relaxed backdrop-blur-xl p-6 rounded-2xl border border-pink-400/20 bg-gradient-to-br from-purple-900/40 to-blue-900/40">
                    Experience immersive virtual worlds and precision 3D design that transform your creative visions into reality.
                    Our state-of-the-art AR/VR platforms combine cutting-edge rendering technology with intuitive design tools,
                    empowering you to build, explore, and collaborate in a truly interactive digital space.
                </p>

                <button className="group relative inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-5 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-400/30">
                    <span className="relative z-10 flex items-center gap-3">
                        <VRIcon className="w-6 h-6 text-pink-200 animate-pulse" />
                        <span className="text-shadow">Launch Experience</span>
                    </span>
                    <div className="absolute inset-0 rounded-full border-2 border-pink-400/30 animate-border-glow" />
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 backdrop-blur-lg group-hover:backdrop-blur-xl transition-all duration-300" />
                </button>
            </div>

            {/* Scrolling Indicator */}
            <div className="absolute bottom-8 animate-cyber-float">
                <div className="w-10 h-16 rounded-3xl border-2 border-pink-400/50 flex items-start justify-center backdrop-blur-sm">
                    <div className="w-1.5 h-4 bg-pink-300 rounded-full mt-3 animate-scroll-pulse" />
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        // @keyframes glitch {
        //   0% { clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%); }
        //   20% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
        //   30% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }
        //   40% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); }
        //   50% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
        //   55% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
        //   60% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); }
        //   100% { clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); }
        // }

        @keyframes text-shine {
          to { background-position: 200% center; }
        }

        @keyframes border-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(236,72,153,0.3); }
          50% { box-shadow: 0 0 20px rgba(236,72,153,0.6); }
        }

        @keyframes cyber-float {
          0%, 100% { transform: translateY(0) rotateX(0deg); }
          50% { transform: translateY(-10px) rotateX(15deg); }
        }

        @keyframes scroll-pulse {
          0% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(8px); opacity: 0.4; }
          100% { transform: translateY(0); opacity: 0.8; }
        }

        .animate-text-shine {
          background-size: 200% auto;
          animation: text-shine 3s linear infinite;
        }

        .animate-border-glow {
          animation: border-glow 1.5s ease-in-out infinite;
        }

        .animate-cyber-float {
          animation: cyber-float 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-scroll-pulse {
          animation: scroll-pulse 2s ease-in-out infinite;
        }

        .animate-glitch {
          animation: glitch 2s infinite linear alternate-reverse;
        }

        .text-shadow {
          text-shadow: 0 2px 10px rgba(236,72,153,0.4);
        }
      `}</style>
        </div>
    );
};

const VRIcon = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="3" y="7" width="18" height="10" rx="2" ry="2" />
        <path d="M3 12h18" />
        <circle cx="8" cy="12" r="1.5" />
        <circle cx="16" cy="12" r="1.5" />
    </svg>
);

export default FullScreenCyberServices;
