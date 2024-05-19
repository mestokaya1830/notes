import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <NavLink to='/' className="links">Home</NavLink>
        <NavLink to='admin' className="links">Admin</NavLink>
        <NavLink to='usestate' className="links">useState</NavLink>
        <NavLink to='useeffect' className="links">useEffect</NavLink>
      </nav>
    </>
  )
}

export default Navbar
