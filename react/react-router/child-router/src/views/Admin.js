import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function Admin() {
  return (
    <div>
      <div>
        <NavLink to="users">Users</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default Admin
