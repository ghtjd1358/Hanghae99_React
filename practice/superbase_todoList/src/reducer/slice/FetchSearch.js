import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../superbaseClient";

const fetchSearchTodo = createAsyncThunk('FetchSearch/fetchSearchTodo', async (searchForm, {rejectWithValue}) => {
    console.log('검색', searchForm)
    const { data, error } = await supabase.from('NACAMP_SAMPLE').select('*');

    if (error) {
        return rejectWithValue(error.message);
    }

    const filteredData = data.filter((todo) => {
        const {search, searchType} = searchForm
        if(searchType === 'name'){
           return todo.name.includes(search)
        }else if(searchType === 'age'){
            return todo.age.includes(search)
        }else if(searchType === 'address'){
            return todo.address.includes(search)
        }

        return rejectWithValue(error.message)
    });
    
    return filteredData;

})

const initialState = {
    status : 'idle',
    todos : [],
    error : null
}

const fetchSearch = createSlice({
    name : 'searchTodos',
    initialState,
    reducers :{},
    extraReducers : (builder) => {
        builder
        .addCase(fetchSearchTodo.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchSearchTodo.fulfilled, (state, action) => {
            state.status = 'success',
            state.todos = action.payload
        })
        .addCase(fetchSearchTodo.rejected, (state,action) => {
            state.status = 'error',
            state.error = action.payload
        })
    }
})

export { fetchSearchTodo }
export default fetchSearch.reducer


