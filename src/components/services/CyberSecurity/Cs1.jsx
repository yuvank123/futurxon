import React from "react";
import CyberSecurityBg from '../../../images/Csimg.jpg';

const CyberSecurity = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-16 relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${CyberSecurityBg})`, filter: 'blur(4px)', opacity: 0.4 }} />
      
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left py-12 md:py-0 space-y-6 md:space-y-8 md:pr-5 lg:pr-10 z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-300 bg-clip-text text-transparent">
          Cybersecurity Excellence
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-300 to-pink-200 bg-clip-text text-transparent">
            Secure Your Digital Future
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300/80 max-w-2xl leading-relaxed">
          Stay ahead of cyber threats with cutting-edge security solutions, AI-driven threat intelligence, and robust defense strategies.
        </p>
        
        <button className="group px-6 py-3 md:px-8 md:py-4 text-lg font-semibold bg-gradient-to-r from-purple-600/90 to-blue-500/90 hover:from-green-500/80 hover:to-cyan-400/80 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-95">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Get Protected Now →
          </span>
        </button>
      </div>
      
      {/* Cybersecurity 3D Animation Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative min-h-[500px] md:min-h-[700px] z-10">
        {/* Glowing Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-400/10 to-cyan-500/10 blur-3xl animate-pulse-slow" />
        
        {/* Main Security Device */}
        <div className="cybersecurity-mockup relative z-10 w-[240px] h-[480px] md:w-[260px] md:h-[520px] transform transition-[transform] duration-500 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-blue-400/20 to-cyan-500/20 rounded-[35px] shadow-2xl shadow-green-900/30 backdrop-blur-lg border border-white/10 overflow-hidden">
            <div className="absolute inset-0 rounded-[35px] border-[0.5px] border-white/5" />
            <div className="absolute inset-[6px] md:inset-[10px] rounded-[28px] md:rounded-[34px] overflow-hidden border border-white/5 bg-black/50">
              <img 
                src={CyberSecurityBg} 
                alt="Cybersecurity Interface" 
                className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-15 h-2 bg-gray-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(8deg); }
          50% { transform: translateY(-10px) rotate(6deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .cybersecurity-mockup {
          transform: perspective(1200px) rotateY(-15deg) rotateX(5deg) translateZ(50px);
          transform-style: preserve-3d;
        }
        .cybersecurity-mockup:hover {
          transform: perspective(1200px) rotateY(-10deg) rotateX(3deg) translateZ(60px);
        }
      `}</style>
    </div>
  );
};

export default CyberSecurity;
