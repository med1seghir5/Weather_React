import React from 'react'
import { Link } from 'react-router-dom';

export default function FirstPage() {
  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-r h-screen from-[#47BBE1] to-[#0093D1] '>
      <div className='font-poppins font-bold text-center text-7xl text-white sm:font-poppins sm:font-bold sm:text-7xl sm:text-white'>
        Weather App
      </div>
      <div>
        <img src='./Pic/sun.svg' alt='logo' className='h-56'/>
      </div>
      <div>
        <Link to="/Weather.jsx">
        <button className='rounded-xl w-36 h-7 font-poppins font-semibold bg-[#ffff] text-[#0093D1] sm:rounded-xl sm:w-40'>click</button>
        </Link>
      </div>
    </div> 
  )
}

