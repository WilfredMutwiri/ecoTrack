import React from 'react'
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import landingImg from '../assets/logo.webp';

export default function Home() {
    return (
        <div className="w-full bg-gray-50 ">
            <div className="block md:flex gap-5 w-11/12 md:w-10/12 pt-16 mx-auto">
            <div className='flex-1'>
                <img className='' src={landingImg} alt='landing image'/>
            </div>
            <div className='flex-1 leading-relaxed'>
                <h2 className='font-bold text-2xl text-green-600'>Welcome to EcoTrack Africa.
                </h2>
                <div className='flex flex-col gap-2'>
                    <p>
                    At EcoTrack Africa, we are dedicated to providing innovative solutions for environmental monitoring and waste management across the continent. Our advanced AI technologies enable real-time analytics, waste hotspot tracking, and air pollution monitoring, empowering communities to take actionable steps towards sustainability. Join us in our mission to create a cleaner, greener Africa.
                    </p>
                    <h2 className='font-bold text-2xl text-green-600'>Key Features:</h2>
                    <ul>
                        <li>Real-time waste accumulation analytics</li>
                        <li>Waste hotspot tracking</li>
                        <li>Air pollution monitoring</li>
                        <li>Import your own data for personalized insights</li>
                        <li>Stay updated with the latest climate change news and waste trends</li>
                    </ul>
                </div>

            <Link to="/SignIn">
            <Button className="w-11/12 md:w-56 mt-14 mx-auto md:mx-0" gradientDuoTone="greenToBlue">Get Started</Button>
            </Link>
            </div>
            </div>
        </div>
    );
}
