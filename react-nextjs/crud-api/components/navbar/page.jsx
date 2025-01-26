"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathName = usePathname()
  return (
    <>
      <nav className='navbar'>
        <Link href="/" className={pathName === '/' ? "active" : "links"}>Home</Link>
        <Link href="/users" className={pathName === '/users' ? "active" : "links"}>Users</Link>
      </nav>
    </>
  )
}
