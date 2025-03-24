import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Aboutus from './pages/Aboutus/aboutus';
import Webdevpage from './pages/Service/webdev';
import MobileDev from './pages/Service/mobiledev';
import Devops from './pages/Service/devops';
import Cloud from './pages/Service/clouddev';
import UIUX from './pages/Service/UIUXdev';
import AIsolution from './pages/Service/AIsolution';
import Blockchain from './pages/Service/blockchain';
import Cybersecurity from './pages/Service/cybersecurity';
import Arvr from './pages/Service/ARVR';
import Contact from './pages/contact/Contactus';
import Casestudies from './pages/CaseStudies/casestudies';
import Firstportfolio from './pages/CaseStudies/CaseSections/first'
import Secondportfolio from './pages/CaseStudies/CaseSections/second'
import Threeportfolio from './pages/CaseStudies/CaseSections/three'
import Fourportfolio from './pages/CaseStudies/CaseSections/four'
import Fiveportfolio from './pages/CaseStudies/CaseSections/five'
import Sixportfolio from './pages/CaseStudies/CaseSections/six'
import Ourclient from './pages/ourclients/OurClients'
import Career from './pages/Career/career';
import Whats from '../public/images/whatsapp.svg'


const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-[#181764] via-[#32176F] via-50% to-[#060525]">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about-company' element={<Aboutus />} />
        <Route path='/services/web-dev' element={<Webdevpage />} />
        <Route path='/services/mobile-apps' element={<MobileDev />} />
        <Route path='/services/devops' element={<Devops />} />
        <Route path='/services/cloud' element={<Cloud />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services/ui-ux' element={<UIUX />} />
        <Route path='/services/ai' element={<AIsolution />} />
        <Route path='/services/blockchain' element={<Blockchain />} />
        <Route path='/services/cybersecurity' element={<Cybersecurity />} />
        <Route path='/services/arvr' element={<Arvr />} />
        <Route path='/case-studies' element={<Casestudies />} />
        <Route path='/first' element={<Firstportfolio />} />
        <Route path='/second' element={<Secondportfolio />} />
        <Route path='/three' element={<Threeportfolio />} />
        <Route path='/four' element={<Fourportfolio />} />
        <Route path='/five' element={<Fiveportfolio />} />
        <Route path='/six' element={<Sixportfolio />} />
        <Route path='/clients' element={<Ourclient />} />
        <Route path='/career' element={<Career />} />
      </Routes>
      {/* WhatsApp Floating Icon */}
      <a
        href='https://wa.link/5606l7' // Replace 'yourwhatsappnumber' with your actual WhatsApp number
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-6 right-6 z-50 p-2 rounded-full transition-all lg:hover:scale-110 hover:scale-95 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 animate-bounce'
      >
        <img src={Whats} alt='WhatsApp' className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 animate-bounce' />
      </a>
    </div>
  );
};

export default App;