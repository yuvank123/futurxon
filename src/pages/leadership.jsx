import React from 'react';
import Navbar from '../../src/components/navbar';
import Lead from '../components/leadership/lead';
import Lead1 from '../components/leadership/lead1';
import Lead2 from '../components/leadership/lead2';
import Form from '../components/home/form';
import Footer from '../components/footer';

const leadership = () => {
  return (
    <div className='relative'>
      {/* Fixed background - Updated to match Lead component */}
      <div className='fixed inset-0 z-0'>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 opacity-90 animate-gradient-pulse"></div>
        <svg 
          className="absolute inset-0 w-full h-full opacity-20" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0 50 Q 50 0 100 50 L 100 100 L 0 100 Z" 
            fill="rgba(255,255,255,0.05)"
          />
          <path 
            d="M0 30 Q 50 0 100 30 L 100 100 L 0 100 Z" 
            fill="rgba(255,255,255,0.03)"
          />
        </svg>
        {/* Floating Particles */}
        <div className="absolute inset-0 z-1">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-300 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Scrollable content */}
      <div className='relative z-10 h-auto'>
        <div className='sticky top-0 z-30'>
          <Navbar/>
        </div>
        <div className='relative h-auto'>
          <Lead/>
        </div>
        <div className='relative h-auto'>
          <Lead1/>
        </div>
        <div className='relative h-auto'>
          <Lead2/>
        </div>
        <div>
           <Form/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes gradient-pulse {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 0.85; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(10px) translateX(-10px); }
          75% { transform: translateY(-10px) translateX(5px); }
        }
        .animate-gradient-pulse {
          animation: gradient-pulse 8s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default leadership;