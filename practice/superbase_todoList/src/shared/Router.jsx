import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UpdateTodoList from '../components/UpdateTodoList';
import TodoPage from '../pages/TodoPage';
import AddTodosList from '../components/AddTodosList'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path='/addTodo' element={<AddTodosList/>}/>
        <Route path="/update/:id" element={<UpdateTodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
