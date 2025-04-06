import React, { useState, useEffect } from 'react';
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
import Ourclient from './pages/ourclients/OurClients'
import Career from './pages/Career/career';
import Whats from '../public/images/whatsapp.svg'
import PP from './pages/privacy-policy/policy';
import Loader from './Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // simulate load time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <Loader />
      </div>
    );
  }
  return (
    <div className="relative min-h-screen overflow-hidden">
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
        <Route path='/clients' element={<Ourclient />} />
        <Route path='/career' element={<Career />} />
        <Route path='/policy' element={<PP />} />
      </Routes>
      {/* WhatsApp Floating Icon */}
      <a
        href='https://wa.link/5606l7' // Replace 'yourwhatsappnumber' with your actual WhatsApp number
        target='_blank'
        rel='noopener noreferrer'
        className='fixed bottom-6 right-6 z-50 p-2 rounded-full transition-all lg:hover:scale-110 hover:scale-95 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10'
      >
        <img src={Whats} alt='WhatsApp' className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16' />
      </a>
    </div>
  );
};

export default App;