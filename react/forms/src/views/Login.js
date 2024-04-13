import React from 'react'
import { Form, redirect } from 'react-router-dom'

export const loginFunction = async({request}) => {
  console.log(request)
  const data = await request.formData()
  const postData = {
    name: data.get('name'),
    password: data.get('password')
  }
  console.log(postData)
  return redirect('/')
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <div>
        <Form action='/login' method='POST' className='login-form'>
          <input type='text' name="name" placeholder='Name...'/>
          <input type='password' name="password" placeholder='Password...'/>
          <input type="submit" className="login-btn" value="Login"/>
        </Form>
      </div>
    </div>
  )
}


export default Login

