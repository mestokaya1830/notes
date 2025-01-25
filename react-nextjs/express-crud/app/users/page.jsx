"use client"
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Home() {
  const [users, setUsers] = useState(null)
  const getUsers = () => {
    axios.get('http://localhost:4000/users').then((data) => {
      setUsers(data.data.result)
    })
  }
  const deleteUser = (id) => {
    axios.delete('http://localhost:4000/deleteuser/' + id).then((data) => {
      getUsers()
    })
  }

  useEffect(() => {
    getUsers()
  },[])
  return (
    <>
    <h1>Home</h1>
    <Link href="/create">Create User</Link>
   <ul>
    {users && users.map(item => (
        <li key={item.id}>
          <span>{item.id}</span>
          <span>{item.username}</span>
          <span>{item.password}</span>
          <span><Link href={`/users/${item.id}`}>Details</Link></span>
          <button onClick={() => deleteUser(item.id)}><FaRegTrashAlt /></button>
        </li>
      ))}
   </ul>
    </>
  );
}
