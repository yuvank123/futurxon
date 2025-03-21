import React from 'react'
import Navbar from '../../components/navbar'
import About from '../../components/About/about-campany/about'
import About1 from '../../components/About/about-campany/about1'
import About2 from '../../components/About/about-campany/about2'
import About3 from '../../components/About/about-campany/about3'
import About4 from '../../components/About/about-campany/about4'
import About5 from '../../components/About/about-campany/about5'
// import Form from '../../components/home/form';
import Footer from '../../components/footer';

const aboutus = () => {
  return (
    <div className='relative'>
      {/* Fixed background */}
      <div className='fixed inset-0 z-0 bg-gradient-to-br from-black via-[#0F0A2E] to-[#1A0933]'>
        {/* Background elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-20 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-blue-400/30 rounded-full blur-3xl animate-pulse' />
          <div className='absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl' />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-10" />
        </div>
      </div>

      {/* Scrollable content */}
      <div className='relative z-10 h-auto'>
        <div className='sticky top-0 z-30'>
          <Navbar/>
        </div>
        <div className='relative border-0 border-amber-100'>
          <About/>
        </div>
        <div className='relative border-0 border-amber-100'>
          <About1/>
        </div>
        <div className='relative border-0 border-purple-500'>
          <About2/>
        </div>
        <div className='relative border-0 border-purple-100'>
          <About3/>
        </div>
        <div className='relative border-0 border-purple-100'>
          <About4/>
        </div>
        <div className='relative border-0 border-purple-100'>
          <About5/>
        </div>
        {/* <div>
           <Form/>
        </div> */}
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default aboutus