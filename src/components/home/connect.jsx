import React from 'react';
import Sideimg from '../../../src/images/side-img-1.jpg';
import Target from '../../../src/images/target.png';

const Connect = () => {
  return (
    <div className='h-full flex flex-col gap-8 p-6 md:p-8 relative'>
      <div className='absolute z-[-1] left-[10%] md:left-[15%] top-16 md:top-22'>
        <img src={Target} alt='' className='h-[100px] md:h-[150px] opacity-70 animate-pulse' />
      </div>
      <div className='flex flex-col items-center gap-4 md:gap-6 mt-20 md:mt-30 text-center'>
        <h1 className='text-3xl md:text-5xl font-bold text-white'>
          Connect, Collaborate, and Create
        </h1>
        <h3 className='text-lg md:text-xl text-white max-w-3xl opacity-80'>
          We represent the connected world, collaborate to build customer-centric AI-driven solutions, and create innovative experiences.
        </h3>
      </div>
      
      <div className='flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-6 md:gap-8 mt-12 md:mt-16'>
        <div className='w-full lg:w-1/2 rounded-xl overflow-hidden h-[50vh] md:h-[70vh] lg:h-[80vh] shadow-lg shadow-gray-800/50 hover:scale-105 hover:shadow-gray-800/80 hover:shadow-2xl transition-all duration-300'>
          <img 
            src={Sideimg} 
            alt='Side Image' 
            className='w-full h-full object-cover'
          />
        </div>
        <div className='w-full lg:w-1/2 h-auto lg:h-[80vh] rounded-xl bg-white/10 backdrop-blur-sm p-6 md:p-8 shadow-lg shadow-gray-800/50 hover:scale-105 hover:shadow-gray-800/80 hover:shadow-2xl transition-all duration-300'>
          <div className='grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2'>
            <div className='border-r border-white/20 pr-4'>
              <h2 className='text-xl md:text-2xl font-bold text-white mb-2 md:mb-3'>Our Vision</h2>
              <p className='text-white/80'>Leading the digital transformation through innovative solutions and exceptional service.</p>
            </div>
            <div className='pl-4'>
              <h2 className='text-xl md:text-2xl font-bold text-white mb-2 md:mb-3'>Our Mission</h2>
              <p className='text-white/80'>Empowering businesses with cutting-edge technology solutions for sustainable growth.</p>
            </div>
            <div className='border-r border-white/20 pr-4'>
              <h2 className='text-xl md:text-2xl font-bold text-white mb-2 md:mb-3'>Our Values</h2>
              <p className='text-white/80'>Innovation, integrity, and excellence in everything we do.</p>
            </div>
            <div className='pl-4'>
              <h2 className='text-xl md:text-2xl font-bold text-white mb-2 md:mb-3'>Our Goal</h2>
              <p className='text-white/80'>To be the global leader in digital transformation and technology solutions.</p>
            </div>
            <div className='border-r border-white/20 pr-4'>
              <h2 className='text-xl md:text-2xl font-bold text-white mb-2 md:mb-3'>Our Vision</h2>
              <p className='text-white/80'>Leading the digital transformation through innovative solutions and exceptional service.</p>
            </div>
            <div className='pl-4'>
              <h2 className='text-xl md:text-2xl font-bold text-white mb-2 md:mb-3'>Our Mission</h2>
              <p className='text-white/80'>Empowering businesses with cutting-edge technology solutions for sustainable growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;