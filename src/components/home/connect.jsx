import { motion } from 'framer-motion';
import React from 'react';
import Sideimg from '../../../public/images/side-img-1.jpg';
import Target from '../../../public/images/target.png';

const Connect = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
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
          className='text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'
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
      
      {/* Main Content Container */}
      <div className='flex flex-col lg:flex-row justify-between items-center gap-4 md:gap-8 mt-8 md:mt-12'>
        {/* Image Section */}
        <motion.div 
          className='w-full lg:w-1/2 rounded-xl overflow-hidden h-[40vh] md:h-[70vh] lg:h-auto shadow-lg shadow-gray-800/50 hover:scale-[1.02] transition-all duration-300 mx-auto'
          initial="hidden"
          whileInView="visible"
          variants={slideLeft}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <img 
            src={Sideimg} 
            alt='Side' 
            className='w-full lg:h-[110vh] h-full object-cover object-center'
          />
        </motion.div>

        {/* Process Section */}
        <motion.div 
          className='w-full lg:w-1/2 h-auto rounded-xl bg-white/10 backdrop-blur-sm p-4 md:p-6 lg:p-8 shadow-lg shadow-gray-800/50 hover:scale-[1.02] transition-all duration-300'
          initial="hidden"
          whileInView="visible"
          variants={slideRight}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Process Title */}
          <div className='mb-6 md:mb-8 text-center lg:text-left'>
            <motion.h2 
              className='text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              OUR 6D PROCESS
            </motion.h2>
            <motion.div 
              className='mt-2 h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto lg:mx-0'
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>

          {/* Process Grid */}
          <motion.div 
            className='grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 overflow-y-auto'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Discover */}
            <motion.div 
              className='p-3 md:p-4 border-b md:border-b-0 md:border-r border-white/20'
              variants={scaleUp}
              transition={{ duration: 0.4 }}
            >
              <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2'>1. Discover</h2>
              <p className='text-sm md:text-base text-white/80 leading-relaxed'>
              Conduct in-depth market research, analyze competitors, and identify high-impact digital opportunities for business growth.
              </p>
            </motion.div>

            {/* Define */}
            <motion.div 
              className='p-3 md:p-4'
              variants={scaleUp}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2'>2. Define</h2>
              <p className='text-sm md:text-base text-white/80 leading-relaxed'>
              Develop a data-driven SEO and IT strategy, optimizing for high-ranking keywords, user intent, and technical scalability.
              </p>
            </motion.div>

            {/* Design */}
            <motion.div 
              className='p-3 md:p-4 border-t md:border-t-0 md:border-r border-white/20'
              variants={scaleUp}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2'>3. Design</h2>
              <p className='text-sm md:text-base text-white/80 leading-relaxed'>
              Create engaging, SEO-optimized websites and AI-driven solutions that enhance user experience and drive conversions.
              </p>
            </motion.div>

            {/* Develop */}
            <motion.div 
              className='p-3 md:p-4'
              variants={scaleUp}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2'>4. Develop</h2>
              <p className='text-sm md:text-base text-white/80 leading-relaxed'>
              Implement high-performance, scalable, and AI-powered digital solutions optimized for speed, security, and search engine rankings.
              </p>
            </motion.div>

            {/* Deploy */}
            <motion.div 
              className='p-3 md:p-4 border-t md:border-t-0 md:border-r border-white/20'
              variants={scaleUp}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2'>5. Deploy</h2>
              <p className='text-sm md:text-base text-white/80 leading-relaxed'>
              Launch, test, and refine solutions using analytics, ensuring maximum visibility, performance, and organic reach.
              </p>
            </motion.div>

            {/* Deliver */}
            <motion.div 
              className='p-3 md:p-4'
              variants={scaleUp}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-white mb-2'>6. Deliver</h2>
              <p className='text-sm md:text-base text-white/80 leading-relaxed'>
              Continuously optimize, scale, and leverage AI-powered automation to drive long-term business growth and industry leadership.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Connect;