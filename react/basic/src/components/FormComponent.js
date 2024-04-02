import React, { Component } from 'react'

export class FormComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'mesto',
       pass: '123',
    }
  }
  
  getName = (event) => {
    this.setState({
      name: event.target.value,
    })
  }
  getPass = (event) => {
    this.setState({
      pass: event.target.value
    })
  }
  getGender = (event) => {
    this.setState({
      pass: event.target.value
    })
  }
  getForm = () => {
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <h2>Form Component</h2>
        <form>
          <input type='text' value={this.state.name} onChange={this.getName} placeholder='Name'/>
          <input type='password' value={this.state.pass} onChange={this.getPass}  placeholder='Pass'/>
          <input type='radio' value='Man' name="gender" onChange={this.getGender} /> Man
          <input type='radio' value='Women' name="gender" onChange={this.getGender} /> Women
          <input type="button" value="Send" onClick={() => this.getForm()} />
        </form>
      </div>
    )
  }
}

export default FormComponent
