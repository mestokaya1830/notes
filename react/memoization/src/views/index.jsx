import { useState } from 'react'
import Popup from '../components/popup.jsx'
import Test from '../components/test.jsx'
export default function Index() {
  const [open, openPopup] = useState()

  const [count, setCount] = useState(0)
  
  const increament = () => {
    setCount(count + 1)
  }
  const decreament = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Home</h1>
      <Test />
      <h1 className='counter'>{count}</h1>
      <div>
        <button onClick={() => increament()}>Increament</button>
        <button onClick={() => decreament()}>Decreament</button>
      </div>
      <button onClick={() => openPopup(true)}>Open Popup</button>
      {open ? <Popup message= "Parent Message" openPopup={openPopup}/> : ""}
    </>
  )
}