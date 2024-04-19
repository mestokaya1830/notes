import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: 'State',
       counter: 0
    }
  }
  
  inCreament = () => {
    this.setState({
     counter: this.state.counter + 1
    })
  }
  deCreament = () => {
    this.setState({
     counter: this.state.counter - 1
    })
  }
  render() {
    return (
      <div className='router'>
        <h1>{this.state.title}</h1>
        <br/>
        <h1>{this.state.counter}</h1>
        <div>
          <input type='button' className='input-btn' value="Increament" onClick={() => this.inCreament()} />
          <input type='button' className='input-btn' value="Decreament" onClick={() => this.deCreament()} />
        </div>
      </div>
    )
  }
}


