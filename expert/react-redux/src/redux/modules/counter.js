const initialState = {
    number : 0,
}

// const PLUS_ONE = "PLUS_ONE";
// const MINUS_ONE = "MINUS_ONE";

const ADD_NUMBER = "ADD_NUMBER"
const REMOVE_NUMBER = "REMOVE_NUMBER"

export const plusOne = (payload) => {
    return {
        type : ADD_NUMBER,
        payload,
    }
}

export const minusOne = (payload) => {
    return {
        type : REMOVE_NUMBER,
        payload,
    }
}

const counter = (state = initialState, action) => {
//    console.log(action)
   
    switch(action.type){
        case ADD_NUMBER :
            return {
                number : state.number + action.payload
            }
        case REMOVE_NUMBER : 
            return {
                number : state.number - action.payload
            }
        
            default:
                return state;
    }
};



export default counter