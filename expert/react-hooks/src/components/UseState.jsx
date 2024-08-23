import { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(1)

    // 함수형 업데이트 : () 안에 수정할 값이 아니라, 함수를 넣을 수 있다.
    // 함수의 인자에서는 state 값을 불러올 수 있고 { } 안에는 값을 변경하는 함수 작성 
    const handlerFnIncrease = () => {
      setCount(prevCount => prevCount + 1);
      setCount(prevCount => prevCount + 1);
      setCount(prevCount => prevCount + 1);
    }
  
    // 일반 사용법
    const handlerIncrease = () => {
      setCount(count +1);
      setCount(count +1);
      setCount(count +1);
    }

  return (
    <>
    <div>
      <h1>useState</h1>
      <h3>{count}</h3> <br/>
      {/* 함수형 업데이트는 3 증가 */}
      <button style={{margin : `15px`}} onClick={handlerFnIncrease}>함수 증가</button>
      {/* 일반 사용법은 1 증가 */}
      <button onClick={handlerIncrease}>일반 증가</button>

    {/*  
        리엑트는 효율적으로 업데이트 하기 위하여 useState의 set 같은 경우 각각 처리하는 것이 아니라  한번에 처리한다.
        전문용어로 배치(batch)처리한다.왜 배치 업데이트를 할까? 불필요한 리렌더링을 막기 위해서다 즉 성능 때문이다!(피자, 콜라, 햄버거를 시킬 때 한번에 주문하지 각각 따로하지는 않으니깐!)
        즉 일반 사용법은 setCounte를 3번 명령하였지만 리엑트는 명령을 하나로 모아 최종적으로 한번만 실행한다.
        반면 함수형 업데이트 방식은 3번을 동시에 명령을 내리면 명령을 모아 순차적으로 가각 1번씩 실행한다. 
    */}
    </div>
    </>
  )
}

export default UseState