"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Details() {
  const { id } = useParams();
  const router = useRouter();
  const [user, setUser] = useState(null);

   //handle inputs
   const handleInput = (e) => {
    setUser(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const getUser = () => {
    axios.get("http://localhost:4000/users/" + id).then((data) => {
      setUser(data.data.result);
    });
  };

  const updatePassword = () => {
    console.log(user)
    axios.put("http://localhost:4000/updateuser/" + id, {password:user.password}).then((data) => {
      console.log(data)
    });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <h1>User Details</h1>
      <ul>
        <li>
          <span>{user && user[0].id}</span>
          <span>{user && user[0].username}</span>
          <span><input type="text" name="password" defaultValue={user && user[0].password} onChange={handleInput} /></span>
        </li>
      </ul>
      <button onClick={router.back}>Back</button>
      <button onClick={updatePassword}>Update</button>
    </>
  );
}
