import React from 'react'
import Navbar from '../../components/navbar'
import Contact1 from '../../components/contact/Contact1'
import Contact2 from '../../components/contact/Contact2'
import Footer from '../../components/footer';

const Contactus = () => {
  return (
    <div className='relative min-h-screen overflow-hidden'>
        {/* Dark matter smudges */}
        <div className='absolute inset-0 opacity-30'>
          <div className='absolute -top-48 -left-64 w-[900px] h-[900px] bg-radial-gradient(from_at_30%_30%,#1e1b4b50_0%,transparent_70%) blur-[100px]' />
          <div className='absolute -bottom-64 -right-64 w-[800px] h-[800px] bg-radial-gradient(from_at_70%_70%,#3b076450_0%,transparent_70%) blur-[120px]' />
        </div>

        {/* Intense star particles */}
        <div className="absolute inset-0 opacity-70 animate-particles">
          {[...Array(300)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] rounded-full bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300 shadow-[0_0_15px_2px] shadow-purple-400/50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 4 + 2}s infinite`,
                transform: `scale(${Math.random() * 1.5})`,
                filter: `blur(${Math.random() * 2}px)`
              }}
            />
          ))}
        </div>
      {/* Content layer */}
      <div className='relative z-10 h-auto'>
        <div className='sticky top-0 z-30'>
          <Navbar />
        </div>
        <div className='relative'>
          <Contact1 />
        </div>
        <div className='relative'>
          <Contact2 />
        </div>
        <div className='relative'>
          <Footer />
        </div>
      </div>

      {/* Global animations */}
      <style jsx global>{`
            @keyframes galactic-pulse {
              0% { opacity: 0.3; transform: scale(1); }
              50% { opacity: 0.7; transform: scale(1.1); }
              100% { opacity: 0.3; transform: scale(1); }
            }
    
            @keyframes blackhole-spin {
              from { transform: translate(-50%, -50%) rotate(0deg); }
              to { transform: translate(-50%, -50%) rotate(360deg); }
            }
    
            @keyframes glow-surge {
              0% { box-shadow: 0 0 80px -30px rgba(139,92,246,0.3); }
              50% { box-shadow: 0 0 120px -15px rgba(192,132,252,0.6); }
              100% { box-shadow: 0 0 80px -30px rgba(139,92,246,0.3); }
            }
    
            @keyframes twinkle {
              0% { opacity: 0.2; transform: scale(1); }
              50% { opacity: 1; transform: scale(1.3); }
              100% { opacity: 0.2; transform: scale(1); }
            }
    
            .animate-galactic-pulse {
              animation: galactic-pulse 15s cubic-bezier(0.4,0,0.6,1) infinite;
            }
    
            .animate-blackhole-spin {
              animation: blackhole-spin 120s linear infinite;
            }
    
        
            .animate-glow-surge {
              animation: glow-surge 8s ease-in-out infinite;
            }
          `}</style>
    </div>
  )
}

export default Contactus;
