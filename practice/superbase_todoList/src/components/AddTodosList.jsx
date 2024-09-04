import { addTodos } from "../reducer/slice/FetchTodoList";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useInput } from "../hooks/useInput";


function AddTodosBtn() {
    const navigate = useNavigate();
    const [name, onChangeName, setName] = useInput('');
    const [age, onChangeAge, setAge] = useInput('');
    const [address, onChangeAddress, setAddress] = useInput('');

    const dispatch = useDispatch();

    const addHandler = () => {
        const dataForom = {
            name, age, address
        }
        dispatch(addTodos(dataForom));
        alert('data가 성공적으로 추가되었습니다!');
        setName('');
        setAge('');
        setAddress('');
        navigate('/')

    }

    return (
    <>
        <h1>글추가</h1>
        <input type="text" value={name} onChange={onChangeName}/>
        <input type="text" value={age} onChange={onChangeAge}/>
        <input type="text" value={address} onChange={onChangeAddress}/>
        <button onClick={addHandler}>추가</button>
    </>
  )
}

export default AddTodosBtn