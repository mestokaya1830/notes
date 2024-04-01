import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello Child'
    }
  }
  
  messageFunction(){
    alert(this.state.message)
  }

  render() {
    return (
      <div>
        <h3>Here is from Parent-Component but Button From Child-Component</h3>
        <ChildComponent messageFunction = {() => this.messageFunction()}/>
      </div>
    )
  }
}

export default ParentComponent
