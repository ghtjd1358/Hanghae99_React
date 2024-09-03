import { configureStore } from '@reduxjs/toolkit'
import FetchTodo from './slice/FetchTodoList'



const store = configureStore({
    reducer : {
        FetchTodo : FetchTodo,
    }
})



export default store