import axios from "axios";
import { ADD_NEW_TODO, DELETE_TODO, GET_ALL_TODO, GET_A_TODO, UPDATE_TODO } from "./type";

const API_URL = "http://localhost:8000";

export const addTodo = (name, age, desc) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/post`, {
            name, age, desc
        })
        dispatch({ type: ADD_NEW_TODO, payload: res.data })
    } catch (error) {
        console.log(error)
    }
}
export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/get`)
        dispatch({ type: GET_ALL_TODO, payload: res.data })
    } catch (error) {
        console.log(error)
    }
}
export const getSingleTodos = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/get/${id}`)
        console.log(res.data)
        dispatch({ type: GET_A_TODO, payload: res.data })
    } catch (error) {
        console.log(error)
    }
}
export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/delete/${id}`)
        dispatch({ type: DELETE_TODO, payload: res.data })
    } catch (error) {
        console.log(error)
    }
}
export const updateTodo = (id, name , age ,desc) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/update/${id}` , {
            name ,age ,desc
        })
        dispatch({ type: UPDATE_TODO, payload: res.data })
    } catch (error) {
        console.log(error)
    }
}