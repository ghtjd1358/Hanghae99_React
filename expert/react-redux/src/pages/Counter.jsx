
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './App.css'
import { useState } from 'react'
import { minusOne, plusOne } from '../redux/modules/counter'

function Counter() {
    const counterReducer = useSelector((state) => state)
    console.log(counterReducer.counter)
    const dispatch = useDispatch();
  
    const [value, setValue] = useState(0)
  
    return (
      <>
      <input type='number' value={value} onChange={(e)=>setValue(+e.target.value)}/>
        <button onClick={()=>dispatch(plusOne(value))}>더하기</button>
        <button onClick={()=>dispatch(minusOne(value))}>빼기</button>
  
        <h3>{counterReducer.counter.number}</h3>
      </>
    )
  }

export default Counter