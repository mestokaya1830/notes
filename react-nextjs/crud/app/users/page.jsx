import Link from 'next/link'
import {HiPencilAlt} from 'react-icons/hi'
import {HiOutlineTrash} from 'react-icons/hi'

export default function Users() {
  return (
    <>
      <h1>Users</h1>
      <Link href="/adduser">Add New User</Link>
    </>
  )
}
