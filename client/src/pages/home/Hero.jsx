import React from 'react'
import {NavLink} from 'react-router'

const Hero = () => {
  return (
    <div className='py-16 px-4 text-center'>
        <div className='max-w-[700px] mx-auto'>
        <h2 className='text-4xl font-bold mb-4'>Simplify your academic accomadations</h2>
        <p className='max-w-[600px] mx-auto text-lg text-gray-600 mb-8'>Unlock your potential with the Student Accomadation Platform. Built for Students, By Students.</p>
        <button><NavLink to='login' className='p-4 bg-blue-500 text-white'>Get Started</NavLink></button>
        </div>
    </div>
  )
}

export default Hero