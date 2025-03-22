import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Aboutus from './pages/Aboutus/aboutus';
// import Leadership from './pages/leadership';
import Customer from './pages/Aboutus/customer';
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


const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">  
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about-company' element={<Aboutus/>} />
          {/* <Route path='/leadership' element={<Leadership/>} /> */}
          <Route path='/customer-reviews' element={<Customer/>} /> 
          <Route path='/web-dev' element={<Webdevpage/>} />
          <Route path='/mobile-apps' element={<MobileDev/>} /> 
          <Route path='/devops' element={<Devops/>} /> 
          <Route path='/cloud' element={<Cloud/>} />    
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/ui-ux' element={<UIUX/>}/>  
          <Route path='/ai' element={<AIsolution/>}/> 
          <Route path='/blockchain' element={<Blockchain/>}/>
          <Route path='/career' element={<Career/>}/>       
          <Route path='/cybersecurity' element={<Cybersecurity/>}/>    
          <Route path='/arvr' element={<Arvr/>}/> 
          <Route path='/case-studies' element={<Casestudies/>}/>  
          <Route path='/first' element={<Firstportfolio/>}/>  
          <Route path='/second' element={<Secondportfolio/>}/>  
          <Route path='/three' element={<Threeportfolio/>}/>  
          <Route path='/four' element={<Fourportfolio/>}/>  
          <Route path='/five' element={<Fiveportfolio/>}/>  
          <Route path='/six' element={<Sixportfolio/>}/>
          <Route path='/clients' element={<Ourclient/>}/> 
          <Route path='/career' element={<Career/>}/>          
          </Routes>
      </div>
  );
};

export default App;
