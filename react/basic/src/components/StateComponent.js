import {React, Component} from 'react'


class Message extends Component {
  constructor(){
    super()
    this.state = {
      message: 'Welcome State'
    }
  }

  changeState = () => {
    this.setState({
      message: 'State Changed'
    })
    console.log(this.state.message)
  }
  render() { 
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={() => this.changeState()}> Change State</button> */}
        {/* or so */}
        <button onClick={this.changeState.bind(this)}> Change State</button>
      </div>
    );
  }
}
 
export default Message;