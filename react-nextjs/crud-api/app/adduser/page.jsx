import React from 'react'

export default function Adduser() {
  return (
    <>
      <h1>Add New User</h1>
      <form action="">
        <input type="text" name="username" placeholder='Username' />
        <input type="text" name="password" placeholder='Password' />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}
