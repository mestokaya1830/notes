'use client'
import { useRouter } from 'next/navigation'

export default function Button() {
  const router = useRouter()
  const goBack = () => {
    router.push('/admin/users')
  }
  return (
    <>
      <button onClick={() => goBack()}>Go Back</button>
    </>
  )
}