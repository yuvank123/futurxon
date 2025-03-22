import React from 'react';
import Sideimg from '../../../public/images/side-img-1.jpg';
import Target from '../../../public/images/target.png';

const Connect = () => {
  return (
    <div className='h-full flex flex-col gap-6 p-4 md:p-8 relative'>
      {/* Target Icon */}
      <div className='absolute z-[-1] left-[50%] -translate-x-1/2 md:left-[25%] top-10 md:top-24'>
        <img 
          src={Target} 
          alt='target' 
          className='h-30 md:h-34 opacity-20 md:opacity-60 animate-pulse mx-auto'
        />
      </div>

      {/* Header Section */}
      <div className='flex flex-col items-center gap-3 md:gap-6 mt-16 md:mt-30 text-center'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
          Unite, Innovate, Evolve
        </h1>
        <h3 className='text-base md:text-lg lg:text-xl text-white max-w-3xl opacity-80 px-2'>
        We connect businesses to the digital future, collaborate to develop AI-driven, customer-focused solutions, and transform ideas into innovation.
        </h3>
      </div>
      
      {/* Main Content Container */}
      <div className='flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-8 mt-8 md:mt-12'>
        {/* Image Section */}
        <div className='w-full lg:w-1/2 rounded-xl overflow-hidden h-[40vh] md:h-[70vh] lg:h-auto shadow-lg shadow-gray-800/50 hover:scale-[1.02] transition-all duration-300 mx-auto'>
          <img 
            src={Sideimg} 
            alt='Side' 
            className='w-full lg:h-[110vh] h-full object-cover object-center'
          />
        </div>

        {/* Process Section */}
        <div className='w-full lg:w-1/2 h-auto rounded-xl bg-white/10 backdrop-blur-sm p-4 md:p-6 lg:p-8 shadow-lg shadow-gray-800/50 hover:scale-[1.02] transition-all duration-300'>
          {/* Process Title */}
          <div className='mb-6 md:mb-8 text-center lg:text-left'>
            <h2 className='text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
              OUR 6D PROCESS
            </h2>
            <div className='mt-2 h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto lg:mx-0' />
          </div>

          {/* Process Grid */}
          <div className='grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 overflow-y-auto'>
            {/* Discover */}
            <div className='p-3 md:p-4 border-b md:border-b-0 md:border-r border-white/20'>
              <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2'>1. Discover</h2>
              <p className='text-sm md:text-base text-white/80 leading-relaxed'>
              Conduct in-depth market research, analyze competitors, and identify high-impact digital opportunities for business growth.
              </p>
            </div>

            {/* Define */}
            <div className='p-3 md:p-4'>
              <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2'>2. Define</h2>
              <p className='text-sm md:text-base text-white/80 leading-relaxed'>
              Develop a data-driven SEO and IT strategy, optimizing for high-ranking keywords, user intent, and technical scalability.
              </p>
            </div>

            {/* Design */}
            <div className='p-3 md:p-4 border-t md:border-t-0 md:border-r border-white/20'>
              <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2'>3. Design</h2>
              <p className='text-sm md:text-base text-white/80 leading-relaxed'>
              Create engaging, SEO-optimized websites and AI-driven solutions that enhance user experience and drive conversions.
              </p>
            </div>

            {/* Develop */}
            <div className='p-3 md:p-4'>
              <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2'>4. Develop</h2>
              <p className='text-sm md:text-base text-white/80 leading-relaxed'>
              Implement high-performance, scalable, and AI-powered digital solutions optimized for speed, security, and search engine rankings.
              </p>
            </div>

            {/* Deploy */}
            <div className='p-3 md:p-4 border-t md:border-t-0 md:border-r border-white/20'>
              <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2'>5. Deploy</h2>
              <p className='text-sm md:text-base text-white/80 leading-relaxed'>
              Launch, test, and refine solutions using analytics, ensuring maximum visibility, performance, and organic reach.
              </p>
            </div>

            {/* Deliver */}
            <div className='p-3 md:p-4'>
              <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2'>6. Deliver</h2>
              <p className='text-sm md:text-base text-white/80 leading-relaxed'>
              Continuously optimize, scale, and leverage AI-powered automation to drive long-term business growth and industry leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;