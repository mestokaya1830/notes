import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Admin() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav className='navbar'>
        <Link to="admin" className='links'>Users</Link>
        <Link to="settings" className='links'>Settings</Link>
      </nav>
      <main className='router'>
        <Outlet />
      </main>
    </div>
  )
}

export default Admin
