import Link from 'next/link'
import soccer from './soccer.json'

export const metadata = {
  title:"Load File",
  description:"Load File Page Description"
}

export default async function Fetch() {
  return (
    <div>
      <h1>Load File</h1>
      <ul>
        {soccer && soccer[0].results.map(item => (
          <li key={item.id}>
            <span>{item.away.id}</span>
            <span>{item.away.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
