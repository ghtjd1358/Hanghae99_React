import { useDispatch } from "react-redux"
import { deleteTodos } from "../reducer/slice/FetchTodoList";
import PropTypes from 'prop-types';

function DeleteTodoList({id}) {
    const dispatch = useDispatch();

    const deleteHandler = async () => {
        await dispatch(deleteTodos(id));
        alert('삭제되었습니다');
    }

  return (
    <button onClick={deleteHandler}>삭제</button>
  )
}

DeleteTodoList.propTypes = {
        id: PropTypes.number.isRequired,
}
      

export default DeleteTodoList