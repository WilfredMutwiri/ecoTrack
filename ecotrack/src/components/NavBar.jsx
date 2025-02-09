import React from 'react';
"use client";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
export default function NavBar() {
  return (
    <Navbar fluid rounded className='w-full justify-between'>
       <Navbar.Brand>
       <div className="flex w-full justify-between">
        <img className='w-auto h-20' src={logo} alt='logo'/>
        <h2 className="font-semibold text-xl my-auto -ml-5">EcoTrack<span className='text-green-600 p'>Africa</span></h2>
        </div>
       </Navbar.Brand>
        <div className="block md:order-2 mad:flex justify-between text-lg font-semibold text-pink-700  text-center">
          <div className='flex gap-2 mt-2 ml-24 md:ml-0'>
         <div>
            <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
              alt='user'
              rounded/>
            }
            >
              <Dropdown.Header>
                <span className='text-sm block text-cyan-700'>Wilfred</span>
                <span className='text-sm block font-medium truncate text-green-600'>wilfred@gmail.com</span>
              </Dropdown.Header>
              <Link to='#'>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Link>
            </Dropdown>
         </div>
         <Navbar.Toggle/>
         </div>
          </div>
         <Navbar.Collapse>
          <Navbar.Link href="/landing" active> Home</Navbar.Link>
         <Navbar.Link href="/about">About Us</Navbar.Link>
         <Navbar.Link href="#">Contact</Navbar.Link>
         </Navbar.Collapse>
         <hr/>
         </Navbar>
  );
}

