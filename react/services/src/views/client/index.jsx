import { Helmet } from "react-helmet"
import { useEffect, useState } from "react"

export default function Index() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      if(res.ok && res.status === 200){
        return res.json()
      }
    })
    .then((data) => setUsers(data))
    .catch((err) => console.log(err))
  },[])
  return (
    <>
    <Helmet>
      <title>Home</title>
      <meta name="description" content="Home content" />
      <meta name="keywords" content="react, meta tags, seo" />
      <meta name="author" content="Your Name" />
    </Helmet>
      <h1>Home</h1>

      <ul>
        {users && users.map(item => (
          <li key={item.id}>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span>{item.email}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
