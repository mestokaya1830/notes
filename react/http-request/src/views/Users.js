import React from 'react'
import { useLoaderData } from 'react-router-dom'

export const getUsers = async() => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users')
  // const final = await result.json()
  return result.json()
}


function Users() {
  const Users = useLoaderData()
  return (
    <div>
      <h2>Users</h2>

      {Users.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

export default Users

