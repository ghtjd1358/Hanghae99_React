import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UpdateTodoList from '../components/UpdateTodoList';
import TodoPage from '../pages/TodoPage';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/update/:id" element={<UpdateTodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
