import React from 'react'
import One from '../../../src/images/company-1.png'
import Two from '../../../src/images/company-2.png'
import Three from '../../../src/images/company-3.png'     
import Four from '../../../src/images/company-4.png'
import Five from '../../../src/images/company-5.png'
import Six from '../../../src/images/company-6.png'
import Seven from '../../../src/images/company-7.png'
import Eight from '../../../src/images/company-8.png'
import Nine from '../../../src/images/company-9.png'
import Ten from '../../../src/images/company-10.png'
import Twelve from '../../../src/images/company-12.png'
import Thirteen from '../../../src/images/company-13.png'

const wehelped = () => {
  return (
    <div className='h-full flex justify-between items-center flex-col border-b-0 border-white'>
        <div className='relative flex justify-center items-center top-15'>
            <h1 className='text-5xl font-bold scale-y-100 text-purple-400'>
              We Helped <span className='text-5xl font-bold text-transparent bg-clip-text text-stroke-blue'>850+ Companies</span> Enhance Their IT Products
            </h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 justify-center h-[33vh] w-[90vw] md:w-[80vw]'>
             <div className='p-3'>
                <img src={One} alt="image" />
             </div>
             <div className='p-3'>
                <img src={Two} alt="image" />
             </div>
             <div className='p-3'>
                <img src={Three} alt="image" />
             </div>
             <div className='p-3'>
                <img src={Four} alt="image" />
             </div>
             <div className='p-3'>
                <img src={Five} alt="image" />
             </div>
             <div className='p-3'>
                <img src={Six} alt="image" />
             </div>
             <div className='p-3'>
                <img src={Seven} alt="image" />
             </div>
             <div className='p-3'>
                <img src={Eight} alt="image" />
             </div>
             <div className='p-3'>
                <img src={Nine} alt="image" />
             </div>
             <div className='p-3'>
                <img src={Ten} alt="image" />
             </div>
             <div className='p-3'>
                <img src={Twelve} alt="image" />
             </div>
             <div className='p-3'>
                <img src={Thirteen} alt="image" />
             </div>
        </div>
    </div>
  )
}

export default wehelped