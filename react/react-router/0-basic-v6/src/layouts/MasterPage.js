import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
function MasterPage() {
  return (
    <div>
      <Navbar />
      <main className='router'>
        <Outlet />
      </main>
    </div>
  )
}

export default MasterPage
