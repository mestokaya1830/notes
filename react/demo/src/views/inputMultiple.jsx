import { useState } from "react"

export default function InputMultiple() {

  const [data, setData] = useState({
    name: '',
    age: 0
  })

  return (
    <div>
      <h1>Input Multiple</h1>
      <h2>{data}</h2>
      <input type="text" name="name"  onChange={(e) => setData({...data, name: e.target.value})} />
      <input type="text" name="age"  onChange={(e) => setData({...data, age: e.target.value})} />
    </div>
  )
}
