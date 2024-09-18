import React from 'react'

const getUsers = async() => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users')
  return await result.json()
}

export default async function Users() {
 const users =  await getUsers()
  return (
    <>
      <h1>Fetch Api</h1>
      <ul>
        {users.map(item => (
          <li key={item.id}>
            <span>{item.id}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
