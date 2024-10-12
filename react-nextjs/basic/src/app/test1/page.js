export default async function Test1() {
  await new Promise(resolve =>  setTimeout(resolve, 3000))
  return (
    <>
     <h3>Test-1 Component 4 second delay Test2 must Test1 wait</h3> 
    </>
  )
}
