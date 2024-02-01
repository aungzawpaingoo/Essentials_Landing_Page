import React from 'react'

function Contentcard({image,title,description}) {
  return (
    <div>
    <div>
    <image>src={image}</image>
    <h2>{title}</h2>
    <p>{description}</p>   
    </div>
    </div>
  )
}

export default Contentcard