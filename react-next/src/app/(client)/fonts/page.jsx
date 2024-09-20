import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin']
 })

export default function Fonts() {
  return (
    <>
    <h2>Global Font From Layout</h2>
      <h1>Fonts</h1>
      <h2>Styled Font On SIngle Page</h2>
      <h1 className={inter.className}>Fonts</h1>
    </>
  )
}
