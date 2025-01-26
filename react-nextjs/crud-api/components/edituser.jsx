
"use client";
import React from "react";
import {useRouter } from "next/navigation";
import { useState } from "react";

export default function Edituser({id, username, password}) {
  const router = useRouter();
  const [userPassword, setUserPassword] = useState(null);

   //handle inputs
   const handleInput = (e) => {
    setUserPassword(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const updatePassword = async () => {
    await fetch("http://localhost:3000/api/users?id=" + id, {
      method: 'PUT',
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body:JSON.stringify(userPassword)
    })
  }

  return (
    <>
      <h1>User Details</h1>
      <ul>
        <li>
          <span>{id}</span>
          <span>{username}</span>
          <span><input type="text" name="password" defaultValue={password} onChange={handleInput} /></span>
        </li>
      </ul>
      <button onClick={router.back}>Back</button>
      <button onClick={updatePassword}>Update</button>
    </>
  );
}