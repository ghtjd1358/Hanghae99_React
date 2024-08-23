import { useCallback, useState } from 'react'
import Box1 from './MemoBox/Box1'
import Box2 from './MemoBox/Box2'
import Box3 from './MemoBox/Box3'
import HeavyCompenets from './MemoBox/HeavyCompenets'


function UseMemo() {
    console.log("App 컴포넌트가 렌더링되었습니다.")

    const [count, setCount] =useState(0)

    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
    }

    const handleClick2 = () => {
        setCount(prevCount => prevCount - 1)
    }

    const initCount = useCallback(
        () => {
            console.log(`[COUNT]가 ${count}에서 0으로 변경되었습니다.`)
            setCount(0);
        },[count]); 

        // useMemo
        const navStyleObj = {
            backgroundColor: "yellow",
            marginBottom: "30px",
          };
        
          const footerStyleObj = {
            backgroundColor: "green",
            marginTop: "30px",
          };
  return (
    <>
        <h2>Ract.memo, useCallback</h2>
        <h3>카운트 예제입니다.</h3>
        <p>현재 카운트 : {count}</p>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick2}>-</button>

        <div>
            <Box1 initCount = {initCount}/>
            <Box2/>
            <Box3/>
        </div>
    <hr/>
        <h2>useMemo</h2>
        <nav style={navStyleObj}>네비게이션 바</nav>
            <HeavyCompenets />
        <footer style={footerStyleObj}>푸터 영역이에요</footer>
    </>
  )
}

export default UseMemo