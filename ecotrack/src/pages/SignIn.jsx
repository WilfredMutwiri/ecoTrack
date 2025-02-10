import React, { useState,useEffect } from 'react'
import {Alert, Button, Label, Spinner, TextInput} from 'flowbite-react'
import logo from '../assets/logo.webp'
import { Link } from 'react-router-dom';
export default function SignIn(){
    const [welcomeText,setWelcomeText]=useState("");
    const [showPassword,setShowPassowrd]=useState(false);
        useEffect(()=>{
            const getTimeOfDay=()=>{
                const hours=new Date().getHours();
                if(hours<12){
                    return 'Good Morning, Welcome Back!'
                }else if (hours<18){
                    return 'Good Afternoon, Welcome Back!'
                }else{
                    return 'Good Evening, Welcome Back!'
                }
            };
            setWelcomeText(getTimeOfDay())
        },[])
  return (
        <div className="w-full">
            <hr/>
            <div className="block md:flex w-10/12 pt-10 md:pt-20 m-auto gap-5">
             <div className='flex-1'>
              <img src={logo} alt='login image'/>
            </div>
                <div className='flex-1 flex-col mt-5'>
                <h2 className='text-green-700 font-semibold text-lg md:text-xl'>{welcomeText}</h2>
                    <form className='flex flex-col gap-3 pt-2'>
                        <Label value='Email address'/>
                        <TextInput
                        placeholder='mark@gmail.com'
                        type='email'
                        id='email'
                        required
                        />
                        <Label value='Password'/>
                        <TextInput 
                        placeholder='*******' 
                        type={showPassword ? 'text': 'password'}
                        id='password'
                        required
                        />
                        <div className='flex gap-2 p-2'>
                            <input
                            type='checkbox'
                            id='showPasswordBox'
                            checked={showPassword}
                            onChange={()=>setShowPassowrd(!showPassword)}
                            />
                            <Label htmlFor='showPasswordBox'value='Show Password'/>
                        </div>
                        <Link to="/dashboard">
                        <Button  gradientDuoTone='greenToBlue'className='w-full'>
                            Submit
                        </Button>
                        </Link>
                    </form>
                    <p className='pt-3 text-sm'>
                        Don't have an account? <span className='text-green-600'><a href='/Signup'>Create Account</a></span>
                    </p>
                </div>
            </div>
        </div>
    );
}
