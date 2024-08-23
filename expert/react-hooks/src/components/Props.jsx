import { useState } from "react"
import Child from "./Child"


function Props() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
        <h1>props</h1>
        <h2>여기는 부모 컴포넌트입니다.</h2>
        <h3>현재 카운트 : {count}</h3>
        {/*  함수형 업데이트의 경우 count를 props로 넘겨줄 필요가 없다. 왜냐하면 일반 사용법과 달리 함수형은 이전 값을 참조하니깐!  */}
        <Child setCount={setCount} />
      </div>
    </>
  )
}

export default Props