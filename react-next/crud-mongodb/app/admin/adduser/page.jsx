"use client";
import React from 'react'
import { useState } from 'react'


export default function Users() {
  const [user, setUser] = useState(null)
  
  const handleInput = (e) => {
    setUser(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const addUser = async(e) => {
    e.preventDefault()
    const result = await fetch('http://localhost:3000/api/users', {
      method:"POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(user)
    })
  }
  return (
    <>
      <h1>Users</h1>
      <form onSubmit={addUser}>
        <input type="text" name='username' onChange={handleInput} />
        <input type="text" name='password' onChange={handleInput} />
        <button type='submit'>Add User</button>
      </form>
    </>
  )
}
