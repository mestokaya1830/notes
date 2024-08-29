import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="links">Home</NavLink>
        <NavLink to="/inline" className="links">Inline</NavLink>
        <NavLink to="/method" className="links">Method</NavLink>
        <NavLink to="/rest-method" className="links">Rest Method</NavLink>
      </nav>
    </>
  )
}

