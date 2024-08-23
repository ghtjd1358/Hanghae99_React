import React from 'react'

function Box3() {
  console.log('Box3이 렌더링되었습니다.')
  return (
    <div>Box3</div>
  )
}

export default React.memo(Box3)