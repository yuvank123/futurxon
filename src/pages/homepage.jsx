import React, { Suspense, lazy } from 'react';
import Background from '../components/home/background';
import Navbar from '../components/navbar';
import Titlepage from '../components/home/titlepage';
import Aboutvideo from '../video/aboutvideo.mp4';
import Wehelped from '../components/home/wehelped';
import Connect from '../components/home/connect';
import How from '../components/home/how';
import Accerate from '../components/home/accerate';
import Mapping from '../components/home/mapping';
import Offering from '../components/home/offering';
import Fortune from '../components/home/fortune';
import Testinomial from '../components/home/testinomial';
import Form from '../components/home/form';
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
      <div className='h-[184vh] relative z-20'>
        <Titlepage />
        <div className='relative h-[91vh] flex justify-center top-20 overflow-auto backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="h-[90vh] w-[90vw] md:w-[80vw] object-cover rounded-4xl drop-shadow-xl border-5 border-transparent bg-clip-border bg-gradient-to-r from-white-400 via-purple-500 to-white-500"
          >
            <source src={Aboutvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* <div className='h-[60vh] relative z-20 bg-gradient-to-r from-blue-700/20 via-purple-700/20 to-blue-700/20'>    
        <Wehelped />
      </div> */}
      <div className='h-auto relative z-20 border-0 border-blue-200'>
        <Connect />
      </div>
      <div className='h-[130vh] relative z-20  bg-gray-900'> 
        <How />
      </div>
      <div className='h-auto border-0 border-amber-50'>
        <Accerate />
      </div>
      <div className='h-[100vh] border-0 border-amber-50'>
         <Mapping/>
      </div>
      <div className='h-[80vh] border-0 border-white '>
        <Offering/>
      </div>
      {/* <div className='h-auto border-0 border-white'>
        <Fortune/>
      </div> */}
      <div className='h-auto border-0 border-white'>
        <Testinomial/>
      </div>
      <div className='h-auto border-0 border-white'>
         <Form/>
      </div>
      <div className='h-auto border-0 border-amber-50'>
        <Footer/>
      </div>
    </div>
  )
}

export default homepage;