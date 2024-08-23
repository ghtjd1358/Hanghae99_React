import React from 'react'

function Box2() {
  console.log('Box2이 렌더링되었습니다.')
  return (
    <div>Box2</div>
  )
}

export default React.memo(Box2)