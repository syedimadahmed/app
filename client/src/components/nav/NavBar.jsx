import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <nav className='flex justify-between p-4 bg-black text-white'>
      <NavLink to='/'>
        Student Accomadation Request Portal
      </NavLink>
      <div className='flex gap-4'>
        <NavLink to='/dashboard'>
          Dashboard
        </NavLink>
        <NavLink to='/login'>
          Login
        </NavLink>
        <NavLink to='/register'>
          Register
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar