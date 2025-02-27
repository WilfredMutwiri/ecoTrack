import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'
import banner3 from '../assets/banner3.jpg';

export default function HowItWorks() {
   return (
        <div className="w-full bg-gray-50 ">
            <div className="block gap-5 w-11/12 mx-auto">
            <div className='flex-1'>
                <img src={banner3} className='w-[100%] h-96 object-cover'/>
            </div>
            <div className='flex-1 leading-relaxed'>
                <h2 className='font-bold text-2xl text-green-600 text-center pb-5 pt-10'>Features of LISHETrack</h2>
                <h2 className='text-lg text-green-600 '>Revolutionizing Biofortified Crop Traceability & Market Access</h2>
                <p>
                LISHETrack is a cutting-edge digital platform designed to solve challenges in the aggregation, segregation, and distribution of biofortified crops. With smart digital tools, we empower farmers, buyers, and regulators to track, verify, and trade nutrient-rich crops with complete transparency.
                </p>
                <div className='flex flex-col gap-4'>
                    <div className='pt-4'>
                    <h2 className='text-lg text-green-600 '>1. Digital Crop Traceability</h2>
                    <ul>
                        <li>Digital Crop Tagging – Farmers register their biofortified crops with unique QR codes, NFC, or blockchain-based identifiers for easy tracking.</li>
                        <li>Geo-Mapping & Source Verification – Ensures biofortified crops are separated from non-biofortified varieties, improving supply chain integrity.</li>
                        <li>Real-Time Crop Tracking – A mobile-friendly dashboard allows stakeholders to monitor crop movements from farm to market.</li>
                    </ul>
                    </div>

                    <div className='pt-4'>
                    <h2 className='text-lg text-green-600 '>2. AI-Powered Quality Control</h2>
                    <ul>
                        <li>AI-Based Verification – Uses image recognition and digital records to identify and certify biofortified crops.</li>
                        <li>Automated Compliance Alerts – Farmers and aggregators receive real-time notifications on quality control checks and best practices.</li>
                        <li>Data-Driven Reports – Generates detailed insights on biofortification trends, compliance status, and market demand.</li>
                    </ul>
                    </div>

                    <div className='pt-4'>
                    <h2 className='text-lg text-green-600 '>3. Smart Market Linkages</h2>
                    <ul>
                        <li> Buyer-Seller Matching – Farmers get direct access to verified buyers, aggregators, and retailers, ensuring fair pricing..</li>
                        <li>E-Commerce for Bulk Buyers – Institutions like schools, hospitals, and food processors can source biofortified crops easily.</li>
                        <li>Market Price Monitoring – Displays real-time price updates of biofortified and conventional crops, helping farmers negotiate better deals.</li>
                    </ul>
                    </div>

                    <div className='pt-4'>
                    <h2 className='text-lg text-green-600 '>4. Farmer Empowerment & Training </h2>
                    <ul>
                        <li>Digital Farmer Networks – A community platform for knowledge sharing, training, and financial/technical support.</li>
                        <li>Biofortified Crop Management System – Provides storage, handling, and distribution guidelines to reduce crop mixing.</li>
                        <li>Training Hub – Access to educational materials and best practices for improving biofortified crop production.</li>
                    </ul>
                    </div>

                    <div className='pt-4'>
                    <h2 className='text-lg text-green-600 '>5. Supply Chain Transparency & Compliance</h2>
                    <ul>
                        <li>Instant Certification Uploads – Farmers can upload verification documents to prove compliance with biofortification standards.</li>
                        <li>Supply Chain Visibility – Stakeholders can track farm-to-market movements via a real-time dashboard.</li>
                        <li>QR Code Scanner – Buyers can scan and verify crop authenticity, ensuring they receive high-quality, biofortified produce.</li>
                    </ul>
                    </div>

                    <Link to="/dashboard">
                            <Button className="w-11/12 md:w-56 mt-14 mx-auto" gradientDuoTone="greenToBlue">Join US Today!</Button>
                        </Link>
                </div>
            </div>
            </div>
        </div>
    );
}
