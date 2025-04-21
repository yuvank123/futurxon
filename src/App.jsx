import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './Loader';
import Whats from '../public/images/whatsapp.svg';

// Priority routes loaded with higher priority
const Homepage = lazy(() => import(/* webpackPreload: true */ './pages/homepage'));
const Navbar = lazy(() => import(/* webpackPreload: true */ './components/navbar'));

// Other routes with standard loading
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

const RouteWrapper = ({ children }) => (
  <Suspense fallback={
    <div className="min-h-screen flex justify-center items-center">
      <Loader />
    </div>
  }>
    {children}
  </Suspense>
);

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Routes>
        <Route path='/' element={
          <RouteWrapper>
            <Homepage />
          </RouteWrapper>
        } />
        <Route path='/about-company' element={
          <RouteWrapper>
            <Aboutus />
          </RouteWrapper>
        } />
        <Route path='/services/web-dev' element={
          <RouteWrapper>
            <Webdevpage />
          </RouteWrapper>
        } />
        <Route path='/services/mobile-apps' element={
          <RouteWrapper>
            <MobileDev />
          </RouteWrapper>
        } />
        <Route path='/services/devops' element={
          <RouteWrapper>
            <Devops />
          </RouteWrapper>
        } />
        <Route path='/services/cloud' element={
          <RouteWrapper>
            <Cloud />
          </RouteWrapper>
        } />
        <Route path='/contact' element={
          <RouteWrapper>
            <Contact />
          </RouteWrapper>
        } />
        <Route path='/services/ui-ux' element={
          <RouteWrapper>
            <UIUX />
          </RouteWrapper>
        } />
        <Route path='/services/ai' element={
          <RouteWrapper>
            <AIsolution />
          </RouteWrapper>
        } />
        <Route path='/services/blockchain' element={
          <RouteWrapper>
            <Blockchain />
          </RouteWrapper>
        } />
        <Route path='/services/cybersecurity' element={
          <RouteWrapper>
            <Cybersecurity />
          </RouteWrapper>
        } />
        <Route path='/services/arvr' element={
          <RouteWrapper>
            <Arvr />
          </RouteWrapper>
        } />
        <Route path='/case-studies' element={
          <RouteWrapper>
            <Casestudies />
          </RouteWrapper>
        } />
        <Route path='/case-studies/portfolio1' element={
          <RouteWrapper>
            <Firstportfolio />
          </RouteWrapper>
        } />
        <Route path='/case-studies/portfolio2' element={
          <RouteWrapper>
            <Secondportfolio />
          </RouteWrapper>
        } />
        <Route path='/case-studies/portfolio3' element={
          <RouteWrapper>
            <Threeportfolio />
          </RouteWrapper>
        } />
        <Route path='/case-studies/portfolio4' element={
          <RouteWrapper>
            <Fourportfolio />
          </RouteWrapper>
        } />
        <Route path='/case-studies/portfolio5' element={
          <RouteWrapper>
            <Fiveportfolio />
          </RouteWrapper>
        } />
        <Route path='/clients' element={
          <RouteWrapper>
            <Ourclient />
          </RouteWrapper>
        } />
        <Route path='/career' element={
          <RouteWrapper>
            <Career />
          </RouteWrapper>
        } />
        <Route path='/policy' element={
          <RouteWrapper>
            <PP />
          </RouteWrapper>
        } />
      </Routes>

      {/* WhatsApp Icon - Keep outside Suspense for immediate visibility */}
      <a
        href='https://wa.link/5606l7'
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