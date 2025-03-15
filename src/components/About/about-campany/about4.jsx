import React from 'react';
import Sample from '../../../images/sample.png';

const About4 = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col lg:flex-row gap-8 w-full max-w-7xl items-center'>
        {/* Text Content */}
        <div className='relative lg:w-1/2 w-full group transition-transform duration-500 hover:-translate-y-2'>
          <div className='relative p-8 bg-gray-800 rounded-3xl border border-gray-700/50 shadow-2xl space-y-6'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-transparent'>
              Heart-to-Heart
              <span className='block mt-2'>With the Leader</span>
            </h1>
            
            <p className='text-lg text-gray-300 leading-relaxed'>
              We partner with clients worldwide to craft exceptional digital products loved by millions. 
              Our passion for diversity fuels every innovation.
            </p>

            <div className='space-y-1 border-l-4 border-amber-400 pl-4'>
              <h3 className='text-xl font-semibold text-white'>Chandresh Patel</h3>
              <p className='text-gray-400'>M. D. & Agile Coach | India</p>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className='lg:w-1/2 w-full relative group'>
          <div className='relative rounded-3xl overflow-hidden shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-600/20 before:to-amber-500/20 before:z-10'>
            <img 
              src={Sample} 
              alt='Leadership Team' 
              className='w-full h-[560px] object-cover transform transition-transform duration-700 group-hover:scale-105'
            />
          </div>
        </div>
      </div>

      {/* Button */}
      <div className='mt-12 group'>
        <a 
          href='/leadership' 
          className='inline-block relative px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg transition-all duration-300 
          hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02]
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-700 before:to-blue-600 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100'
        >
          <span className='relative z-10'>BOOK A FREE CONSULTATION</span>
          <div className='absolute inset-0 bg-noise opacity-10 rounded-xl' />
        </a>
      </div>
    </div>
  );
};

export default About4;