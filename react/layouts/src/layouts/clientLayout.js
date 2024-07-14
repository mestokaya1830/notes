import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'

export default function home() {
  return (
    <>
      <Navbar />
      <main className='router'>
        <Outlet />
      </main>
    </>
  )
}
