import { configureStore } from '@reduxjs/toolkit'
import FetchTodo from './slice/FetchTodoList'
import FetchSearch from './slice/FetchSearch'

const store = configureStore({
    reducer : {
        FetchTodo : FetchTodo,
        FetchSearch : FetchSearch,
    }
})

export default store