import React from 'react'

export default function Details({params}) {
  console.log(params)
  return (
    <>
      <h1>{params.id}</h1>
    </>
  )
}
