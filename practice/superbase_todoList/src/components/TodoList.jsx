import DeleteTodoList from '../components/DeleteTodoList';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';



const TodoList = ({todos, status, error}) => {
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
        <div style={{border : '1px solid black', marginBottom : '10px'}} key={todo.id}>
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

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      address: PropTypes.string.isRequired,
    })
  ).isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string,
};


export default TodoList