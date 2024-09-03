import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../superbaseClient";

const fetchDataTodo = createAsyncThunk('FetchTodoList/fetchDataTodo', async (_, {rejectWithValue}) => {
    const {data, error} =  await supabase.from('NACAMP_SAMPLE').select('*');
    console.log('fetTodos', data)
    if(error){
        return rejectWithValue(error.message);
    }
        return data;
})

const addTodos = createAsyncThunk('FetchTodoList/addTodos', async (dataForm, {rejectWithValue}) => {
    const {data, error} = await supabase.from('NACAMP_SAMPLE').insert([dataForm]);
    console.log('addTodos', data);
    if(error){
        return rejectWithValue(error.message);
    }
        return dataForm;
})

const deleteTodos = createAsyncThunk('FetchTodoList/deleteTodos', async (id, {rejectWithValue})=>{
    const {error} = await supabase.from("NACAMP_SAMPLE").delete().eq('id', id);
    if(error){
        return rejectWithValue(error.message);
    }
    return id
})

const updateTodos = createAsyncThunk('FetchTodoList/updateTodos', async (dataform,{rejectWithValue} ) => {
    const {error} = await supabase.from("NACAMP_SAMPLE").update({'address': dataform.address}).eq('id', dataform.id);
    
    if(error){
        return rejectWithValue(error.message);
    }
    return dataform;
})

const initialState = {
    todos : [],
    status : 'idle',
    error: null
}

const FetchTodoList = createSlice({
    name : 'todoList',
    initialState,
    reducers :{},
    extraReducers : (builder) => {
        builder
        .addCase(fetchDataTodo.pending, (state) => {
            state.status = 'loading';
        })
        
        .addCase(fetchDataTodo.fulfilled, (state, action) => {
            state.status = 'success',
            state.todos = action.payload;
        })

        .addCase(fetchDataTodo.rejected, (state, action) => {
            state.status = 'failed',
            state.error = action.payload;
        })
        .addCase(addTodos.fulfilled, (state, action) => {
            state.status = 'success',
            state.todos = [...state.todos, action.payload];
        })
        .addCase(addTodos.rejected, (state, action) => {
            state.status = 'failed',
            state.error = action.payload;
        })
        .addCase(deleteTodos.fulfilled, (state, action) => {
            const deleteFilter = state.todos.filter(item => item.id !== action.payload)
            state.status = 'success',
            state.todos = deleteFilter
        })
        .addCase(updateTodos.fulfilled, (state, action) => {
            state.status = 'success',
            state.todos = state.todos.map((todo) => 
                todo.id === action.payload.id 
                    ? {...todo, address : action.payload.address } 
                    : todo);
        })
    }
})


export { fetchDataTodo, addTodos, deleteTodos, updateTodos };
export default FetchTodoList.reducer;
