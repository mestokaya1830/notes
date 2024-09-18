import React from 'react'
import PersonFile from '@/persons.json'
import Link from 'next/link'

export default function Persons() {
  return (
    <>
      <h1>Fetch File</h1>
      <ul>
        {PersonFile.map(item => (
          <li key={item.index}>
            <span>{item.index}</span>
            <span>{item.name}</span>
            <span>{item.age}</span>
            <span>{item.gender}</span>
            <span><Link href={`/admin/persons/${item.index}`}>Details</Link></span>
          </li>
        ))}
      </ul>
    </>
  )
}
