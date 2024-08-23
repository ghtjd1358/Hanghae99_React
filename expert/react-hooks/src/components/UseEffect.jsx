import { useEffect, useState } from "react"


function UseEffect() {
    const [value, setValue] = useState('')


    // useEffect란 렌더링 이후에 특정 작업을 수행하도록 설정할 수 있는 Hook
    // 의존성 배열(dependency array), 이 배열에 값을 넣으면 그 값이 바뀔 때만 useeffect를 실행한다.
    useEffect(()=>{
        console.log("Hello useEffect");

        // 클린 업
        return () => {
            console.log("Goodbye useEffect");
        }
    },[]);

  return (
    <>
        <h1>useEffect</h1>
        <input
            type="text"
            value={value}
            onChange = {(e)=>setValue(e.target.value)}
        />
    </>
  )
}

export default UseEffect