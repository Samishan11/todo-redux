import React, { useState } from 'react'
import { addTodo } from '../redux/action';
import { useDispatch } from 'react-redux';
const Addtodo = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [age, setage] = useState('')
    const [desc, setDesc] = useState('')

    const submitForm = () => {
        dispatch(addTodo(name, age, desc))
    }

    return (
        <div className="pb-2">
            <div className="card">
                <form>
                    <div className="card-body">
                        <div className="d-flex flex-row align-items-center">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                id="exampleFormControlInput1"
                                placeholder="Enter name"
                                onChange={e => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                id="exampleFormControlInput1"
                                placeholder="Enter age"
                                onChange={e => setage(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                id="exampleFormControlInput1"
                                placeholder="Enter desc"
                                onChange={e => setDesc(e.target.value)}
                            />
                            <a href="#!" data-mdb-toggle="tooltip" title="Set due date">
                                <i className="fas fa-calendar-alt fa-lg me-3" />
                            </a>
                            <div>
                                <button onClick={submitForm} type="button" className="btn btn-primary">
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Addtodo