import React from 'react'
import Alert from '../components/Alert'

function Home() {
  const showMessage = () => {
    alert('Hello')
  }
  return (
    <div>
      <h1>Home</h1>
      <br />
      <Alert title="Alert Component" parentEvent={showMessage}/>
    </div>
  )
}

export default Home
