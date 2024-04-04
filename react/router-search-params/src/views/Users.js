import { useSearchParams } from 'react-router-dom'
export const Users = () => {

  const [ searchParams, setSearchParams ] = useSearchParams()
  const showActive = searchParams.get('filter') ===  'active'
  return (
    <>
     <h2> Users Page</h2>
      <button onClick = {() => setSearchParams({filter: 'active'})}>Active Users</button>
      <button onClick = {() => setSearchParams({})}>Reset Filter</button>

      {showActive ? <h2>Active Users</h2> : <h2>All Users</h2>}
    </>
  )
}

