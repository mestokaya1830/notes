import React from 'react'

function Alert(props) {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  )
}

export default Alert

//with class
// import React, { Component } from 'react'

// export default class ClassComponent extends Component {
//   render() {
//     return (
//       <div>
//         <h2>{this.props.title}</h2>
//       </div>
//     )
//   }
// }

