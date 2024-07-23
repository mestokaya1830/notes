import React from 'react'
import { NavLink } from 'react-router-dom'

export default function navbar() {
  return (
    <>
      <nav className='navbar'>
        <div>
          <NavLink to="/" className="links">Home</NavLink>
          <NavLink to="/about" className="links">About</NavLink>
          <NavLink to="/contact" className="links">Contact</NavLink>
        </div>
      </nav>
    </>
  )
}
