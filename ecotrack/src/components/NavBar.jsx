import React from 'react';
"use client";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
export default function NavBar() {
  return (
    <Navbar fluid rounded className='w-full justify-between'>
       <Navbar.Brand>
       <div className="flex w-full justify-between">
        <img className='w-auto h-20' src={logo} alt='logo'/>
        <h2 className="font-semibold text-xl my-auto -ml-7"> LISHE<span className='text-green-600 '>Track</span></h2>
        </div>
       </Navbar.Brand>
        <div className="block md:order-2 mad:flex justify-between text-lg font-semibold text-green-600  text-center">
          <div className='flex gap-2 mt-2 ml-24 md:ml-0'>
         <div>
          <Link to="/dashboard">
            <Button className="w-auto mx-auto" gradientDuoTone="greenToBlue" outline>Get Started</Button>
          </Link>
         </div>
         <Navbar.Toggle/>
         </div>
          </div>
         <Navbar.Collapse>
          <Navbar.Link href="/" active> Home</Navbar.Link>
         <Navbar.Link href="/about">About Us</Navbar.Link>
         <Navbar.Link href="/features">Features </Navbar.Link>
         <Navbar.Link href="/MarketPlace">MarketPlace </Navbar.Link>
         <Navbar.Link href="/Trackcrops">Track crops</Navbar.Link>
         <Navbar.Link href="/Traininghub">Training hub</Navbar.Link>
         <Navbar.Link href="/contact">Contact Us</Navbar.Link>
         </Navbar.Collapse>
         <hr/>
         </Navbar>
  );
}

