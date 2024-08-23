

function Child({ setCount }) {
    

    const handlerFnIncrease = ( ) => {
        setCount(prevCount => prevCount + 1)
    }

  return (
    <>
        <h2>여기는 자식 컴포넌트입니다.</h2>
        <button onClick={handlerFnIncrease}>함수형 증가</button>
    </>
    
  )
}

export default Child