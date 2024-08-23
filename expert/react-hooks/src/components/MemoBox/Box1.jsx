import React from 'react'

function Box1({initCount}) {
    console.log('Box1이 렌더링되었습니다.')
  return (
    <>
        <div>Box1</div>
        <button onClick={()=>initCount()}>초기화</button>
    </>
  )
}

export default React.memo(Box1)