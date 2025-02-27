import React from 'react'
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import caleb from '../assets/caleb.jpeg';
import wilfred from '../assets/wilfred.jpeg';
import gillo from '../assets/gillo.jpg'
import brandon from '../assets/brandon.jpg'
import banner2 from '../assets/banner2.jpg';

export default function About() {
    const teamData=[
        {
            id:1,
            name:"Caleb Kipkazi",
            phone:"+254746567379",
            role:"Software Enginner /UX & UI management /Data Engineer",
            image:caleb
        },
        {
            id:2,
            name:"Wilfred Mutwiri",
            phone:"+254745567568",
            role:"software enginner/geospatial analysis",
            image:wilfred
        },
        {
            id:3,
            name:"Brian Gillo",
            phone:"+254741428123",
            role:"software enginner/AI & ML Engineer/ Space Enthusiast",
            image:gillo
        },
        {
            id:4,
            name:"Brandon Ochieng",
            phone:"+254705980652",
            role:"software enginner/Backend Dev/Space Enthusiast",
            image:brandon
        }
    ]
   return (
        <div className="w-full bg-gray-50 ">
            <div className="block gap-5 w-11/12 md:w-10/12 mx-auto">
            <div className='flex-1'>
                <img src={banner2} className='w-[100%] h-96 object-cover'/>
            </div>
            <div className='flex-1 leading-relaxed pt-10'>
                <h2 className='font-bold text-3xl text-green-600 text-center'>About <span className="text-black">LISHE</span>Track</h2>
                <div className='flex flex-col gap-2'>
                    <p className='text-center leading-relaxed'>
                    At LISHETrack, we are committed to revolutionizing the biofortified crop supply chain through technology, transparency, and trust. Our platform provides real-time tracking, AI-powered quality verification, and smart market linkages, ensuring farmers, buyers, and regulators can seamlessly verify, trade, and manage biofortified crops with confidence.
                    </p>

                    <div className='flex flex-row gap-4 pt-10'>
                    <div>
                        <h2 className='font-bold text-2xl text-green-600'>Our Mission:</h2>
                        <p>
                        To create a transparent, efficient, and technology-driven agricultural ecosystem that ensures biofortified crops are properly identified, segregated, and distributed to improve nutrition, market accessibility, and food security.
                        </p>
                    </div>

                    <div>
                    <h2 className='font-bold text-2xl text-green-600'>Our Vission:</h2>
                    <p>
                    To be Africa’s leading digital platform for traceability and market aggregation, making nutrient-rich, biofortified crops more accessible and valuable for both farmers and consumers.
                    </p>
                    </div>

                    </div>
                    <h2 className='font-bold text-2xl text-green-600 pt-10'>Why LISHETrack?</h2>
                    <ul>
                        <li>Enhancing Trust & Transparency – Eliminates fraud in biofortified crop trading.</li>
                        <li>Empowering Farmers – Provides digital tools for better market access.</li>
                        <li>Promoting Health & Nutrition – Encourages large-scale adoption of nutrient-rich crops.</li>
                        <li>Driving Innovation – Uses AI, blockchain, and geo-mapping for improved supply chain efficiency.</li>
                    </ul>
                    <div>
                        <h2 className='font-bold text-2xl text-green-600 pt-10'>Join Us in Transforming Agriculture!</h2>
                        <p>
                        LISHETrack is more than just a platform—it’s a movement towards smarter, healthier, and more profitable farming. Whether you are a farmer, buyer, or stakeholder, LISHETrack is your trusted partner for sustainable agricultural growth
                        </p>
                        <Link to="/dashboard">
                            <Button className="w-11/12 md:w-56 mt-14 mx-auto" gradientDuoTone="greenToBlue">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
