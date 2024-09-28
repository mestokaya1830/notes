import Link from 'next/link'
import React from 'react'

export const getUsers = async () => {
  //to test cach npm run build and npm run start
  const result = await fetch('https://jsonplaceholder.typicode.com/users')
  // const result = await fetch('https://jsonplaceholder.typicode.com/users', {cache: "no-cache"})
  // const result = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 10}})//10 seconds cache
  return result.json()
}
let num = 0
export default async function Users() {
  const users = await getUsers()
  // console.log(users)
  // console.log(num += 1)
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(item => (
          <li key={item.id}>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span>{item.email}</span>
            <span><Link href={`/admin/users/${item.id}`}>Details</Link></span>
          </li>
        ))}
      </ul>
    </>
  )
}
