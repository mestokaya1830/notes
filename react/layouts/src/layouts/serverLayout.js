import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/adminNavbar'

export default function serverLayout() {
  return (
    <>
      <AdminNavbar />
      <main className='router'>
        <Outlet />
      </main>
    </>
  )
}
