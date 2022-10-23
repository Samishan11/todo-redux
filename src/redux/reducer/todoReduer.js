import * as types from "../action/type"
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case types.ADD_NEW_TODO:
            return [action.payload, ...state]
        case types.GET_ALL_TODO:
            return action.payload
        case types.DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id);
        case types.GET_A_TODO:
            return state.map(todo => todo._id === action.payload._id ? todo.isClicked && !todo.isClicked :todo)
        case types.UPDATE_TODO:
            return state.map(todo => todo._id === action.payload._id ? [...state, action.payload] : todo);
        default:
            return state;
    }
}
