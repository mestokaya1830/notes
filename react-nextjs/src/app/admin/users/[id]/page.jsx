import React from 'react'

export default function Details({params}) {
  console.log(params)
  return (
    <>
      <h2>{params.id}</h2>
    </>
  )
}