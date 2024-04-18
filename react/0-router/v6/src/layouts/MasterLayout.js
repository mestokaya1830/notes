import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function MasterLayour() {
  return (
    <div>
      <Navbar />
      <main className='router'>
        <Outlet />
      </main>
    </div>
  )
}

export default MasterLayour
