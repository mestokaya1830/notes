import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <NavLink to="/" className="links">Home</NavLink>
        <NavLink to="about" className="links">About</NavLink>
        <NavLink to="contact" className="links">Contact</NavLink>
        <NavLink to="users" className="links">Users</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
