import { useParams, useNavigate } from 'react-router-dom'
export const UserDetails = () => {
  const { id } = useParams()
  console.log(id)

  const back = useNavigate()
  return (
    <div>
      <h2>User Details {id}</h2>
      <button onClick={() => back('/users')}>Back</button>
    </div>
  )
}
