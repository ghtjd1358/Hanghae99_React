import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../src/redux/modules/todos';


function AddForm() {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch();

    const formData = {
        id : new Date().getTime(),
        title : todo
    }
    
  return (
    <>
            <input type='text' value={todo} onChange={(e) => {setTodo(e.target.value)}}/>

            <button onClick={()=>{dispatch(addTodo(formData))}}>추가</button>
    </>
  )
}

export default AddForm