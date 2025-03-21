import React from 'react'
import Navbar from '../../components/navbar'
// import Client1 from '../../components/portfolio/our_client/client1'
import Client2 from '../../components/portfolio/our_client/client2'
import Client3 from '../../components/portfolio/our_client/client3'
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
        {/* <div className='relative border-0 border-amber-100'>
          <Client1/>
        </div> */}
        <div className='relative border-0 border-amber-100'>
          <Client2/>
        </div>
        <div className='relative border-0 border-amber-100'>
          <Client3/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default aboutus