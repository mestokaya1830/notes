import React, { Component } from 'react'

export class FragmentComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Fragment</h2>
        <p>Without Fragment you must use div as wrapper for multiple html tags</p>
        <p>Fragment dosn't appear on dom</p>
      </React.Fragment>

      //this is like Fragment but cant take key
      // <>
      //   <h2>Fragment</h2>
      //   <p>Without Fragment you must use div wrapper for multiple html tags</p>
      //   <p>Fragment dosn't appear on dom</p>
      // </>
      
      // <div>
        //<h2>No Fragment</h2>
        //<p>If you dont use Fragment you must use div as wrapper for multiple html tags</p>
        //<p>Div appers on dom</p>
      // </div>
    )
  }
}

export default FragmentComponent
