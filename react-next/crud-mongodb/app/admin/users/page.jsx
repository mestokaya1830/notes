import React from 'react'

const getUsers = async() => {
  const result = await fetch('http://localhost:3000/api/users')
  return result.json()
}
export default async function Users() {
  const Users = await getUsers()
  console.log(Users)
  return (
    <>
      <h1>Users</h1>
    </>
  )
}
