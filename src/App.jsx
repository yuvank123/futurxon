import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Loader from './Loader';
import Whats from '../public/images/whatsapp.svg';

// Lazy load all components
const Homepage = lazy(() => import('./pages/homepage'));
const Aboutus = lazy(() => import('./pages/Aboutus/aboutus'));
const Webdevpage = lazy(() => import('./pages/Service/webdev'));
const MobileDev = lazy(() => import('./pages/Service/mobiledev'));
const Devops = lazy(() => import('./pages/Service/devops'));
const Cloud = lazy(() => import('./pages/Service/clouddev'));
const UIUX = lazy(() => import('./pages/Service/UIUXdev'));
const AIsolution = lazy(() => import('./pages/Service/AIsolution'));
const Blockchain = lazy(() => import('./pages/Service/blockchain'));
const Cybersecurity = lazy(() => import('./pages/Service/cybersecurity'));
const Arvr = lazy(() => import('./pages/Service/ARVR'));
const Contact = lazy(() => import('./pages/contact/Contactus'));
const Casestudies = lazy(() => import('./pages/CaseStudies/casestudies'));
const Firstportfolio = lazy(() => import('./pages/CaseStudies/CaseSections/first'));
const Secondportfolio = lazy(() => import('./pages/CaseStudies/CaseSections/second'));
const Threeportfolio = lazy(() => import('./pages/CaseStudies/CaseSections/three'));
const Fourportfolio = lazy(() => import('./pages/CaseStudies/CaseSections/four'));
const Fiveportfolio = lazy(() => import('./pages/CaseStudies/CaseSections/five'));
const Ourclient = lazy(() => import('./pages/ourclients/OurClients'));
const Career = lazy(() => import('./pages/Career/career'));
const PP = lazy(() => import('./pages/privacy-policy/policy'));

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1500); // simulate load time

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
  //       <Loader />
  //     </div>
  //   );
  // }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <Suspense fallback={
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <Loader />
        </div>
      }> */}
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
      {/* </Suspense> */}
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