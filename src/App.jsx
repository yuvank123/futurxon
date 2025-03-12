import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Aboutus from './pages/aboutus';
import Leadership from './pages/leadership';


const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">  
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about-company' element={<Aboutus/>} />
          <Route path='/leadership' element={<Leadership/>} />       
          </Routes>
      </div>
  );
};

export default App;