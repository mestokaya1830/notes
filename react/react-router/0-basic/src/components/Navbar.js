import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="navlink">Home</NavLink>
      <NavLink to="/login" className="navlink">Login</NavLink>
      <NavLink to="/register" className="navlink">Register</NavLink>
    </nav>
  )
}

export default Navbar
