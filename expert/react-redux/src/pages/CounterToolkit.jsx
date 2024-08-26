import { useState } from 'react'
import { addNumber, removeNumber } from '../redux/slices/counterSlice'
import { useDispatch, useSelector } from 'react-redux'



function CounterToolkit() {
    const {number} = useSelector((state) => state.counter)
    console.log(number)
    const dispatch = useDispatch();

    const [value, setValue] = useState(0)

  return (
    <>
      <input type='number' value={value} onChange={(e)=>setValue(+e.target.value)}/>
        <button onClick={()=>dispatch(addNumber(value))}>더하기</button>
        <button onClick={()=>dispatch(removeNumber(value))}>빼기</button>
  
        <h3>{number}</h3>
      </>
  )
}

export default CounterToolkit