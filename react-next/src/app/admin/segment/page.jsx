import Link from 'next/link'
import React from 'react'

export default function Segment() {
  return (
    <>
      <h1>Segment Route</h1>
      <ul>
        <li><Link href="/admin/segment/2">With 1 Segment</Link></li>
        <li><Link href="/admin/segment/test/2">With 2 Segment</Link></li>
        <li><Link href="/admin/segment/test/test2/2">With 3 Segment</Link></li>
      </ul>
    </>
  )
}
