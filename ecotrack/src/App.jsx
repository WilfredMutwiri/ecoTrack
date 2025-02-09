import React,{ useState } from 'react'
import './output.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import FooterComp from './components/FooterComp'
function App() {
  return (
    <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
          <FooterComp/>
        </Router>
    </>
  )
}

export default App
