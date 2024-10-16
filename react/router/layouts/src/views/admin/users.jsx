import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet"

export default function Index() {
  const users = [
    {id:1, username: 'Mesto'},
    {id:2, username: 'Deniz'},
    {id:3, username: 'Bidik'}
  ]
  return (
    <>
    <Helmet>
      <title>Users</title>
      <meta name="description" content="Users content" />
      <meta name="keywords" content="react, meta tags, seo" />
      <meta name="author" content="Your Name" />
    </Helmet>
      <h1>Dashboard</h1>
      
      {users.map(item => (
        <div className="list" key={item.id}>
          <span>{item.id}</span>
          <span>{item.username}</span>
          <NavLink to={`/admin/user/${item.id}`}>Details</NavLink>
        </div>
      ))}
    </>
  )
}