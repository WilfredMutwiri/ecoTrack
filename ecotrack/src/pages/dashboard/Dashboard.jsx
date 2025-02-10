import React from 'react'
import { useState,useEffect} from 'react'
import { Button, Label, TextInput } from 'flowbite-react';
import Sidebar from './SideBar';
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { PiSunHorizonFill } from "react-icons/pi";
import { FaRegCircleRight } from "react-icons/fa6";
import { CiImport } from "react-icons/ci";


import analyticsImg from '../../assets/analytics.png'
import agent from '../../assets/agent.jpg';
import graph from '../../assets/graph.png'
export default function Dashboard() {
    const [welcomeText,setWelcomeText]=useState("Welcome Back");
    useEffect(()=>{
        const getTimeOfDay=()=>{
            const hours=new Date().getHours();
            if(hours<12){
                return <p className='flex pr-2'> <span><PiSunHorizonFill className='text-yellow-400 text-sm bg-white rounded-full'/></span> Good Morning, Welcome back</p>
            }else if(hours<18){
                return <p className='flex pr-2'> <span><IoMdSunny className=' text-yellow-400 text-sm bg-white rounded-full'/></span> Good Afternoon, Welcome back</p>
            }else{
                return <p className='flex pr-2'> <span><FaMoon  className=' text-black text-sm bg-white rounded-full'/></span> Good Evening, Welcome back</p>
            }
        }
        setWelcomeText(getTimeOfDay())
    },[]);

  return (
    <div className='flex flex-row gap-4 w-11/12 mx-auto'>
        <Sidebar/>
        <div className='pt-3 flex flex-col gap-5 flex-1'>
            <div className='bg-gray-200 rounded-md shadow-md hover:shadow-none shadow-gray-200 flex-1'>
                <div className='flex flex-row pt-2 w-11/12 mx-auto'>
                    <div className='flex-1'>
                    <h2 className='font-semibold text-green-700 pt-2 text-center flex'>{welcomeText}
                     Wilfred!
                    </h2>
                    </div>
                    <div className='flex-1'>
                        <div className='flex'>
                        {/* <CiSearch  className='-mr-8 z-50 my-auto'/> */}
                        <TextInput
                        placeholder='Search here'
                        className='border border-gray-200 rounded-md-10 w-60'
                        />
                        </div>
                    </div>
                    <div className='flex gap-4 pt-2'>
                        <div className='flex'>
                        <IoIosNotifications className='text-3xl text-green-600' />
                        <p className='-ml-4 -mt-1 text-xs bg-red-600 w-4 h-4 text-center justify-center rounded-full text-white'>1</p>
                        </div>
                    <FaUserCircle  className='text-3xl text-green-600'/>
                    </div>
                </div>
                <p className='text-center pt-2 text-green-700 font-semibold'>{new Date().getUTCHours()}:{new Date().getMinutes()} hrs {new Date().getFullYear()} February Nairobi 19 ° c 1.2921° S, 36.8219° E
                </p>
            </div>
            {/* components div */}
            <div className='flex flex-col gap-4'>
                {/* first div */}
                <div className='flex flex-row gap-4'>
                    {/* analytics div */}
                    <div className='p-3 rounded-md flex-1 bg-gray-200 shadow-md hover:shadow-none shadow-gray-200'>
                        <h2 className='font-semibold pt-3 text-black text-center'>Get real-time waste accumulation Analytics</h2>
                        <img src={analyticsImg} className='rounded-md'/>
                    </div>
                        {/* agent div */}
                        <div className='bg-gray-200 p-3 rounded-md flex-1 gap-4 text-black shadow-md hover:shadow-none shadow-gray-200'>
                        <h2 className='font-semibold pt-3 text-center'>Our advanced AI solutions tailor analyses specifically to your local data </h2>
                        <img src={agent} className='h-[200px] w-auto object-contain rounded-full mx-auto'/>
                        <Button className='w-full mt-1' gradientDuoTone='greenToBlue'>Initiate</Button>
                    </div>

                </div>
                {/* second div */}
                <div className='flex gap-4'>
                        {/*graph */}
                        <div className='bg-gray-200 p-3 rounded-md shadow-md hover:shadow-none shadow-gray-200 flex-1'>
                        <h2 className='font-semibold pt-3 text-center'>environmental impact metrics
                        </h2>
                        <img src={graph} className='rounded-md'/>
                        </div>
                        {/*graph */}
                        <div className='bg-gray-200 p-3 rounded-md shadow-md hover:shadow-none shadow-gray-200 flex-1'>
                        <h2 className='font-semibold text-lg pt-3'>environmental impact metrics
                        </h2>
                        <img src={"https://i.pinimg.com/originals/e6/36/ef/e636efeaac77c1d9f16971c9ab257225.gif"} className='rounded-md'/>
                        </div>
                </div>
                <div className='flex flex-row gap-2 bg-green-100 p-2 rounded-md'>
                    <Button className='justify-center text-center' gradientDuoTone='greenToBlue'>Read More <FaRegCircleRight className='my-1 ml-1 text-lg' />
                    </Button>
                    <p className='flex-1 text-center'>
                    Get the Latest climate change updates, waste trends, identified
                    waste hotspots, and progress in green recovery zones.
                    </p>
                    <Button className='justify-center text-center' gradientDuoTone='greenToBlue'>Import Your Data <CiImport className='my-1 ml-1 text-2xl text-red-600'/>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}
