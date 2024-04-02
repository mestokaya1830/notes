import React, { Component } from 'react'

export class ConditionsComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isAdmin: true
    }
  }
  
  render() {
    // let result
    // if (this.state.isAdmin) {
    //   result = 'Welocme'
    // } else {
    //   result = 'By'
    // }
    // return (
    //   <div>
    //     {result}
    //   </div>
    // )
    //or
    return(
      this.state.isAdmin ? <div>Welcome Condition</div> : <div>By</div>
    )
  }
}

export default ConditionsComponent
