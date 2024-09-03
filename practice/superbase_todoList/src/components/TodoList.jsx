import DeleteTodoList from '../components/DeleteTodoList';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchDataTodo } from '../reducer/slice/FetchTodoList';

function TodoList() {
    const dispatch = useDispatch();
    const {todos, status, error} = useSelector(state => state.FetchTodo);
  
    useEffect(()=>{
      dispatch(fetchDataTodo())
    }, [dispatch])
    const navigate = useNavigate();
    
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <>
        {todos.length > 0 ? (
        todos.map((todo) => (
        <div style={{border : '1px solid black'}} key={todo.id}>
          <h2>{todo.id}</h2>
          <h2 style={{color : 'skyblue', cursor : 'pointer'}} onClick={() => navigate(`/update/${todo.id}`)}>{todo.name}</h2>
          <h2>{todo.age}</h2>
          <h2>{todo.address}</h2>
          <DeleteTodoList id={todo.id}/>
        </div>
      ))
    ) : (
      <p>No todos</p> 
    )}
    </>
  )
}


export default TodoList