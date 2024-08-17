import { useSelector, useDispatch } from "react-redux"
import { setAuth } from "../store/authSlice.jsx"
import axios from 'axios'

export default function Index() {
  const auth = useSelector((state) => state.auth.value)
  const dispatch = useDispatch()

  const login = () => {
    axios.get('http://localhost:3000/')
    .then((res) => {
      dispatch(setAuth(res.data.auth))
    })
    .catch((err) => console.log(err) )
  }
  return (
    <div>
      <h1>Home</h1>
      {auth ? <h2>Welcome: {auth}</h2> : <h2>Pleae login..</h2>}

      <button onClick={login}>Login</button>
      <button onClick={() => dispatch(setAuth(''))}>Logout</button>
    </div>
  )
}
