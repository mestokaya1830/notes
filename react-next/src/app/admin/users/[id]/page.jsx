import React from 'react'
import { getUsers } from '../page' //this com from page-cache

export default async function Details({params}) {
  const users = await getUsers()
  const user = users.filter(item => item.id == params.id)[0]
  return (
    <>
      <h1>User Details</h1>
      <ul>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.username}</li>
        <li>{user.email}</li>
      </ul>
    </>
  )
}