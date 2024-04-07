import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function Admin() {
  return (
    <div className='dashboard'>
      <nav className='dashboard-nav'>
        <NavLink to="/admin/users" className="navlink">Users</NavLink>
        <NavLink to="/admin/settings" className="navlink">Settings</NavLink>
      </nav>
      <div className="dashboard-side">
        <Outlet />
      </div>
    </div>
  )
}

export default Admin
