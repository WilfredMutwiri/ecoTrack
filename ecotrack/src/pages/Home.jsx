import React from 'react'
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import landingImg from '../assets/logo.webp';
import banner1 from '../assets/banner1.jpg';

export default function Home() {
    return (
        <div className="w-full bg-gray-50 ">
            <div className="block gap-5 w-11/12 md:w-10/12 mx-auto">
            <div className='flex-1'>
                <img src={banner1} className='w-[100%] h-96 object-cover'/>
            </div>
            <div className='leading-relaxed items-center justify-center pt-10'>
                <h2 className='font-bold text-2xl text-green-600 text-center p-2'>Welcome to LISHETrack.
                </h2>
                <div className='flex flex-col gap-2'>
                    <p className='leading-relaxed text-center'>
                    At LISHETrack, we are dedicated to providing a digital platform for biofortified crop traceability and market access. Our advanced AI-powered tools ensure that farmers, buyers, and regulators can seamlessly track, verify, and trade nutrient-rich crops with full transparency. By leveraging real-time monitoring, digital tagging, and smart market linkages, LISHETrack is transforming the agricultural supply chain and promoting food security.
                    </p>
                    <h2 className='font-bold text-2xl text-green-600 text-center'>What we offer:</h2>
                    <div className='flex flex-row gap-4'>
                    <ul className='flex flex-row justify-center'>
                        <li className=''> <span className='text-3xl font-bold my-auto text-blue-700'>.</span>Empowering Farmers with digital tools for traceability & quality control</li>
                        <li><span className='text-3xl font-bold my-auto text-blue-700'>.</span> Real-time Crop Tracking for better segregation & compliance</li>
                        <li><span className='text-3xl font-bold text-blue-700'>.</span>AI-Powered Quality Verification to certify biofortified crops</li>
                        <li> <span className='text-3xl font-bold text-blue-700'>.</span> Market Linkages connecting farmers with bulk buyers & institutions</li>
                        <li> <span className='text-3xl font-bold text-blue-700'>.</span>Live Price Monitoring for better trade negotiations</li>
                    </ul>
                    </div>
                </div>

            <Link to="/dashboard">
            <Button className="w-11/12 md:w-56 mt-14 mx-auto" gradientDuoTone="greenToBlue">Get Started</Button>
            </Link>
            </div>
            </div>
        </div>
    );
}
