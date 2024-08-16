import { useState } from "react"

export default function InputSingle() {
  const [data, setData] = useState("")

  return (
    <div>
      <h1>Input Single</h1>
      <h2>{data}</h2>
      <input type="text" name="name"  onChange={(e) => setData(e.target.value)} />
    </div>
  )
}
