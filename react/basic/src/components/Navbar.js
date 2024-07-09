import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <NavLink to="/" className="links" >Home</NavLink>
      <NavLink to="/props" className="links" >Props</NavLink>
      <NavLink to="/list" className="links" >List</NavLink>
      <NavLink to="/admin" className="links" >Admin</NavLink>
    </div>
  )
}
