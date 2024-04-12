import { Outlet, NavLink } from 'react-router-dom'
function Admin() {
  return (
    <div>
      <main className='router'>
        <h2>Admin Dashboard</h2>
      <nav className='navbar'>
        <NavLink to="/admin">Users</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>
        <Outlet />
      </main>
    </div>
  )
}

export default Admin
