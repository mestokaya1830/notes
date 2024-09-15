import { getUsers } from "../page"

export default async function Details({params}) {
  const users = await getUsers()//burasi users sayfasindaki users verisini cachden okur (performas icin gerekli)
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

//burasi dinamik olan id parametresini server tarafinda static hale getirir (performans icin gerekli)
export async function generateStaticParams() {
  const user = await getUsers()
  return user.map(item => ({id: `${item.id}`}))
} 