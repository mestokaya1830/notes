'use client'
import { useState } from "react";

export default function Form() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState('')

  const handleInput = (e) => {
    setUser(prev => ({...prev, [e.target.name]: e.target.value}))
  }


  const loginUser = (e) => {
    e.preventDefault()
    if(!user.email){
      setError('Email cant be null!')
    } else if(!user.password){
      setError('Password cant be null!')
    } else {
      console.log(user)
    }
  }
  return (
    <>
      <form onSubmit={loginUser} className="container border rounded p-5">
        <h3 style={{ marginBottom: "30px" }}>Login</h3>
        <div className="mb-3 row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <div>
            <input type="email" name="email" onChange={handleInput} className="form-control" id="email" />
            <div className="text text-danger mt-2"></div>
            <div className="text text-danger mt-2"></div>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="form-label">
            Password
          </label>
          <div>
            <input
              type="password"
              name="password"
              onChange={handleInput}
              className="form-control"
              id="inputPassword"
            />
            {error ? <div className="text text-danger mt-2">{error}</div> : ""}
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-dark btn-lg">Login</button>
        </div>
      </form>
    </>
  );
}