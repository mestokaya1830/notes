import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <>
      <Link href="/" className="link">Home</Link>
      <Link href="/about" className="link">About</Link>
      <Link href="/admin" className="link">Admin</Link>
      <Link href="/admin/users" className="link">Users</Link>
      <Link href="/admin/profile" className="link">Profile</Link>
      <Link href="/auth/login" className="link">Login</Link>
      <Link href="/auth/register" className="link">Register</Link>
    </>
  )
}
