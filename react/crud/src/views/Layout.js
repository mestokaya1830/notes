import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar.js'

export default function layout() {
  return (
    <>
    <Navbar />
    <main className='router'>
      <Outlet />
    </main>
    </>
  )
}
