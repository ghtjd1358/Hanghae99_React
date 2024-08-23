import { useEffect, useRef, useState } from "react"

// useRef 특징 : useState와 같이 특정 값을 저장하기 위해 사용하는 대표적인 hook이며 렌더링과 상관없이 값을 기억하기 위해 사용된다.


function UseRef() {
    const countRef = useRef(0); // useRef란 current라는 값을 가지고 있는 객체!
    const [ count, setCount ] = useState(0);

    // input

    const [ idInput, setIdInput ] = useState('')

    const idRef = useRef('');
    const pwRef = useRef('');

    useEffect(()=>{
        idRef.current.focus(); //대표적인 DOM 요소를 핸들링하는 예제
    },[])

    const plusStateCountButtonHandler = () => {
        setCount(count +1)
    }

    const plusRefCountButtonHandler = () => {
        countRef.current += 1;
    }
    

    useEffect(() => {
        console.log('id Ref', idRef.current.value);
        if (idRef.current.value.length > 10) {
            pwRef.current.focus();
        }
    }, [idInput]);
    


  return (
    <>
        <h1>use Ref vs use State</h1>
        <div>
            <h3>state 영역입니다.</h3>
            <p>count: {count}</p>
            <button onClick={plusStateCountButtonHandler}>state 증가</button>
        </div>

        <div>
            <h3>useRef 영역입니다.</h3>
            <p>countRef: {countRef.current}</p>
            <button onClick={plusRefCountButtonHandler}>ref 증가</button>
        </div>

        <div style={{ marginTop : '50px'}}>
            아이디 : <input type="text" ref={idRef} value={idInput} onChange={(e)=>setIdInput(e.target.value)} />
        </div>

        <div>
            비밀번호 : <input type="text" ref={pwRef} />
        </div>
    </>
  )
}

export default UseRef