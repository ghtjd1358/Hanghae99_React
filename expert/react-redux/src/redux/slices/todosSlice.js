import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    todos : [
        {
            id : 1,
            title : "react를 배워봅시다"
        },
        {
            id : 2,
            title : "redux를 배워봅시다"
        }
    ],
    completeTodos : []
}
    
const todosSlice = createSlice({
    name : "totos",
    initialState,
    reducers : {
        addTodo : ( state, action ) => {
            state.todos = [...state.todos, action.payload]
        },
    }
})


export const {addTodo} = todosSlice.actions
export default todosSlice.reducer

