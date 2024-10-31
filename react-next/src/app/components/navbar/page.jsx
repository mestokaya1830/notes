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
        <Link href="/fetch" className={activePath === '/fetch' ? 'active' : 'links'}>Fetch</Link>
      </nav>
    </>
  )
}
