import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <NavLink to="/" className="links">Home</NavLink>
        <NavLink to="admin" className="links">Admin</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
