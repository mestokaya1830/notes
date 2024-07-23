import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../../views/components/navbar.js";

export default function layout() {
  return (
    <>
    <Navbar />
    <div className='router'>
      <Outlet />
    </div>
    </>
  )
}
