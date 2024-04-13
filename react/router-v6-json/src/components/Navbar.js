import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="about" className="link">About</NavLink>
        <NavLink to="contact" className="link">Contact</NavLink>
        <NavLink to="admin" className="link">Admin</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
