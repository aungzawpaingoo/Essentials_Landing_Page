import React from 'react'

function PracticeTabs({children,onSelectedTabButton}) {
  return (
    <div>
    <button onClick={onSelectedTabButton}>{children}</button>
    </div>
  )
}

export default PracticeTabs