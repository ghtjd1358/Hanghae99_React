import { useState } from "react";
import { addTodos } from "../reducer/slice/FetchTodoList";
import { useDispatch } from "react-redux";


function AddTodosBtn() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    const dispatch = useDispatch();

    const addHandler = () => {
        const dataForom = {
            name, age, address
        }

        dispatch(addTodos(dataForom));
        alert('data가 성공적으로 추가되었습니다!');
        setName('')
        setAge('')
        setAddress('')
    }

    return (
    <>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
        <button onClick={addHandler}>추가</button>
    </>

    
  )
}

export default AddTodosBtn