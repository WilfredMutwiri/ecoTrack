import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'
import banner4 from '../assets/banner4.jpg';
import maize from '../assets/maize.jpg';
import millet from '../assets/millet.jpg';
import wheat from '../assets/wheat.jpg';
import Sorghum from '../assets/sorghum.jpg';
import oats from '../assets/oats.jpg';

import beans from '../assets/beans.jpg';
import cowpeas from '../assets/cowpease.jpg';
import greengrams from '../assets/greengrams.jpg';
import pigeonpeas from '../assets/pigeonpeas.jpg';

import potatoes from '../assets/potatoes.jpg';
import cassava from '../assets/cassava.jpg';
import yams from '../assets/yams.jpg';

import carrots from '../assets/carrots.jpg';
import spinach from '../assets/spinacj.jpg';
import kale from '../assets/kale.jpg';
import managu from '../assets/managu.jpg';
import terere from '../assets/terere.jpg';



const MarketPlace = () => {


    const grainsData=()=>[
        {
            id:1,
            name:"Pro-Vitamin A Maize",
            price:"KES 3,500 per 90kg bag",
            image:maize
        },
        {
            id:2,
            name:"High-Iron Pearl Millet",
            price:"KES 2,800 per 50kg bag",
            image:millet
        },
        {
            id:3,
            name:"Zinc-Enriched Wheat",
            price:"KES 3,200 per 50kg bag",
            image:wheat
        },
        {
            id:4,
            name:"High-Zinc Sorghum",
            price:"KES 2,500 per 50kg bag",
            image:Sorghum
        },
        {
            id: 5,
            name: "Pro-Vitamin A Enriched Oats",
            price: "KES 3,800 per 50kg bag",
            image: oats
        }
    ]

    const legumesData=()=>[
        {
            id: 1,
            name: "High-Iron Beans",
            price: "KES 4,200 per 90kg bag",
            image:beans
        },
        {
            id: 2,
            name: "Zinc-Enriched Cowpeas",
            price: "KES 3,500 per 50kg bag",
            image:cowpeas
        },
        {
            id: 3,
            name: "Protein-Fortified Green Grams",
            price: "KES 3,800 per 50kg bag",
            image: greengrams
        },
        {
            id: 4,
            name: "High-Yielding Pigeon Peas",
            price: "KES 2,900 per 50kg bag",
            image:pigeonpeas
        }
    ]

    const rootCrops=()=>[
        {
            id: 6,
            name: "Vitamin A-Enriched Orange-Fleshed Sweet Potatoes",
            price: "KES 1,500 per 50kg sack",
            image: potatoes
        },
        {
            id: 7,
            name: "Beta-Carotene Rich Cassava",
            price: "KES 2,000 per 50kg sack",
            image: cassava
        },
        {
            id: 8,
            name: "High-Yielding Yellow Yams",
            price: "KES 2,800 per 50kg sack",
            image: yams
        },
        {
            id: 9,
            name: "Iron-Fortified Irish Potatoes",
            price: "KES 3,200 per 50kg sack",
            image: potatoes
        }
    ]

    const vegetables=()=>[
        {
            id: 11,
            name: "Vitamin A-Enriched Carrots",
            price: "KES 150 per kg",
            image: carrots
        },
        {
            id: 12,
            name: "Iron-Fortified Spinach",
            price: "KES 200 per kg",
            image: spinach
        },
        {
            id: 13,
            name: "Zinc-Enriched Kale (Sukuma Wiki)",
            price: "KES 180 per kg",
            image: kale
        },
        {
            id: 14,
            name: "High-Nutrient African Nightshade (Managu)",
            price: "KES 250 per kg",
            image: managu
        },
        {
            id: 15,
            name: "Protein-Rich Amaranth Leaves (Terere)",
            price: "KES 220 per kg",
            image: terere
        }
    ]
    return (
        <div className="w-full bg-gray-50 ">
            <div className="block gap-5 w-11/12 mx-auto">
                <div className='flex-1'>
                    <img src={banner4} className='w-[100%] h-96 object-cover'/>
                </div>
                <div>
                <h2 className='text-2xl pt-10 pb-4 text-center text-green-600 font-semibold'>Welcome to the LISHETrack Marketplace!</h2>  
                <p className='text-center pb-4 text-green-600 font-semibold'>Buy & Sell Verified Biofortified Crops with Ease!</p>
                <div className='pt-10'>
                    <h2 className='text-center pt-2 pb-2 font-semibold text-green-600'>Biofortified Maize & Grains</h2>
                    <div className='flex flex-row  justify-between gap-4 pt-5'>
                    {
                        grainsData().map((item,index)=>(
                            <div key={index} >
                                <img src={item.image} className='w-full object-cover h-56'/>
                                <div className='bg-gray-200 p-2 border-b-2 border-blue-600'>
                                <h2 className='text-green-600 font-semibold'>{item.name}</h2>
                                <h2>{item.price}</h2>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                {/* legumes */}
                <div className='pt-10'>
                    <h2 className='text-center pt-2 pb-2 font-semibold text-green-600'>Fortified Legumes & Pulses</h2>
                    <div className='flex flex-row  justify-between gap-4 pt-5'>
                    {
                        legumesData().map((item,index)=>(
                            <div key={index} >
                                <img src={item.image} className='w-full object-cover h-56'/>
                                <div className='bg-gray-200 p-2 border-b-2 border-blue-600'>
                                <h2 className='text-green-600 font-semibold'>{item.name}</h2>
                                <h2>{item.price}</h2>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                {/* root crops */}
                <div className='pt-10'>
                    <h2 className='text-center pt-2 pb-2 font-semibold text-green-600'>Fortified Legumes & Pulses</h2>
                    <div className='flex flex-row  justify-between gap-4 pt-5'>
                    {
                        rootCrops().map((item,index)=>(
                            <div key={index} >
                                <img src={item.image} className='w-full object-cover h-56'/>
                                <div className='bg-gray-200 p-2 border-b-2 border-blue-600'>
                                <h2 className='text-green-600 font-semibold'>{item.name}</h2>
                                <h2>{item.price}</h2>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                {/* vegetables */}
                <div className='pt-10'>
                    <h2 className='text-center pt-2 pb-2 font-semibold text-green-600'>Fortified Legumes & Pulses</h2>
                    <div className='flex flex-row  justify-between gap-4 pt-5'>
                    {
                        vegetables().map((item,index)=>(
                            <div key={index} >
                                <img src={item.image} className='w-full object-cover h-56'/>
                                <div className='bg-gray-200 p-2 border-b-2 border-blue-600'>
                                <h2 className='text-green-600 font-semibold'>{item.name}</h2>
                                <h2>{item.price}</h2>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MarketPlace;