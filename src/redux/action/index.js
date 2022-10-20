import axios from "axios";
import { ADD_NEW_TODO, GET_ALL_TODO } from "./type";

const API_URL = "http://localhost:8000";

export const addTodo = (name, age, desc) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/post`)
        console.log(name, age, desc)
        dispatch({ type: ADD_NEW_TODO, payload: res.data })
    } catch (error) {
        console.log(error)
    }
}
export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/get`)
        console.log(res)
        dispatch({ type: GET_ALL_TODO, payload: res.data })
    } catch (error) {
        console.log(error)
    }
}