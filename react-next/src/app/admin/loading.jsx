import React from 'react'


export default async function Loading() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return (
    <>
      <h2>Loading...</h2>
    </>
  )
}
