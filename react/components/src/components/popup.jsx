export default function Popup(props) {
  return (
    <div className='popup'>
      <h2>Popup Component</h2>
      <p>{props.message}</p>
      <button onClick={() => props.openPopup(false)}>Close Popup</button>
    </div>
  )
}

  

//class components

// import React, { Component } from 'react'
// export default class popup extends Component {
//   constructor(props) {
//     super(props)
//   }
//   handlePopup(){
//     this.setState({open: 'true'})
//   }
//   render() {
//     return (
//       <div className='popup'>
//         <h2>Popup Component</h2>
//         <p>{this.props.message}</p>
//         <button onClick={() => this.props.openPopup(false)}>Close Popup</button>
//       </div>
//     )
//   }
// }

