import React from 'react'

function Home() {
  const title = 'Home'
  let counter = 0

  const inCreament = () => {
    counter += 1
  }
  const deCreament = () => {
    counter -= 1
  }
  return (
    <div className='router'>
      <h1>{title}</h1>
      <br/>
      <h1>{counter}</h1>
      <div>
        <input type='button' className='input-btn' value="Increament" onClick={() => inCreament()} />
        <input type='button' className='input-btn' value="Decreament" onClick={() => deCreament()} />
      </div>
    </div>
  )
}

export default Home



//with class
// import React, { Component } from 'react'

// export default class Home extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        title: 'Home',
//        counter: 0
//     }
//   }
  
//   inCreament = () => {
//     this.setState({
//      counter: this.state.counter + 1
//     })
//   }
//   deCreament = () => {
//     this.setState({
//      counter: this.state.counter - 1
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.title}</h1>
//         <br/>
//         <h1>{this.state.counter}</h1>
//         <div>
//           <input type='button' className='input-btn' value="Increament" onClick={() => this.inCreament()} />
//           <input type='button' className='input-btn' value="Decreament" onClick={() => this.deCreament()} />
//         </div>
//       </div>
//     )
//   }
// }


