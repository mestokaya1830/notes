"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <>
      <nav className="navbar">
        <Link href="/" className={pathName === '/' ? "active" : "links"} >Home</Link>
      </nav>
    </>
  )
}
