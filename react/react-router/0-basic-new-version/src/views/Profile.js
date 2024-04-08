import { useParams } from "react-router-dom"
function Profile() {
  const params = useParams()
  return (
    <div>
      <h2>{params.id}</h2>
    </div>
  )
}

export default Profile
