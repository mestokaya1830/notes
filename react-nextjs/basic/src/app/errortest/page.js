import React from 'react'

export default function Errortest() {
  const name = ''
  if(name !== 'mesto'){
    throw new Error('Try again!')
  }
  
  
  return (
    <>
      <h1>Error Test</h1>
    </>
  )
}
