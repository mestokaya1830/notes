import { memo } from "react"

function Test() {
  console.log('Test Component')
  return (
    <>
      <h2>Test Component</h2>
      <p>With memo test component not rendered when state changed (look at the console)</p>
    </>
  )
}

export default  memo(Test)