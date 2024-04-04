import { Link, Outlet } from 'react-router-dom'

export const Admin = () => {
  return (
    <>
    <div>
      <h2>Admin Page</h2>
    </div>
    <nav>
      <Link to = "users">Users</Link>
      <Link to = "settings">Settings</Link>
    </nav>
    <Outlet />
    </>
  )
}

