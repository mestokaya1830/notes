import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav className='navbar'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
