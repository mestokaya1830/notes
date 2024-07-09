import React from 'react'

export default function list() {
  const users = [
    {id:1, name:'Mustafa',salary: 3000},
    {id:2, name:'Deniz',salary: 4000},
    {id:3, name:'Faruk',salary: 3000}
  ]
  return (
    <>
      <h1>List</h1>
      <ul>
       { users.map(item => 
        <li key={item.id}>
          <span>{item.id}</span>
          <span>{item.name}</span>
          <span>{item.salary}</span>
        </li>
       )}
      </ul>
    </>
  )
}
