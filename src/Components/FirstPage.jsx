import React from 'react'
import { Link } from 'react-router-dom';

export default function FirstPage() {
  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-r h-screen pl-40 from-[#47BBE1] to-[#0093D1] '>
      <div className='font-poppins font-bold text-7xl text-white'>
        Weather App
      </div>
      <div>
        <img src='./Pic/sun.svg' alt='logo' className='h-56'/>
      </div>
      <div>
        <Link to="/Weather.jsx">
        <button className='rounded-xl bg-white w-24'>click</button>
        </Link>
      </div>
    </div> 
  )
}

