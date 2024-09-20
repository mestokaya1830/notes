import React from 'react'
import Image from 'next/image'

import image1 from '@/public/1.jpg'

export default function Images() {
  return (
    <>
      <h1>Images</h1>
      <h2>Local Image With Import</h2>
        <Image src={image1} alt="no image" /> 
        <h2>Remote Image With next.config.pattern</h2>
        <Image src="https://picsum.photos/id/717/200/300.jpg?hmac=OJYQhMLNcYlN5qz8IR345SJ7t6A0vyHzT_RdMxO4dSc" width={640} height={640} alt="no image" /> 
    </>
  )
}
