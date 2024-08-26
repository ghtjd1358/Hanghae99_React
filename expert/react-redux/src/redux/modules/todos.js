const ADD_TODO = "ADD_TODO"
const REMOVE_TODO = "REMOVE_TODO"
const COMPLETE_TODO = 'COMPLETE_TODO'

export const addTodo = (payload) => {
    return {
        type : ADD_TODO,
        payload
    }
}

export const removeTodo = (payload) => {
    return {
        type : REMOVE_TODO,
        payload
    }
}

export const completeTodo = (payload) => {
    return {
        type: COMPLETE_TODO,
        payload,
    };
};


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
    



const todos = (state = initialState, action) => {
    console.log(state)
    switch(action.type){
        case ADD_TODO : 
            return {
                ...state,
                todos : [...state.todos, action.payload]
            }

        case REMOVE_TODO : {
            return {
                ...state,
                todos : state.todos.filter((item)=> item.id !== action.payload),
            }
        }

        case COMPLETE_TODO :
            const completeItem = state.todos.find((item) => item.id === action.payload)
            console.log('업데이트 데이터', completeItem);

            return {
                ...state,
                todos : state.todos.filter((item)=> item.id !== action.payload),
                completeTodos : [...state.completeTodos, completeItem]
            } 

        default : 
            return state
    }
}


export default todos