import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Contact from './Pages/Contact'
import Admission from './Pages/Addmission'
import NotFound from './Pages/NotFound'

const App=() => {
  

  return (
    <>
    
      <div>
        <BrowserRouter>
        
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/About' element={<About/>}></Route>
                <Route path='/Courses' element={<Courses/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
                <Route path='/Addimission' element={<Admission/>}></Route>
                <Route path='/NotFound' element={<NotFound/>}></Route>
            </Routes>
        </BrowserRouter>
      </div>
      </>
    
  )
}

export default App;
