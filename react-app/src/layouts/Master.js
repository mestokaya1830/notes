import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Master() {
  return (
    <>
      <Navbar />
      <main className='router'>
        <Outlet />
      </main>
    </>
  )
}

export default Master
