import React from 'react'
import { NavLink } from 'react-router-dom'

export default function navbar() {
  return (
    <div>
      <nav className='navbar'>
        <NavLink to="/" className="links">Home</NavLink>
        <NavLink to="/admin/users" className="links">Users</NavLink>
        <NavLink to="/admin/settings" className="links">Settings</NavLink>
      </nav>
    </div>
  )
}
