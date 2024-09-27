import Link from 'next/link'

export default function Navbar() {
  return (
    <dv>
      <nav className='navbar'>
        <Link href="/" className='links'>Home</Link>
        <Link href="/admin" className='links'>Admin</Link>
        <Link href="/admin/users" className='links'>Users</Link>
      </nav>
    </dv>
  )
}
