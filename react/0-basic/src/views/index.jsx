import { useState } from 'react'
import Popup from '../components/popup.jsx'
export default function Index() {
  const [open, openPopup] = useState()
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => openPopup(true)}>Open Popup</button>
      {open ? <Popup message= "Parent Message" openPopup={openPopup}/> : ""}
    </>
  )
}