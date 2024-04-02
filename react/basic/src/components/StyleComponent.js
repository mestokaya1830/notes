import React from 'react'

const heading = {
  fontSize: '30px',
  color: 'blue'
}
function StyleComponent() {
  const list = ['Html','Css','Javascript']
  const allList = list.map((item, index) => 
    <ul key={index}>
      <li className='list'>{item}</li>
      {/* <li className={dynamicClass}>{item}</li> */}
    </ul>
  )
  return (
    <div>
      <h3 style={heading}>Block Style</h3>
      {allList}
    </div>
  )
}

export default StyleComponent

