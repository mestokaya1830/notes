import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="login" className="link">Form</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
