'use client';
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  return (
    <>
      <nav className='navbar'>
        <Link href='/' className={`links ${pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link href='/about' className={`links ${pathname === '/about' ? 'active' : ''}`}>About</Link>
        <Link href='/admin' className={`links ${pathname === '/admin' ? 'active' : ''}`}>Admin</Link>
        <Link href='/admin/users' className={`links ${pathname === '/admin/users' ? 'active' : ''}`}>Users</Link>
        <Link href='/errortest' className={`links ${pathname === '/errortest' ? 'active' : ''}`}>Error Test</Link>
      </nav>
    </>
  )
}
