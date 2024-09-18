import React from 'react'

export default function Details({params}) {
  return (
    <>
      <h1>Person Details</h1>
      <h2>{params.id}</h2>
    </>
  )
}