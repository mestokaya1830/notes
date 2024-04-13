import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Admin() {
  return (
    <div>
      <nav>
        <Link to="/admin" className='link'>User</Link>
        <Link to="settings" className='link'>Settings</Link>
      </nav>
      <main className='router'>
        <Outlet />
      </main>
    </div>
  )
}

export default Admin
