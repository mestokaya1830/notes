import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  return (
    <div>
      <h2>Register</h2>
      {/* <button onClick={() => navigate('/')}>Back </button> */}
      <button onClick={() => navigate(-1)}>Back </button>
    </div>
  )
}

export default Register

