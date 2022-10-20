import * as types from "../action/type"
export const todoReducer = (state = [], action) =>{
    switch(action.type){
        case types.ADD_NEW_TODO:
            return [action.payload , ...state]
        case types.GET_ALL_TODO:
            return action.payload
        default:
            return state;
    }

}
