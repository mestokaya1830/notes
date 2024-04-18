import React from 'react'
import { Link } from 'react-router-dom'
function Users() {
  const users = [
    {id: 1, name: 'Mesto'},
    {id: 2, name: 'Filiz'},
    {id: 3, name: 'Bidik'},
    {id: 4, name: 'Helo'},
    {id: 5, name: 'Ilos'}
  ]
  return (
    <div>
        {users.map(item => (
          <div key={item.id}>
          <Link to={`users/${item.id}`} className='list'>
            <span className='list-items'>{item.id}</span>
            <span className='list-items'>{item.name}</span>
            </Link>
        </div>
        ))}
    </div>
  )
}

export default Users
