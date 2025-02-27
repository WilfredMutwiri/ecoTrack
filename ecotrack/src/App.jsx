import React,{ useState } from 'react'
import './output.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import FooterComp from './components/FooterComp'
import Dashboard from './pages/dashboard/Dashboard'
import HowItWorks from './pages/howItWorks'
import ContactPage from './pages/Contact'
import MarketPlace from './pages/marketPlace'
function App() {
  return (
    <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/SignIn' element={<SignIn/>}/> */}
            <Route path='/about' element={<About/>}/>
            <Route path='/features' element={<HowItWorks/>}/>
            <Route path='/marketPlace' element={<MarketPlace/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
          <FooterComp/>
        </Router>
    </>
  )
}

export default App
