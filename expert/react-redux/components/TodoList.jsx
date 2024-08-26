import { useDispatch, useSelector } from "react-redux"
import { completeTodo, removeTodo } from "../src/redux/modules/todos";



function TodoList() {
    const {todos, completeTodos} = useSelector((state)=> state.todos)
    console.log('투두리스트', todos);
    console.log('투두리스트 완료', completeTodos);

    const dispatch = useDispatch()

    const updateTodos = (id) => {
        dispatch(completeTodo(id))
    }

  return (
    <>
       {todos.map((todo)=>{
            return (
                <div key={todo.id}>
                    <h3 style={{cursor : 'pointer'}}>{todo.title}
                    <span onClick={()=>{dispatch(removeTodo(todo.id))}} style={{marginLeft : '5px', color : 'pink'}}>삭제</span>
                    <span onClick={() => updateTodos(todo.id)} style={{marginLeft : '5px', color : 'skyblue'}}>완료</span>
                    </h3>
                </div>
            )
       })}

       <hr/>

       {completeTodos.map((item)=>{
        return (
            <div key={item.id}>
                <h3>{item.title}</h3>
            </div>
        )
       })}

    </>
  
  )
}

export default TodoList