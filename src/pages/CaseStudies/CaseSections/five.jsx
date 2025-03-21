import React from 'react'
import Navbar from '../../../components/navbar'
import F5 from '../../../components/portfolio/case_studies/case_sections/First/f5'
import About2 from '../../../components/About/about-campany/about2'
import Footer from '../../../components/footer';

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
          <F5/>
        </div>
        <div className='relative border-0 border-amber-100'>
          <About2/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default aboutus