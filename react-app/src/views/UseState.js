import React from 'react'
import { useState } from 'react'

function UseState() {
  let [counter, setCounter] = useState(0)

  const increament = () => {
    setCounter(counter + 1)
  }
  const decreament = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>useState</h1>
      <h2>{counter}</h2>
      <div>
        <button className='input-btn' onClick={increament}>Increament</button>
        <button className='input-btn' onClick={decreament}>Decreament</button>
      </div>
    </>
  )
}

export default UseState


//with class

// import React, { Component } from 'react'

// export class Home extends Component {
//   constructor(){
//     super()
//     this.state = {
//       counter: 0
//     }
//   }

//  increament = () =>{
//   this.setState({
//     counter: this.state.counter + 1
//   })
//  }
//  decreament = () =>{
//   this.setState({
//     counter: this.state.counter - 1
//   })
//  }

//   render() {
//     return (
//       <>
//       <h1>Home</h1>
//       <h2>{this.state.counter}</h2>
//       <div>
//         <button className='input-btn' onClick={this.increament}>Increament</button>
//         <button className='input-btn' onClick={this.decreament}>Decreament</button>
//       </div>
//     </>
//     )
//   }
// }

// export default Home
