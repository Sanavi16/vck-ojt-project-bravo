import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import Admission from './Pages/Admission';
import NotFound from './Pages/NotFound';
import ChatbotComponent from './Component/Chatbot/ChatbotComponents';

const App = () => {
  return (
        
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Admission' element={<Admission />} />
        <Route path='/NotFound' element={<NotFound />} />
      </Routes>
      <ChatbotComponent/>
    </BrowserRouter>
  );
};

export default App;
