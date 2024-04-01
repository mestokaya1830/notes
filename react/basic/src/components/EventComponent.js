import React, { Component } from 'react'

export class Events extends Component {
  render() {
    return (
      <div>
        <button onClick={() => alert('hello')}>Click Me</button>
      </div>
    )
  }
}

export default Events

