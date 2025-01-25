"use client"

import React from "react";
import { useState } from "react";

export default function Create() {
  const [user, setUser] = useState()

  const handleInput = (e) => {
    setUser(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  
  const addUser = (e) => {
    e.preventDefault()
    console.log(user)
  }
  return (
    <>
      <h1>Create Post</h1>
      <form onSubmit={addUser}>
          <input type="text" name="username" placeholder="Username" onChange={handleInput} />
          <input type="text" name="password" placeholder="Password" onChange={handleInput}/>
          <input type="submit" value="Create User"/>
      </form>
    </>
  );
}
