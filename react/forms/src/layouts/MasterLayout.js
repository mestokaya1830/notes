import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
function MasterLayout() {
  return (
    <div>
      <Navbar />
      <main className='router'>
        <Outlet />
      </main>
    </div>
  )
}

export default MasterLayout
