import { useParams } from "react-router-dom"

export default function Details() {
  const {id} = useParams()
  return (
    <>
      <h2>User Details</h2>
      <h1>{id}</h1>
    </>
  )
}
