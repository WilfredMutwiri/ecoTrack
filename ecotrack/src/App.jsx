import React,{ useState } from 'react'
import './output.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import FooterComp from './components/FooterComp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/dashboard/Dashboard'
import HowItWorks from './pages/howItWorks'
import ContactPage from './pages/Contact'
function App() {
  return (
    <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/SignIn' element={<SignIn/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/howItWorks' element={<HowItWorks/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
          <FooterComp/>
        </Router>
    </>
  )
}

export default App
