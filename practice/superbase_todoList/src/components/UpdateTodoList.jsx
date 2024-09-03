import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDataTodo, updateTodos } from '../reducer/slice/FetchTodoList';
import '../App.css';

function UpdateTodoList() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { todos, status } = useSelector((state) => state.FetchTodo);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDataTodo());
    }
  }, [dispatch, status]);

  const detailTodos = todos.find(item => item.id.toString() === id);

  const [updateAddress, setUpdateAddress] = useState(detailTodos ? detailTodos.address : '');

  const updateHandler = async () => {
    const dataForm = {
      id: id,
      address: updateAddress
    };
    
    await dispatch(updateTodos(dataForm));
    alert('업데이트 되었습니다.');
    navigate('/');
  };

  if (!detailTodos) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ border: '2px solid red' }}>
      <h2>{detailTodos.name}</h2>
      <h2>{detailTodos.age}</h2>
      <input 
        type="text" 
        value={updateAddress} 
        onChange={(e) => setUpdateAddress(e.target.value)}
      />
      <button onClick={updateHandler}>수정</button>
    </div>
  );
}

export default UpdateTodoList;
