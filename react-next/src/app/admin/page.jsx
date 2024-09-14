import Link from 'next/link'
import Persons from './persons.json'

export default function Admin() {
  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        {Persons.map(item => 
          <li key={item.index}>
            <span>{item.name}</span>
            <span>{item.dep}</span>
            <span><Link href={`admin/${item.index}`}>Details</Link></span>
          </li>
        )}
      </ul>
    </>
  )
}
