import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

export default function HowItWorks() {
   return (
        <div className="w-full bg-gray-50 ">
            <div className="block md:flex gap-5 w-11/12 md:w-10/12 pt-16 mx-auto">
            <div className='flex-1 leading-relaxed'>
                <h2 className='font-bold text-2xl text-green-600 text-center pb-5'>Welcome to EcoTrack Africa.
                </h2>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row gap-6'>
                        <img src={img1} className='w-auto h-72'/>
                    <p>
                    EcoTrack Africa is a platform dedicated to transforming  waste management  and environmental monitoring  across Africa. By leveraging AI, satellite imagery , and real-time data, we provide actionable insights that empower urban planners, environmental agencies, and communities to make informed decisions for a cleaner and more sustainable future.
                    </p>
                    </div>
                    <h2 className='font-bold text-2xl text-green-600 text-center pb-5 pt-5'>How It Works:</h2>
                    <h2 className='font-bold text-2xl text-green-600'>:: Data Collection & Integration
                    </h2>
                    <p>
                    Uses satellite imagery and Earth observation data from Landsat, Sentinel, and Google Earth Engine for remote sensing.Incorporates public APIs like OpenStreetMap, municipal records, and crowdsourced data to enhance accuracy.Fuses historical and real-time data to detect waste hotspots and environmental changes.
                    </p>
                    <h2 className='font-bold text-lg text-green-600'>:: AI-Powered Waste Hotspot Detection
                    </h2>
                    <div className='flex flex-row gap-6'>
                    <p>
                    AI/ML models analyze spatial and temporal waste accumulation patterns.Predicts illegal dumping zones, tracks air pollution, and monitors land cover changes.Ensures high accuracy by integrating multi-source data validation techniques.
                    </p>
                        <img src={img3} className='w-auto h-72'/>
                    </div>
                    <h2 className='font-bold text-lg text-green-600'>:: User-Friendly & AI-Assisted Insights
                    </h2>
                    <p>
                    A simple dashboard provides real-time visualizations, predictive analytics, and automated reports.Users can import custom datasets and use AI assistants to generate insights.Designed for ease of use by city officials, environmentalists, and researchers.
                    </p>
                    <h2 className='font-bold text-lg text-green-600'>:: Community Engagement & Actionable Insights
                    </h2>
                    <div className='flex flex-row gap-6'>
                        <img src={img2} className='w-auto h-72'/>
                        <p>
                    Empowers citizens and environmental agencies to collaborate through real-time data sharing.
                    Helps policymakers take proactive steps in waste management before issues escalate.
                    </p>
                    </div>
                    <h2 className='font-bold text-lg text-green-600'>:: Sustainability & Impact
                    </h2>
                    <p>
                    Reduces carbon emissions by optimizing waste management strategies.Supports urban resilience and sustainability through data-driven decision-making.Enhances public health by minimizing pollution exposure in high-risk areas.Target Market & StrategyFocuses on urban centers and cities like Nairobi, Lagos, Johannesburg, and Cairo.Partners with municipalities, waste management companies, and environmental organizations.Aims to capture 10% of the urban waste management sector, valued at approximately $300 million.
                    </p>
                    <h2 className='font-bold text-lg text-green-600'>:: Competitive Advantage</h2>
                    <p>
                    Unlike standalone satellite tools like Landsat and Sentinel, EcoTrack Africa integrates AI-powered waste prediction, real-time monitoring, and public engagement in one platform.Combines satellite data, municipal records, and crowdsourced reports for high-accuracy environmental monitoring.Provides automated insights that allow cities to act before waste and pollution become a crisis.EcoTrack Africa is shaping the future of smart waste hotspot and  environmental monitoring, making African cities cleaner, healthier, and more sustainable
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
}
