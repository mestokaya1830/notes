import { useNavigate, useParams } from 'react-router-dom'

function Profile() {
  const params = useParams()
  const navigate = useNavigate()
  return (
    <div>
      <h2>User { params.id }</h2>
      <button onClick={() => navigate(-1)}>Back </button>
    </div>
  )
}

export default Profile
