import { useSelector, useDispatch } from "react-redux"
import { increament, decreament, login, logout } from '../store/actions/index.jsx'
export default function Index() {
const counter = useSelector(state => state.counter)
const auth = useSelector(state => state.auth)

const dispatch  = useDispatch()
  return (
    <>
      <h1>Home</h1>
        <h2>Counter {counter}</h2>
        <div>
          <button onClick={() => dispatch(increament())}>Increament</button>
          <button onClick={() => dispatch(decreament())}>Decreament</button>
        </div>
        {auth ? <h2>Welocme</h2> : <h2>Please login...</h2>}
        <div>
          <button onClick={() => dispatch(login())}>Login</button>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    </>
  )
}