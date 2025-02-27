import React from 'react'
import banner6 from '../assets/banner6.jpg';
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'
const Traininghub = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <div>
                    <img src={banner6} className='w-full h-96 object-cover'/>
                </div>
                <div>
                <h2 className='text-green-600 font-semibold text-2xl pt-10 pb-4 text-center'>LISHETrack Training Hub – Learn, Grow, and Thrive!</h2>
                <h2 className='text-green-600 font-semibold pb-4 text-center'>Empowering Farmers, Aggregators, and Buyers with Essential Biofortification Knowledget</h2>
                <p className='text-center leading-relaxed pb-4'>
                Welcome to the LISHETrack Training Hub, your go-to resource for mastering biofortified crop production, handling, and market integration. Whether you're a farmer, aggregator, or buyer, our curated training materials will help you maximize productivity, maintain quality standards, and make informed decisions in the supply chain.
                </p>

                <div>
                <h2 className='text-green-600 font-semibold pb-2 text-xl'>Training Categories</h2>
                <h3 className='text-green-600 font-semibold pb-2 text-lg'>1. Biofortification & Crop Management</h3>
                <ul>
                    <li>Understanding biofortification and its benefits</li>
                    <li>Recommended seeds and fertilizers for nutrient-rich crops</li>
                    <li>Storage & post-harvest handling to maintain nutritional value</li>
                </ul>
                </div>

                <div>
                <h2 className='text-green-600 font-semibold pt-4 text-lg'>2. Digital Traceability & Compliance</h2>
                <ul>
                    <li>How to register and track crops using LISHETrack</li>
                    <li>The importance of crop segregation in the supply chain</li>
                    <li>AI-powered quality verification and compliance alerts</li>
                </ul>
                </div>

                <div>
                <h2 className='text-green-600 font-semibold pt-4 text-lg'> 3. Selling & Market Access</h2>
                <ul>
                    <li>How to list crops on the LISHETrack marketplace</li>
                    <li>Connecting with verified buyers and setting fair prices</li>
                    <li>Negotiation tips and bulk selling strategies</li>
                </ul>
                </div>

                <div>
                <h2 className='text-green-600 font-semibold pt-4 text-lg'>4. Sustainable Agriculture & Climate Smart Practices</h2>
                <ul>
                    <li>Water conservation and soil health management</li>
                    <li>Pest and disease control for biofortified crops</li>
                    <li>Reducing post-harvest losses and improving supply chain efficiency</li>
                </ul>
                </div>

                <div>
                <h2 className='text-green-600 font-semibold pt-5 text-xl'>Learning Formats</h2>
                <ul>
                    <li>Guides & Manuals – Downloadable PDFs and e-books</li>
                    <li>Video Tutorials – Step-by-step lessons from agricultural experts</li>
                    <li>Webinars & Live Training – Join interactive sessions with industry professionals</li>
                    <li>Community Forum – Ask questions, share experiences, and connect with other farmers</li>
                </ul>

                <Link to="/dashboard">
                    <Button className="w-11/12 md:w-56 mt-14 mx-auto" gradientDuoTone="greenToBlue">Start Learning Today!</Button>
                </Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Traininghub;