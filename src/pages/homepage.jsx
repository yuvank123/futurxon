import React, { Suspense, lazy } from 'react';
import Background from '../components/home/background';
import Navbar from '../components/navbar';
import Titlepage from '../components/home/titlepage';
import Aboutvideo from '../../public/video/aboutvideo.mp4';
import Connect from '../components/home/connect';
import How from '../components/home/how';
import Accerate from '../components/home/accerate';
import Mapping from '../components/home/mapping';
import Offering from '../components/home/offering';
import Testinomial from '../components/home/testinomial';
import Stack from '../components/home/stack';
import Footer from '../components/footer';

const homepage = () => {
  return (
    <div className='h-auto relative'>
      <div>
        <Background />
      </div>
      <div className='relative z-30'>
        <Navbar />
      </div>
      <div className='relative z-20 min-h-screen'>
        <Titlepage />
        <div className='relative w-full lg:h-auto flex justify-center items-center pt-[8%] pb-[12%] md:pt-[0%] md:pb-[0%] backdrop-blur-lg md:mt-20'>
          <div className='w-full md:w-[90%] xl:w-[80%] aspect-video relative overflow-hidden rounded-lg md:rounded-3xl shadow-2xl'>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-105 md:scale-100"
            >
              <source src={Aboutvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className='h-auto border-0 border-amber-50'>
        <Accerate />
      </div>
      <div className="h-[100vh] w-full grid place-items-center">
        <div className="h-[100vh] w-[90vw] relative z-20 backdrop-blur-lg bg-white/5 rounded-4xl">
          <How />
        </div>
      </div>
      <div className='h-auto relative z-20 border-0 border-blue-200'>
        <Connect />
      </div>
      <div className='h-auto border-0 border-amber-50'>
        <Mapping />
      </div>
      <div className='h-auto border-0 border-white '>
        <Offering />
      </div>
      <div className='h-auto border-0 border-white '>
        <Stack />
      </div>
      <div className='h-auto border-0 border-white'>
        <Testinomial />
      </div>
      <div className='h-auto border-0 border-amber-50'>
        <Footer />
      </div>
    </div>
  )
}

export default homepage;