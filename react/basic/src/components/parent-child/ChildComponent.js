import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.messageFunction()}>Trigger Parent Function</button>
    </div>
  )
}

export default ChildComponent
