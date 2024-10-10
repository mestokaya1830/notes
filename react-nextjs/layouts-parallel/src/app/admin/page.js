const delay = async(ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default async function Admin() {
  await delay(1000)
  return (
    <>
      <h1>Dashboard</h1>
    </>
  )
}
