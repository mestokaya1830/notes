import React from 'react'
import { NavLink } from 'react-router-dom'

export default function navbar() {
  return (
    <div>
      <nav className='navbar'>
        <NavLink to="/" className="links">Home</NavLink>
        <NavLink to="/about" className="links">About</NavLink>
        <NavLink to="/contact" className="links">Contact</NavLink>
        <NavLink to="/admin" className="links">Admin</NavLink>
      </nav>
    </div>
  )
}
