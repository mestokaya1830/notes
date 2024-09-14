import { getUsers } from "../page"
export default async function Details({params}) {
  const users = await getUsers()//here comt from page cache
  const details = users.filter(item => item.id == params.id)[0]
//  const goBack = () => {
//   window.history.back()
//  }
  return (
    <>
      <h1>User Details</h1>
      <ul>
        <li key={details.id}>
          <span>{details.name}</span>
          <span>{details.username}</span>
          <span>{details.email}</span>
        </li>
      </ul>
      {/* <button onClick={goBack}>Back</button> */}
    </>
  )
}
