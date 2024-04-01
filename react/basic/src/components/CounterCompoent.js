import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  
  increament() {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
  }
  decreament() {
    this.setState({
      count: this.state.count - 1
    })
    console.log(this.state.count)
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={() => this.increament()}>Increament</button>
        <button onClick={() => this.decreament()}>Decreament</button>
      </div>
    )
  }
}

export default Counter

