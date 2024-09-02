"use client";
import React from 'react'
import { notFound, useRouter } from 'next/navigation'
export default function Userdetails({params}) {
  {
    if(parseInt(params.userid) > 3) {
      notFound()
    }
  }
  const router = useRouter()
  const goBack = () => {
    // router.push('/admin/users') //or
    // router.forward()
    router.back()
  }
  return (
    <>
      <h1>User Details</h1>
      <h2>User {params.userid}</h2>
      <button onClick={goBack}>Back</button>
    </>
  )
}
