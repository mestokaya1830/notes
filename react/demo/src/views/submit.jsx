import { useState } from "react"

export default function Submit() {
  const [data, setData] = useState({
    name: '',
    age: 0
  })

  const handleInputs = (e) => {
    setData(values => ({ ...values, [e.target.name]: e.target.value }))
  }
  const login = (e) => {
    e.preventDefault()
    console.log(data)
  }
  
  return (
    <div>
      <h1>Submit</h1>
      <h2>{data.name} - {data.age}</h2>
      <input type="text" name="name"  onChange={handleInputs} />
      <input type="text" name="age"  onChange={handleInputs} />

      <button onClick={login}>Submit</button>
    </div>
  )
}
