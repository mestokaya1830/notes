import React from 'react'
import { Link } from 'react-router-dom'
function Users() {
  const Users = [
    {id:1, name:"Mesto", age: 30},
    {id:2, name:"Ali", age:39},
    {id:13, name:"Sahin",age: 23}
  ]
  return (
    <div className='user-con'>
      <h2>User List</h2>
      <div className='user-wrapper'>
        {Users.map(item => (
          <Link key={item.id} className='user-list' to = {`users/${item.id}`}>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span>{item.age}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Users
