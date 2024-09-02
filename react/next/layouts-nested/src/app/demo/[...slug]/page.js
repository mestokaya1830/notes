import React from 'react'

export default function Demo({params}) {
  return (
    <>
      <h1>Slug</h1>
      <p>Demodan sonra ne yazarsaniz yazin demo sayfasi gelecektir</p>
      <h2>Slug length : {params.slug.length}</h2>
      <h2>Slug : 0 {params.slug[0]}</h2>
      <h2>SLug : 1 {params.slug[1]}</h2>
    </>
  )
}
