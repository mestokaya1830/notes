import { cookies } from 'next/headers'

export default function Cookie() {
  const setCookie = async () => {
    'use server'
    cookies().set({
      name: 'name',
      value: 'lee',
      httpOnly: true,
      path: '/',
    })
  }
  setCookie()
  
  return (
    <>
      <h1>Cookie</h1>
    </>
  )
}
