"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' 

export default function Navbar() {
  const pathName  = usePathname()

  return (
    <>
    <nav className='navbar'>
      <Link href="/" className={pathName == '/' ? 'active' : "links"}>Home</Link>
      <Link href="/about" className={pathName == '/about' ? 'active' : "links"}>About</Link>
      <Link href="/admin" className={pathName == '/admin' ? 'active' : "links"}>Admin</Link>
      <Link href="/admin/users" className={pathName == '/users' ? 'active' : "links"}>Users</Link>
      <Link href="/auth/login" className={pathName == '/login' ? 'active' : "links"}>Login</Link>
      <Link href="/auth/register" className={pathName == '/register' ? 'active' : "links"}>Register</Link>
    </nav>
    </>
  )
}
