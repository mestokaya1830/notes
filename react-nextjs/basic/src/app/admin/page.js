import { redirect } from "next/navigation"

export default function Admin() {
  redirect('/')
  return (
    <>
      <h1>Dashboard</h1>
    </>
  )
}
