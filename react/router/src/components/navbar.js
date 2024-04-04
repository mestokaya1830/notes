import { NavLink } from 'react-router-dom'

export const Navbar  = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="users">Users</NavLink>
    </nav>
  )
}