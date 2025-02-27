import React from 'react'
import banner5 from '../assets/banner5.jpg';

const TrackCrops = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <img src={banner5} className='w-full h-96 object-cover'/>
            </div>
            <div>
                <h2 className='text-green-600 font-semibold text-2xl pt-10 pb-4 text-center'> Track Your Crops with LISHETrack</h2>
                <h2 className='text-green-600 font-semibold pb-4 text-center'>Ensure Transparency, Quality, and Safety from Farm to Market</h2>
                <p className='text-center leading-relaxed pb-4'>
                LISHETrack provides a robust digital traceability system that enables farmers, suppliers, and buyers to track biofortified crops at every stage—from planting to harvesting and distribution. With our AI-powered verification, you can ensure that your produce meets the highest quality standards while enhancing consumer trust.
                </p>

                <div>
                <h2 className='text-green-600 font-semibold pb-2 text-xl'>How It Works</h2>
                <h3 className='text-green-600 font-semibold pb-2 text-lg'>Step 1: Register Your Farm
                </h3>
                <p>
                Sign up and provide details about your farm, including location, crop type, and planting date
                </p>
                </div>

                <div>
                <h2 className='text-green-600 font-semibold pt-4 text-lg'>Step 2: Input Crop Data</h2>
                <p>
                Record essential crop growth data such as fertilization, irrigation, and disease management.
                </p>
                </div>

                <div>
                <h2 className='text-green-600 font-semibold pt-4 text-lg'>Step 3: AI-Based Verification</h2>
                <p>
                Our system cross-checks data with satellite imagery, weather conditions, and expert insights to verify crop health.
                </p>
                </div>

                <div>
                <h2 className='text-green-600 font-semibold pt-4 text-lg'>Step 4: Harvest & Market Integration</h2>
                <p>
                Once harvested, your crops are added to the LISHETrack marketplace, where buyers can view verified quality reports and make informed purchasing decisions.
                </p>
                </div>

                <div>
                <h2 className='text-green-600 font-semibold pt-5 text-xl'>Why Use LISHETrack?</h2>
                <h3 className='text-green-600 font-semibold pb-2 text-lg'>For Farmers:</h3>
                <ul>
                    <li>Get real-time insights into crop health.</li>
                    <li>Increase trust and transparency with buyers.</li>
                    <li>Boost profitability with quality-certified crops.</li>
                </ul>
                <h3 className='text-green-600 font-semibold pb-2 pt-5 text-lg'>For Buyers & Distributors:</h3>
                <ul>
                    <li>Ensure you purchase only high-quality biofortified crops.</li>
                    <li>Verify crop origin and farming practices before purchase.</li>
                    <li>Reduce risks associated with counterfeit or low-quality produce.</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default TrackCrops; 