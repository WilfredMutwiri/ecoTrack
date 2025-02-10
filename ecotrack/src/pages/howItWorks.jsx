import React from 'react'
import logoImg from '../assets/logo.png'

export default function HowItWorks() {
   return (
        <div className="w-full bg-gray-50 ">
            <div className="block md:flex gap-5 w-11/12 md:w-10/12 pt-16 mx-auto">
            <div className='flex-1 leading-relaxed'>
                <img src={logoImg} className='mx-auto w-[200px] h-[200px]'/>
                <h2 className='font-bold text-2xl text-green-600'>Welcome to EcoTrack Africa.
                </h2>
                <div className='flex flex-col gap-2'>
                    <p>
                    At EcoTrack Africa,we are dedicated to provide a platform for environmental monitoring and waste management across the continent. Our advanced AI technologies enable real-time analytics, waste hotspot tracking, and air pollution monitoring, empowering communities to take actionable steps towards sustainability. Join us in our mission to create a cleaner, greener Africa.
                    </p>
                    <h2 className='font-bold text-2xl text-green-600'>How It Works:</h2>
                    <p>
                    Eco Track Africa is a smart waste management platform that leverages AI/ML (Artificial Intelligence/Machine Learning), satellite technology, and real-time Earth observations to optimize waste collection and enhance sustainability in African cities.
                    </p>
                    <h2 className='font-bold text-2xl text-green-600'>How it operates::</h2>
                    <h2 className='font-bold text-lg text-green-600'>Real-Time Data Collection & Monitoring::</h2>
                    <p>
                    Uses satellite imagery and Earth observations to track waste accumulation and green recovery zones. Incorporates traffic data to optimize waste collection routes and minimize emissions.AI-Powered Optimization
                    </p>
                    <h2 className='font-bold text-lg text-green-600'>AI-Powered Optimization::</h2>
                    <p>
                    AI and ML analyze waste patterns to suggest the most efficient collection strategies.
                    Helps city planners, urban developers, and traffic engineers make data-driven decisions to improve waste management efficiency.
                    </p>
                    <h2 className='font-bold text-lg text-green-600'>Community Engagement & Reporting::</h2>
                    <p>
                    Empowers communities to report waste issues via a web and mobile application.
                    Increases community participation in waste management efforts.
                    </p>
                    <h2 className='font-bold text-lg text-green-600'>Sustainability & Impact::</h2>
                    <p>
                    Aims to reduce carbon emissions by optimizing collection routes.
                    Supports urban sustainability through data-driven waste management solutions.
                    </p>
                    <h2 className='font-bold text-lg text-green-600'>Target Market & Strategy::</h2>
                    <p>
                    Eco Track Africa focuses on urban centers like Nairobi, Lagos, Johannesburg, and Cairo, collaborating with municipalities, waste management companies, and environmental agencies. The goal is to capture 10% of the urban waste management sector, valued at approximately $300 million.
                    </p>
                    <h2 className='font-bold text-lg text-green-600'>Competitive Advantage::</h2>
                    <p>
                    The platform differentiates itself by combining advanced AI analytics, satellite data, and community engagement, offering actionable insights for sustainable and efficient waste management.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
}
