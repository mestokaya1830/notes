import React, { Component } from 'react'

class Test3 extends Component {
  render() {
    // const {message} = this.props//props detructer
    return  <h1>{this.props.message}</h1>
  }
}

export default Test3