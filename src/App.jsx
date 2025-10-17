import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import Admission from './Pages/Admission';

import ChatbotComponent from './Component/Chatbot/ChatbotComponents';
import DeveloperInfoPopup from './Component/DeveloperInfo/DeveloperInfoPopup';

const App = () => {
 
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
        <>
        <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sanavi Dattatray Kurane"
          studentPhotoUrl="/img/sanavi.jpg"
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
       />
     </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Admission' element={<Admission />} />
      </Routes>
      <ChatbotComponent/>
    </BrowserRouter>
    </>
  );
};

export default App;
