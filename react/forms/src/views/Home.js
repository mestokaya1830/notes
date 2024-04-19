
import React, { useState }from 'react'

function Home() {
  const [formData, setFormData] = useState({
    username: '',
    lang: 'Html',
    password: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getForm = () => {
    console.log(formData)
  }
  return (
    <div>
       <div>
        <form className='router'>
          <input type='text' className='inputs' name="username" onChange={handleChange} placeholder='Username...'  />
          <input type='password' className='inputs' name="password" onChange={handleChange} placeholder='Password...'  />
          <select onChange={handleChange} className='inputs' name="lang">
            <option value="html">Html</option>
            <option value="css">Css</option>
            <option value="javascript">Javascript</option>
          </select>
          <input type='button' value="Get Form" onClick={getForm} className='input-btn' />
        </form>
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
//        userName: '',
//        password: '',
//        lang: 'Html'
//     }
//   }
  
//   userInput = (event) => {
//     this.setState({
//       userName: event.target.value
//     })
//   }
//   passwordInput = (event) => {
//     this.setState({
//       password: event.target.value
//     })
//   }
//   langInput = (event) => {
//     this.setState({
//       lang: event.target.value
//     })
//   }

//   getForm = () => {
//     alert(this.state.userName +'-'+ this.state.password +'-'+ this.state.lang)
//   }

//   render() {
//     return (
//       <div>
//         <form className='router'>
//           <input type='text' className='inputs' onChange={this.userInput} placeholder='Username...'  />
//           <h2>{this.state.userName}</h2>
//           <input type='password' className='inputs' onChange={this.passwordInput} placeholder='Password...'  />
//           <h2>{this.state.password}</h2>
//           <select onChange={this.langInput} className='inputs'>
//             <option value="html">Html</option>
//             <option value="css">Css</option>
//             <option value="javascript">Javascript</option>
//           </select>
//           <input type='button' value="Get Form" onClick={() => this.getForm()} className='input-btn' />
//         </form>
//       </div>
//     )
//   }
// }








// import React, { Component } from 'react'

// export default class Home extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        userName: '',
//        password: '',
//        lang: 'Html'
//     }
//   }
  
//   userInput = (event) => {
//     this.setState({
//       userName: event.target.value
//     })
//   }
//   passordInput = (event) => {
//     this.setState({
//       password: event.target.value
//     })
//   }
//   langInput = (event) => {
//     this.setState({
//       lang: event.target.value
//     })
//   }

//   getForm = (event) => {
//     alert(this.state.userName +'-'+ this.state.password +'-'+ this.state.lang)
//   }

//   render() {
//     return (
//       <div>
//         <form className='router'>
//           <input type='text' className='inputs' onChange={this.userInput} placeholder='Username...'  />
//           <h2>{this.state.userName}</h2>
//           <input type='password' className='inputs' onChange={this.passordInput} placeholder='Password...'  />
//           <h2>{this.state.password}</h2>
//           <select onChange={this.langInput} className='inputs'>
//             <option value="html">Html</option>
//             <option value="css">Css</option>
//             <option value="javascript">Javascript</option>
//           </select>
//           <input type='button' value="Get Form" onClick={() => this.getForm()} className='input-btn' />
//         </form>
//       </div>
//     )
//   }
// }

