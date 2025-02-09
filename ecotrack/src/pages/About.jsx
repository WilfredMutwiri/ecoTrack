import React from 'react'
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import caleb from '../assets/caleb.jpeg';
import wilfred from '../assets/wilfred.jpeg';
import gillo from '../assets/gillo.jpg'
import brandon from '../assets/brandon.jpg'

export default function About() {
    const teamData=[
        {
            id:1,
            name:"Caleb Kipkazi",
            phone:"+254746567379",
            role:"software enginner / user experience management / designer",
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
            role:"software enginner/Database Engineer/Space Enthusiast",
            image:brandon
        }
    ]
   return (
        <div className="w-full bg-gray-50 ">
            <div className="block md:flex gap-5 w-11/12 md:w-10/12 pt-16 mx-auto">
            {/* <div className='flex-1'>
            </div> */}
            <div className='flex-1 leading-relaxed'>
                <h2 className='font-bold text-2xl text-green-600'>Welcome to EcoTrack Africa.
                </h2>
                <div className='flex flex-col gap-2'>
                    <p>
                    At EcoTrack Africa, we are dedicated to providing innovative solutions for environmental monitoring and waste management across the continent. Our advanced AI technologies enable real-time analytics, waste hotspot tracking, and air pollution monitoring, empowering communities to take actionable steps towards sustainability. Join us in our mission to create a cleaner, greener Africa.
                    </p>
                    <h2 className='font-bold text-2xl text-green-600'>Our Mission:</h2>
                    <p>
                    EcoTrack Africa is a smart waste management platform that uses AI, satellite technology, and real-time data to help African cities optimize waste collection, reduce emissions, and promote sustainability—accessible via webapp and mobile applications for city planners, urban developers, and traffic engineers. .
                    </p>
                    <h2 className='font-bold text-2xl text-green-600'>Our Vission:</h2>
                    <p>
                    To be the leading platform in Africa for environmental monitoring, providing tools and resources that empower individuals and organizations to make a positive impact on their surroundings.
                    </p>
                    <h2 className='font-bold text-2xl text-green-600'>Our Values:</h2>
                    <ul>
                        <li>Sustainability: Committed to promoting eco-friendly practices.</li>
                        <li>Innovation: Leveraging technology to solve environmental challenges.</li>
                        <li>Community: Engaging and supporting local communities in their sustainability efforts.</li>
                    </ul>
                    <div>
                        <h2 className='text-center text-green-600 font-semibold text-2xl pt-3 pb-3'>Meet Our Team</h2>
                        <div className='flex flex-row gap-7 p-3 pt-4 pb-10'>
                            {
                                teamData.map((member,index)=>(
                                    <div key={index} className=' w-[240px]'>
                                        <img src={member.image} className='h-[250px] w-[400px] object-contain'/>
                                        <div className='mx-auto p-2 bg-gray-100'>
                                        <p className='font-semibold text-green-700'>{member.name}</p>
                                        <p className='text-sm text-cyan-700'>{member.role}</p>
                                        <p>Tel: {member.phone}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </div>
    );
}
