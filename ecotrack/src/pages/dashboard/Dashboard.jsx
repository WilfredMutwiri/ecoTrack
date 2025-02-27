import React, { useState, useEffect } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import Sidebar from './SideBar';
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaMoon, FaLeaf, FaChartLine } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { PiSunHorizonFill } from "react-icons/pi";
import { FaRegCircleRight } from "react-icons/fa6";
import { CiImport } from "react-icons/ci";

import traceabilityImg from '../../assets/traceability.png';
import complianceImg from '../../assets/compliance.png';
import marketImg from '../../assets/market.png';

export default function Dashboard() {
    const [welcomeText, setWelcomeText] = useState("Welcome Back");
    useEffect(() => {
        const getTimeOfDay = () => {
            const hours = new Date().getHours();
            if (hours < 12) {
                return <p className='flex pr-2'> <PiSunHorizonFill className='text-yellow-400 text-sm bg-white rounded-full'/> Good Morning, Welcome back</p>
            } else if (hours < 18) {
                return <p className='flex pr-2'> <IoMdSunny className=' text-yellow-400 text-sm bg-white rounded-full'/> Good Afternoon, Welcome back</p>
            } else {
                return <p className='flex pr-2'> <FaMoon className=' text-black text-sm bg-white rounded-full'/> Good Evening, Welcome back</p>
            }
        }
        setWelcomeText(getTimeOfDay())
    }, []);

    return (
        <div className='flex flex-row gap-4 w-11/12 mx-auto'>
            <Sidebar/>
            <div className='pt-3 flex flex-col gap-5 flex-1'>
                <div className='bg-gray-200 rounded-md shadow-md hover:shadow-none shadow-gray-200 flex-1'>
                    <div className='flex flex-row pt-2 w-11/12 mx-auto'>
                        <div className='flex-1'>
                            <h2 className='font-semibold text-green-700 pt-2 text-center flex'>{welcomeText} User!</h2>
                        </div>
                        <div className='flex gap-4 pt-2'>
                            <IoIosNotifications className='text-3xl text-green-600' />
                            <FaUserCircle className='text-3xl text-green-600'/>
                        </div>
                    </div>
                </div>
                <p className='text-center pt-2 text-green-700 font-semibold'>{new Date().toLocaleTimeString()} | {new Date().toDateString()} | Nairobi 19°C</p>
                
                {/* Dashboard Widgets */}
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-row gap-4'>
                        {/* Traceability */}
                        <div className='p-3 rounded-md flex-1 bg-gray-200 shadow-md hover:shadow-none'>
                            <h2 className='font-semibold pt-3 text-black text-center'>Real-Time Crop Traceability</h2>
                            <img src={traceabilityImg} className='rounded-md'/>
                        </div>
                        {/* Compliance */}
                        <div className='p-3 rounded-md flex-1 bg-gray-200 shadow-md hover:shadow-none'>
                            <h2 className='font-semibold pt-3 text-black text-center'>Compliance & Certification</h2>
                            <img src={complianceImg} className='rounded-md'/>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        {/* Market Access */}
                        <div className='p-3 rounded-md flex-1 bg-gray-200 shadow-md hover:shadow-none'>
                            <h2 className='font-semibold pt-3 text-black text-center'>Market Insights & Pricing</h2>
                            <img src={marketImg} className='rounded-md'/>
                        </div>
                        {/* AI-Driven Analytics */}
                        <div className='p-3 rounded-md flex-1 bg-gray-200 shadow-md hover:shadow-none'>
                            <h2 className='font-semibold pt-3 text-black text-center'>AI-Driven Crop Analysis</h2>
                            <FaChartLine className='text-green-600 text-6xl mx-auto'/>
                        </div>
                    </div>
                </div>
                
                {/* Call to Action */}
                <div className='flex flex-row gap-2 bg-green-100 p-2 rounded-md'>
                    <Button className='justify-center text-center' gradientDuoTone='greenToBlue'>Read More <FaRegCircleRight className='my-1 ml-1 text-lg' /></Button>
                    <p className='flex-1 text-center'>Get the latest updates on biofortified crop trends, compliance reports, and market prices.</p>
                    <Button className='justify-center text-center' gradientDuoTone='greenToBlue'>Import Data <CiImport className='my-1 ml-1 text-2xl text-red-600'/></Button>
                </div>
            </div>
        </div>
    );
}
