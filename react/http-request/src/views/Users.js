import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

function Users() {
  const Users = useLoaderData()
  console.log(Users)
  return (
    <div>
      <h2>Users List</h2>
      <div className='list'>
        {Users.map(item => (
          <div key={item.id}>
            <Link to={`/users/${item.id}`} className='user-list'>
              <span className='list-items'>{item.id}</span>
              <span className='list-items'>{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users

export const getUsers = async() => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users')
  const final =  await result.json()
  return final
}