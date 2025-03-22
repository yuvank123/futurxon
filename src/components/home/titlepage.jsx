import React from 'react'
import "../../../src/style/titlepage.css"

const titlepage = () => {
  return (
    <div className='relative top-0 lg:top-20 left-0 w-full h-[80vh] z-20 flex flex-col justify-center items-start p-4 md:pl-20 bg-opacity-50 text-white gap-2 '>
      <div className='mb-4'>
        <h1 className='text-2xl md:text-4xl font-[1px]'>AI-Powered Innovation</h1>
      </div>
      <div className='w-full md:w-[70vw]'>
        <h1 className='text-4xl md:text-7xl font-bold mb-4 scale-y-110'>Agile & Scalable IT Services for <span className='text-blue-500'>Business </span>Growth</h1>
      </div>
      <div className='mb-4'>
        <h1 className='text-xl md:text-3xl font-[1px]'>Your Trusted Partner for Innovative Technology Solutions</h1>
      </div>
      <button className='px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded hover:bg-blue-700 animate-bounce'>
        BUILD YOUR OWN TEAM
      </button>
    </div>
  )
}

export default titlepage