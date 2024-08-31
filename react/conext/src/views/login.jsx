import { useContext, useState } from "react"
import { AuthContext } from "../context/authProvider.jsx"

export default function Login() {
  //get login data
  const [data, setData] = useState(null)
  const handleInput = (e) => {
    setData(item => ({...item, [e.target.name]: e.target.value}))
  }

  //construct authContext method
  const {setUser} = useContext(AuthContext)

  //login
  const loginUser = (e) => {
    e.preventDefault()
    setUser(data) //send login data to authContext
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Username..." onChange={handleInput} />
        <input type="password" name="password" placeholder="Passoword..." onChange={handleInput}/>
        <input type="submit" value="Login" />
      </form>
    </>
  )
}