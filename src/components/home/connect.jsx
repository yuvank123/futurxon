import { motion } from 'framer-motion';
import React from 'react';
import Sideimg from '../../../public/images/chart.png';
import Target from '../../../public/images/target.png';

const Connect = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className='h-full flex flex-col gap-6 p-4 md:p-8 relative'>
      {/* Target Icon */}
      <motion.div 
        className='absolute z-[-1] left-[50%] -translate-x-1/2 md:left-[25%] top-10 md:top-24'
        initial={{ rotate: -180, scale: 0 }}
        whileInView={{ rotate: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <img 
          src={Target} 
          alt='target' 
          className='h-30 md:h-34 opacity-20 md:opacity-60 animate-pulse mx-auto'
        />
      </motion.div>

      {/* Header Section */}
      <motion.div 
        className='flex flex-col items-center gap-3 md:gap-6 mt-16 md:mt-30 text-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.h1 
          className='text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-400'
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          Unite, Innovate, Evolve
        </motion.h1>
        <motion.h3 
          className='text-base md:text-lg lg:text-xl text-white max-w-3xl opacity-80 px-2'
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We connect businesses to the digital future, collaborate to develop AI-driven, customer-focused solutions, and transform ideas into innovation.
        </motion.h3>
      </motion.div>
      
      {/* Image Section */}
      <motion.div 
        className='h-[95vh] w-full flex justify-center items-center'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img src={Sideimg} alt='Side Representation' className='w-[90%] h-[90vh] rounded-4xl shadow-lg object-cover hover:scale-105 transition-all' />
      </motion.div>
    </div>
  );
};

export default Connect;
