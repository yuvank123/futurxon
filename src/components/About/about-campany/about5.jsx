import React from 'react';
import { FaBriefcaseMedical, FaCog, FaTruck, FaBroadcastTower, FaGasPump, FaChartPie, FaUniversity, FaShoppingCart, FaCar, FaGraduationCap, FaStore, FaGamepad, FaBuilding, FaLink } from 'react-icons/fa';

const industries = [
  { icon: <FaBriefcaseMedical />, label: 'Healthcare' },
  { icon: <FaCog />, label: 'Manufacturing' },
  { icon: <FaTruck />, label: 'Transportation' },
  { icon: <FaBroadcastTower />, label: 'Telecom' },
  { icon: <FaGasPump />, label: 'Oil & Gas' },
  { icon: <FaChartPie />, label: 'Fintech' },
  { icon: <FaUniversity />, label: 'Banking' },
  { icon: <FaShoppingCart />, label: 'E-Commerce' },
  { icon: <FaCar />, label: 'Automotive' },
  { icon: <FaGraduationCap />, label: 'Education' },
  { icon: <FaStore />, label: 'Retail' },
  { icon: <FaLink />, label: 'Supply Chain' },
  { icon: <FaBuilding />, label: 'Real Estate' },
  { icon: <FaGamepad />, label: 'Gaming' },
  { icon: <FaStore />, label: 'AI & ML' },
];

const About5 = () => {
  return (
    <div className='relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent mb-4'>
            Industries We Transform
          </h2>
          <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
            Pioneering digital transformation across diverse sectors through cutting-edge solutions and domain expertise
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
          {industries.map((industry, index) => (
            <div 
              key={index}
              className='group relative p-6 bg-gray-800 rounded-xl transition-all duration-300 hover:bg-gradient-to-br from-purple-900/50 to-blue-900/30 hover:border-purple-500/30 border border-gray-700/50 shadow-2xl hover:shadow-purple-900/20'
            >
              <div className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(200px_circle_at_var(--x)_var(--y),rgba(125,90,250,0.1),transparent)]' />
              <div className='flex flex-col items-center gap-4 z-10 relative'>
                <div className='p-4 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl text-3xl text-white transform transition-transform duration-300 group-hover:-translate-y-2'>
                  {industry.icon}
                </div>
                <h3 className='text-xl font-semibold text-gray-200 group-hover:text-white transition-colors'>
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