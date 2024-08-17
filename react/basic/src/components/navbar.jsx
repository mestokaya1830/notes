import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <NavLink to="/" className="links">Home</NavLink>
        <NavLink to="/input-single" className="links">Input Single</NavLink>
        <NavLink to="/input-multiple" className="links">Input Multiple</NavLink>
        <NavLink to="/submit" className="links">Submit</NavLink>
      </nav>
    </>
  )
}
