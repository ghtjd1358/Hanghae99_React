import { useNavigate } from 'react-router-dom';
import TodoList from '../components/TodoList';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchDataTodo } from '../reducer/slice/FetchTodoList';
import SearchTodoList from '../components/SearchTodoList';

const TodoPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { todos, status, error } = useSelector(state => state.FetchTodo);
  const searchTodos = useSelector(state => state.FetchSearch.todos);

  useEffect(() => {
    dispatch(fetchDataTodo());
  }, [dispatch]);

  return (
    <>
      <h1 
      style={{ cursor : 'pointer' }}
      onClick={() => navigate(-1)}>자유게시판</h1>
      <SearchTodoList/>
      <button onClick={() => navigate('/addTodo')}>글추가</button>
      <hr />
      <div>
        {searchTodos.length > 0 ? (
          <div>
            <h3>검색 결과:</h3>
            {searchTodos.map((todo) => (
              <div key={todo.id} style={{ border: '1px solid blue', marginBottom: '10px' }}>
                <h2>{todo.name}</h2>
                <h2>{todo.age}</h2>
                <h2>{todo.address}</h2>
              </div>
            ))}
          </div>
        ) : (
          <TodoList todos={todos} state={status} error={error} />
        )}
      </div>
    </>
  );
};

export default TodoPage;
