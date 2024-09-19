import React from 'react'
import Link from 'next/link'

//exporting is for details page 
export const getUsers = async() => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users')//force-cache
  // const result = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'})
  // const result = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-cache'})
  // const result = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 30}})//10 second cache
  return await result.json()
}

export default async function Users() {
  await new Promise(resolve => setTimeout(resolve, 2000))
 const users =  await getUsers()
 console.log(users)
  return (
    <>
      <h1>Fetch Api</h1>
      <ul>
        {users.map(item => (
          <li key={item.id}>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span><Link href={`/admin/users/${item.id}`}>Details</Link></span>
          </li>
        ))}
      </ul>
    </>
  )
}
