//for active links
import { NavLink } from 'react-router-dom'

export const Navbar  = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="admin">Admin</NavLink>
    </nav>
  )
}

//for normal links
// import { Link } from 'react-router-dom'

// export const Navbar  = () => {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="users">Users</Link>
//     </nav>
//   )
// }