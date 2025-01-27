import { useContext } from "react"
import { AuthContext } from "../context/authProvider.jsx"

export default function Index() {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <>
      <h1>Home</h1>
    </>
  )
}