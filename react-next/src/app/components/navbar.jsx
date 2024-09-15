"use client";
import Link from 'next/link'
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname()
  return (
    <>
      <nav className="navbar">
        <Link href="/" className={pathname == '/' ? 'active' : 'links'}>Home</Link>
        <Link href="/admin" className={pathname == '/admin' ? 'active' : 'links'}>Admin</Link>
        <Link href="/admin/users" className={pathname == '/admin/users' ? 'active' : 'links'}>Users</Link>
        <Link href="/admin/photos" className={pathname == '/admin/users' ? 'active' : 'links'}>Photos</Link>
      </nav>
    </>
  )
}
