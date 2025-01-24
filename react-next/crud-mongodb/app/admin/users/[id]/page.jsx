"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function Details() {
  const { id } = useParams()
  const router = useRouter()
  console.log(router)
  return (
    <>
      <h1>Use Details</h1>
      <h2>{id}</h2>
      <button onClick={router.back}>Back</button>
    </>
  )
}
