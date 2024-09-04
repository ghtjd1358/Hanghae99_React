import { createSlice } from "@reduxjs/toolkit";

const FetchTodoSort = createSlice({
  name: 'todoSort',
  initialState: {
    todos: []
  },
  reducers: {
    sortTodos: (state) => {
      // 숫자 비교 또는 문자열 비교
      state.todos.sort((a, b) => a.id - b.id); // id가 숫자인 경우
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    }
  }
});

export const { sortTodos, setTodos } = FetchTodoSort.actions;
export default FetchTodoSort.reducer;
