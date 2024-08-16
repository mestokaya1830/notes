import { useEffect } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
export default function About() {
  const auth = useSelector((state) => state.auth.value)

  useEffect(() => {
    axios.get('http://localhost:3000/')
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => console.log(err) )
  })
  return (
    <div>
      <h1>About</h1>
      {auth ? <h2>Welcome: {auth}</h2> : <h2>Pleae login..</h2>}
    </div>
  )
}

