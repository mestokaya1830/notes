"use client"
import React from 'react'
import {HiOutlineTrash} from 'react-icons/hi'

const deleteUser = async(id) => {
  await fetch('http://localhost:3000/api/users?id=' + id, {
    method:'DELETE',
    headers: { "Content-type": "application/json; charset=UTF-8" },

  })
}
export default function Deletebtn({id}) {
  return (
    <>
      <button onClick={() => deleteUser(id)}><HiOutlineTrash size={24} color='red' /></button>
    </>
  )
}
