import React from 'react';
import { FaBriefcaseMedical, FaCog, FaTruck, FaBroadcastTower, FaGasPump, FaChartPie, FaUniversity, FaShoppingCart, FaCar, FaGraduationCap, FaStore, FaGamepad, FaBuilding, FaLink } from 'react-icons/fa';

const industries = [
  { icon: <FaBriefcaseMedical />, label: 'Healthcare' },
  { icon: <FaTruck />, label: 'Transportation' },
  { icon: <FaShoppingCart />, label: 'E-Commerce' },
  { icon: <FaStore />, label: 'Retail' },
  { icon: <FaGraduationCap />, label: 'E-Learning' },
  { icon: <FaBuilding />, label: 'Real Estate' },
];

const About5 = () => {
  return (
    <div className='relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-purple-300 to-white bg-clip-text text-transparent mb-4 font-mono tracking-tighter'>
          Industries We Transform
          </h2>
          <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
          Driving digital innovation with cutting-edge technology and deep domain expertise.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
          {industries.map((industry, index) => (
            <div 
              key={index}
              className='group relative p-6 rounded-xl transition-all duration-300 hover:bg-gradient-to-br from-purple-900/50 to-blue-900/30 hover:border-purple-500/30 border border-gray-700/50 shadow-2xl hover:shadow-purple-900/20'
            >
              <div className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(200px_circle_at_var(--x)_var(--y),rgba(125,90,250,0.1),transparent)]' />
              <div className='flex flex-col items-center gap-4 z-10 relative'>
                <div className='p-6 bg-gradient-to-br from-purple-600 via-purple-500 to-white rounded-4xl text-3xl text-white transform transition-transform duration-300 group-hover:-translate-y-2'>
                  {industry.icon}
                </div>
                <h3 className='text-2xl font-bold text-gray-200 group-hover:text-white transition-colors font-mono tracking-tighter'>
                  {industry.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About5;