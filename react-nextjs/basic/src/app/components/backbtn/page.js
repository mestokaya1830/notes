'use client';
const goBack = () => {
  window.history.back()
}
export default function Backbtn() {
  return (
    <>
      <button onClick={() => goBack()}>Back</button>
    </>
  )
}
