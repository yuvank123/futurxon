import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';


const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">  
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </div>
  );
};

export default App;