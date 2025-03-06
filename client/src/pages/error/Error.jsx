import React from 'react'
import {NavLink} from 'react-router'

const Error = () => {
  return (
    <div className='min-h-screen py-2 text-center'>
        <h1>Page Not Found</h1>
        <p>The page you requested could not be found. <NavLink to='/' className='text-blue-500'>Click here to go back home</NavLink></p>
    </div>
  )
}

export default Error