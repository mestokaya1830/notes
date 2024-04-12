import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <NavLink to ="/" className="link">Home</NavLink>
        <NavLink to ="users" className="link">Users</NavLink>
      </nav>
    </div>
  )
}

export default Navbar