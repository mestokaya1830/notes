import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <Link href="/" className='links'>Home</Link>
        <Link href="/admin" className='links'>Admin</Link>
        <Link href="/admin/users" className='links'>Fetch Api</Link>
        <Link href="/admin/persons" className='links'>Fetch File</Link>
        <Link href="/admin/segment" className='links'>Segment Route</Link>
      </nav>
    </>
  )
}
