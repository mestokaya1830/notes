'use client'
import { usePathname } from "next/navigation"
import Link  from "next/link"

export default function Navbar() {
  const activePath = usePathname()
  return (
    <>
      <nav className="navbar">
        <Link href="/" className={activePath === '/' ? 'active' : 'links'}>Home</Link>
        <Link href="/image" className={activePath === '/image' ? 'active' : 'links'}>Images</Link>
        <Link href="/fetch-api" className={activePath === '/fetch-api' ? 'active' : 'links'}>Fetch Api</Link>
        <Link href="/load-file" className={activePath === '/load-file' ? 'active' : 'links'}>Load File</Link>
        <Link href="/form" className={activePath === '/form' ? 'active' : 'links'}>Form</Link>
        <Link href="/rewrite" className={activePath === '/rewrite' ? 'active' : 'links'}>Rewrite</Link>
        <Link href="/admin" className={activePath === '/admin' ? 'active' : 'links'}>Dashboard</Link>
      </nav>
    </>
  )
}
