import React from 'react'
import { NavLink } from 'react-router'

const Login = () => {
  return (
    <div className='min-h-screen py-16'>
      <h1 className='text-center'>Login</h1>
      <form className='flex flex-col max-w-[350px] mx-auto'>
        <label className='py-2'>Username:</label>
        <input className='border-gray-300 border-[0.75px] p-2' />
        <label className='py-2'>Password:</label>
        <input className='border-gray-300 border-[0.75px] p-2' />
        <button className='p-2 mt-4 bg-blue-500 text-white'>Login</button>
        <p className='text-center text-gray-500'>Dont have an account? <NavLink to='/register' className='text-blue-500'>Register</NavLink></p>
      </form>
    </div>
  )
}

export default Login