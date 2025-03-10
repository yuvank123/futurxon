import React from 'react';
// Import your images
import company1 from '../../../src/images/company-1.png';
import singhokBank from '../../../src/images/company-2.png';
import wipo from '../../../src/images/company-3.png';
import swiggy from '../../../src/images/company-4.png';
import cornviva from '../../../src/images/company-5.png';
import zhiingszone from '../../../src/images/company-6.png';
import eurotech from '../../../src/images/company-7.png';
import medipharm from '../../../src/images/company-8.png';
import globalfin from '../../../src/images/company-9.png';
import autounion from '../../../src/images/company-10.png';
import Women from '../../../src/images/Women.png';

const Fortune = () => {
  const regions = [
    {
      title: "Americas",
      clients: [
        singhokBank,
        wipo,
        swiggy,
        cornviva,
        zhiingszone
      ]
    },
    {
      title: "Asia-Pacific",
      clients: [
        singhokBank,
        wipo,
        swiggy,
        cornviva,
        zhiingszone
      ]
    },
    {
      title: "Middle East & Europe",
      clients: [
        eurotech,
        medipharm,
        globalfin,
        autounion
      ]
    }
  ];

  return (
    <div className="min-h-full bg-black py-16 px-4 sm:px-6 lg:px-8 relative mt-5">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${Women})`, backgroundSize: 'contain' }}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto mb-12 text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-blue-500 mb-4">
            Fortune-500 <span className='text-transparent bg-clip-text text-stroke-purple'>Clients</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are trusted by the world’s most outstanding leaders since 2011.
          </p>
          <button className="flex items-center gap-2 mx-auto text-purple-400 hover:text-purple-300 transition-colors duration-200">
            <span className="text-lg font-semibold">CLIENTELE</span>
            <span className="text-2xl">→</span>
          </button>
        </div>

        {/* Regions Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {regions.map((region, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-white border-b-2 border-purple-500 pb-2">
                {region.title}
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                {region.clients.map((clientImg, clientIndex) => (
                  <li 
                    key={clientIndex}
                    className="flex items-center justify-center p-2 bg-gray-900 rounded-lg hover:bg-purple-900 transition-colors duration-200"
                  >
                    <img 
                      src={clientImg}
                      alt="Client logo"
                      className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fortune;