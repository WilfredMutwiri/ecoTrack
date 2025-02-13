import React from 'react'
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import landingImg from '../assets/logo.webp';
import homeVideo from '../assets/homeVideo.mp4';

export default function Home() {
    const VideoPlayer=()=>{
        return(
            <video width={640} height={400} controls>
                <source src={homeVideo} type='video/mp4'/>
                <p>Your browser does not support video playing</p>
            </video>
        )
    }
    return (
        <div className="w-full bg-gray-50 ">
            <div className="block md:flex gap-5 w-11/12 md:w-10/12 pt-16 mx-auto">
            <div className='flex-1'>
                <VideoPlayer/>
            </div>
            <div className='flex-1 leading-relaxed'>
                <h2 className='font-bold text-2xl text-green-600'>Welcome to EcoTrack Africa.
                </h2>
                <div className='flex flex-col gap-2'>
                    <p>
                    At EcoTrack Africa, we are dedicated to provide a platform for environmental monitoring and waste management across the continent. Our advanced AI technologies enable real-time analytics, waste hotspot tracking, and air pollution monitoring, empowering communities to take actionable steps towards sustainability. Join us in our mission to create a cleaner, greener Africa.
                    </p>
                    <h2 className='font-bold text-2xl text-green-600'>Key Features:</h2>
                    <div className='flex flex-row gap-4'>
                    <ul className='flex-1'>
                        <li> <span className='text-3xl font-bold my-auto'>.</span>Waste hotspot tracking</li>
                        <li><span className='text-3xl font-bold my-auto'>.</span>Real-time waste accumulation analytics</li>
                        <li><span className='text-3xl font-bold'>.</span>Air pollution monitoring</li>
                    </ul>
                    <ul className='flex-1'>
                    <li> <span className='text-3xl font-bold'>.</span>Import your own data for personalized insights</li>
                    <li> <span className='text-3xl font-bold'>.</span>Stay updated with the latest climate change news and waste trends</li>
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
