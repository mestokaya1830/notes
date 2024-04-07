import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="navlink">Home</NavLink>
      <NavLink to="/users" className="navlink">Users</NavLink>
    </nav>
  )
}

export default Navbar
