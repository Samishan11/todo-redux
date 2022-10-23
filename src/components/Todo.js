import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos, deleteTodo, getSingleTodos } from '../redux/action';
import "bootstrap-icons/font/bootstrap-icons.css";
const Todo = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
  
    React.useEffect(() => {
        dispatch(getAllTodos())
    }, [])
    return (
        <>
            <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                <hr className="my-4" />
                <p className="small mb-0 me-2 text-muted">Filter</p>
                <select className="select">
                    <option value={1}>All</option>
                    <option value={2}>Completed</option>
                    <option value={3}>Active</option>
                    <option value={4}>Has due date</option>
                </select>
                <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
                <select className="select">
                    <option value={1}>Added date</option>
                    <option value={2}>Due date</option>
                </select>
                <a
                    href="#!"
                    style={{ color: "#23af89" }}
                    data-mdb-toggle="tooltip"
                    title="Ascending"
                >
                    <i className="fas fa-sort-amount-down-alt ms-2" />
                </a>
            </div>
            {
                todos?.map(data => {
                    return (
                        <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
                            <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                                <div className="form-check">
                                    <input
                                        className="form-check-input me-0"
                                        type="checkbox"
                                        defaultValue=""
                                        id="flexCheckChecked1"
                                        aria-label="..."
                                        defaultChecked=""
                                    />
                                </div>
                            </li>
                            <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                                <p className="lead me-5 fw-normal mb-0">
                                 {data.name}
                                </p>
                                <p className="lead me-5 fw-normal mb-0">
                                {data.age}
                                </p>
                                <p className="lead me-5 fw-normal mb-0">
                                {data.desc}
                                </p>
                            </li>
                            <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                                <div className="d-flex flex-row justify-content-end mb-1">
                                    <a
                                        href="#!"
                                        className="text-info"
                                        data-mdb-toggle="tooltip"
                                        title="Edit todo"
                                    >
                                        <i onClick={()=>{dispatch(getSingleTodos(data._id))}} className="bi bi-pencil me-3" />
                                    </a>
                                    <i onClick={()=>{dispatch(deleteTodo(data._id))}} className="bi bi-trash-fill" />

                                </div>
                                <div className="text-end text-muted">
                                    <a
                                        href="#!"
                                        className="text-muted"
                                        data-mdb-toggle="tooltip"
                                        title="Created date"
                                    >
                                        <p className="small mb-0">
                                            <i className="fas fa-info-circle me-2" />
                                            28th Jun 2020
                                        </p>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    )
                })
            }

        </>
    )
}

export default Todo