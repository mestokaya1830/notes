import React from 'react'
import Image from 'next/image'

import image1 from "../../public/1.jpg"
export default function Images() {
  return (
    <>
      <h1>Images</h1>
      <h2>Locale Image</h2>
      <Image src={image1} alt='no image' width={400} height={300}/>

      <h2>Remote Image</h2>
      <Image src="https://picsum.photos/200/300" alt="no image" width={400} height={300} />
    </>
  )
}
