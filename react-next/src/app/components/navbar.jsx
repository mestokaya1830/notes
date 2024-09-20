import Link from 'next/link'
import React from 'react'
import { cookies } from 'next/headers'

export default function Navbar() {
  const cookieStore = cookies()
  cookieStore.has('theme') ? console.log(cookieStore.getAll()) : console.log('No Cookie')
 
  return (
    <>
      <nav className='navbar'>
        <Link href="/" className='links'>Home</Link>
        <Link href="/contact" className='links'>Contact</Link>
        <Link href="/images" className='links'>Images</Link>
        <Link href="/fonts" className='links'>Fonts</Link>
        <Link href="/admin" className='links'>Admin</Link>
        <Link href="/admin/users" className='links'>Fetch Api</Link>
        <Link href="/admin/persons" className='links'>Fetch File</Link>
        <Link href="/admin/segment" className='links'>Segment Route</Link>
        <Link href="/admin/cookie" className='links'>Cookie</Link>
      </nav>
    </>
  )
}
