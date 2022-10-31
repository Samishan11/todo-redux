import * as types from "../action/type"
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case types.ADD_NEW_TODO:
            return [action.payload, ...state]
        case types.GET_ALL_TODO:
            return action.payload;
        case types.GET_A_TODO:
            return state.map(todo=> todo._id === action.payload ? console.log(todo) : console.log(null))
        case types.DELETE_TODO:
            return state.filter(todo =>  todo._id !== action.payload);
        case types.UPDATE_TODO:
            return state.map([...state, action.payload]);
        default:
            return state;
    }

}
