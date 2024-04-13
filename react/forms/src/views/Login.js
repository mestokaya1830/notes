import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

function Login() {
  const validate = useActionData()
  return (
    <div>
      <h2>Login</h2>
      <div>
        <Form action='/login' method='POST' className='login-form'>
          <input type='text' name="name" placeholder='Name...'/>
          <input type='password' name="password" placeholder='Password...'/>
          <input type="submit" className="login-btn" value="Login"/>
          {validate && validate.error && <p>{validate.error}</p>}
        </Form>
      </div>
    </div>
  )
}


export default Login

export const loginFunction = async({request}) => {
  console.log(request)
  const data = await request.formData()
  const postData = {
    name: data.get('name'),
    password: data.get('password')
  }
  console.log(postData)

  if(postData.name.length < 3){
    return {error: 'Name must lass 4 length!'}
  }
  return redirect('/')
}
