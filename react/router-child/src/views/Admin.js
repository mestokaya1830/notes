import { Link, Outlet } from 'react-router-dom'

export const Admin = () => {
  return (
    <>
    <div>
      Admin Page
    </div>
    <nav>
      <Link to = "users">Users</Link>
      <Link to = "settings">Settings</Link>
    </nav>
    <Outlet />
    </>
  )
}

