import React from 'react'
import { useRef, useState } from "react";
import { Button} from "flowbite-react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SchoolLogo from './../../assets/logo.webp'
import { MdDashboard } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { SiLoopback } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { TbBulbFilled } from "react-icons/tb";
import { TbReportSearch } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";

const Sidebar = () => {
    const Navigate=useNavigate()
    const [menuVisible,setMenuVisible]=useState(true)
    const handleRevealMenu=()=>{
        setMenuVisible(!menuVisible)
    }
    const handleCloseMenu=()=>{
        setMenuVisible(!menuVisible)
    }

    return (
        <div>
            <div className={`flex flex-col justify-between mt-4 bg-green-700 rounded-md shadow-sm shadow-pink-500 w-auto mb-5 md:mb-0 ${menuVisible ? 'block':'hidden'} h-auto`}>
                 <div className='p-4'>
                    <div className=''>
                        <img className='w-20 h-20 rounded-full mx-auto' src={SchoolLogo} alt="profilePic"/>
                    </div>
                    <h2 className='text-center text-white p-3'>EcoTrack Africa</h2>
                    <p className='text-center text-sm italic text-white'>Create a cleaner, greener Africa
                    </p>
                    </div>
                    
                    <div className='p-4 border-t-4 bg-green-700'>
                    <ul className='flex flex-col gap-5 text-center'>
                        <Link to="#">
                        <li className='p-2 hover:bg-gray-100 rounded-md text-white hover:text-green-500 cursor-pointer flex gap-3'><span><MdDashboard className="text-xl"/></span>Dashboard</li>
                        </Link>

                        <Link to="#">
                        <li className='p-2 hover:bg-gray-100 rounded-md text-white hover:text-green-500 cursor-pointer flex gap-3'><span><IoHomeSharp className="text-xl"/></span>Home</li>
                        </Link>

                        <Link to="#">
                        <li className='p-2 hover:bg-gray-100 rounded-md text-white hover:text-green-500 cursor-pointer flex gap-3'><span><SiLoopback className="text-xl"/></span>Agentic Ai assistant
                        </li>
                        </Link>

                        <Link to="#">
                        <li className='p-2 hover:bg-gray-100 rounded-md text-white hover:text-green-500 cursor-pointer flex gap-3'><span><FaDatabase className="text-xl"/></span>Database & data sets
                        </li>
                        </Link>

                        <Link to="#">
                        <li className='p-2 hover:bg-gray-100 rounded-md text-white hover:text-green-500 cursor-pointer flex gap-3'><span><SiSimpleanalytics className="text-xl"/></span>Ream time analytics
                        </li>
                        </Link>
                        <Link to="#">
                        <li className='p-2 hover:bg-gray-100 rounded-md text-white hover:text-green-500 cursor-pointer flex gap-3'><span><TbBulbFilled  className="text-xl"/></span>Actionable Insights
                        </li>
                        </Link>
                        <Link to="#">
                        <li className='p-2 hover:bg-gray-100 rounded-md text-white hover:text-green-500 cursor-pointer flex gap-3'><span><TbReportSearch className="text-xl"/></span>Report & Feedback
                        </li>
                        </Link>

                    </ul>
                        <Button className="w-full mt-4" outline gradientDuoTone='greenToBlue'> <IoLogOutOutline  className='text-xl mr-3'/>
                         Log Out</Button>
                        <Button className="w-full mt-4" outline  gradientDuoTone='greenToBlue'><IoMdHelpCircle className='text-xl mr-3'/>
                         Help</Button>
                </div>
                        <IoMdClose className="text-center mt-4 mx-auto block md:hidden" onClick={handleCloseMenu}/>
            </div>
        </div>
    )
}

export default Sidebar;