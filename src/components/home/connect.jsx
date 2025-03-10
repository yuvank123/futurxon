import React from 'react'
import Sideimg from '../../../src/images/side-img-1.jpg'
import ClutchSvg from '../../../src/images/clutch.svg'
import Isosvg from '../../../src/images/iso-2.svg'
import Target from '../../../src/images/target.png'

const connect = () => {
  return (
    <div className='h-full flex flex-col gap-8 p-8 relative'>
        <div className='absolute z-[-1] left-[15%] top-22'>
            <img src={Target} alt="" className='h-[150px] opacity-70 animate-pulse' />
        </div>
        <div className='flex flex-col items-center gap-6 mt-30'>
             <h1 className='text-5xl font-bold text-white text-center'>
                Connect, Collaborate, and Create
             </h1>
             <h3 className='text-xl text-white text-center max-w-3xl opacity-80'>
                We represent the connected world, collaborate to build customer-centric AI-driven solutions, and create innovative experiences.
             </h3>
        </div>
        
        <div className='flex justify-between items-stretch gap-8 mt-16'>
            <div className='w-1/2 rounded-xl overflow-hidden h-[650px] shadow-lg shadow-gray-800/50 hover:scale-105 hover:shadow-gray-800/80 hover:shadow-2xl transition-all duration-300'>
                <img 
                    src={Sideimg} 
                    alt="Side Image" 
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='w-1/2 rounded-xl bg-white/10 backdrop-blur-sm p-8 shadow-lg shadow-gray-800/50 hover:scale-105 hover:shadow-gray-800/80 hover:shadow-2xl transition-all duration-300'>
                <div className='grid gap-12 grid-cols-2'>
                     <div className='border-r border-white/20 pr-4'>
                        <h2 className='text-2xl font-bold text-white mb-3'>Our Vision</h2>
                        <p className='text-white/80'>Leading the digital transformation through innovative solutions and exceptional service.</p>
                     </div>
                     <div className='pl-4'>
                        <h2 className='text-2xl font-bold text-white mb-3'>Our Mission</h2>
                        <p className='text-white/80'>Empowering businesses with cutting-edge technology solutions for sustainable growth.</p>
                     </div>
                     <div className='border-r border-white/20 pr-4'>
                        <h2 className='text-2xl font-bold text-white mb-3'>Our Values</h2>
                        <p className='text-white/80'>Innovation, integrity, and excellence in everything we do.</p>
                     </div>
                     <div className='pl-4'>
                        <h2 className='text-2xl font-bold text-white mb-3'>Our Goal</h2>
                        <p className='text-white/80'>To be the global leader in digital transformation and technology solutions.</p>
                     </div>
                     <div className='border-r border-white/20 pr-4'>
                        <h2 className='text-2xl font-bold text-white mb-3'>Our Vision</h2>
                        <p className='text-white/80'>Leading the digital transformation through innovative solutions and exceptional service.</p>
                     </div>
                     <div className='pl-4'>
                        <h2 className='text-2xl font-bold text-white mb-3'>Our Mission</h2>
                        <p className='text-white/80'>Empowering businesses with cutting-edge technology solutions for sustainable growth.</p>
                     </div>
                      <div className='border-r border-white/20 pr-4'>
                        <img src={ClutchSvg} alt="Clutch Logo" className='' />
                      </div>
                      <div className='pl-4'>
                        <img src={Isosvg} alt="iso Logo" className='' />
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default connect