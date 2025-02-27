import React from 'react';
import { Button,Label, Textarea, TextInput } from "flowbite-react";
import logo from '../assets/banner7.jpg';
const ContactPage = () => {
    return (
        <div>
            <div className='block md:flex w-11/12 mx-auto gap-10 mt-5 mb-10'>
            <div className='flex-1'>
                <img src={logo} className=' rounded-b-md hidden md:block'/>
            </div>
            <div className='flex-1'>
                <h2 className='text-green-700 font-bold text-3xl pt-4'>Let's Get In Touch!</h2>
                <form className='flex flex-col gap-4 mt-4'>
                    <div className='block md:flex gap-5'>
                        <div className='flex flex-col gap-2 flex-1'>
                        <Label htmlFor="firstName" value="First Name" />
                            <div className='flex-1'>
                            <TextInput id="firstName" type="text" placeholder="Enter your First Name" required />
                            </div>                        
                        </div>
                        <div className='flex flex-col gap-2 flex-1'>
                        <Label htmlFor="lastName" value="Last Name" />
                        <div className='flex-1'>
                        <TextInput id="lastName" type="text" placeholder="Enter your Last Name" required />
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="email" value="Email Address" />
                        <TextInput id="email" type="email" placeholder="Enter your email address" required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="phone" value="Phone Number" />
                        <TextInput id="phone" type="phone" placeholder="Enter your Phone Number" required />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="message" value="Message" />
                        <Textarea id="email" type="email" placeholder="Hello LISHETrack..." className='h-36' required />
                    </div>
                    <Button type='submit' gradientDuoTone='greenToBlue'>Submit</Button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default ContactPage;