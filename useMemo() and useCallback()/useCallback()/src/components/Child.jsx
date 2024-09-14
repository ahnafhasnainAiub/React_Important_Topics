import React, { memo } from 'react'

function Child({counter2, setCounter2}) {

  console.log('Child Component rendered!!');

  return (
    <div>
        Child Component
    </div>
  )
}

export default memo(Child);