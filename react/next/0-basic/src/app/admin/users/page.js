import React from 'react'
import Link from 'next/link'

export const metadata = {
  title:'Users'
}
export default function Users() {
  return (
    <>
      <h1>Users</h1>
      <ul>
        <li><Link href="/admin/users/1">User 1</Link></li>
        <li><Link href="/admin/users/2">User 2</Link></li>
        <li><Link href="/admin/users/3">User 3</Link></li>
        <li><Link href="/admin/users/4">User 4</Link></li>
      </ul>
     
    </>
  )
}
