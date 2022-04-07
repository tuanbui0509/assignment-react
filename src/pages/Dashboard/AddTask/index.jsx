import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { insertTask } from '../../../api/Task';
import { MESSAGE_FAILURE, UPDATE_TASK_SUCCESS } from '../../../constants/Respone';
import { notificationError, notificationSuccess } from '../../../helper/Notification';
import useLoading from "../../../hook/HookLoading";

const AddTask = props => {
    const history = useHistory();
    const [hidden, display, Loading] = useLoading();

    const [task, setTask] = useState({
        title: '',
        description: '',
        state: 1
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            display();
            const res = await insertTask(task);
            console.log(res.data);
            notificationSuccess(UPDATE_TASK_SUCCESS, 1000);
            hidden();
            history.push('/')
        } catch (err) {
            hidden();
            notificationError(MESSAGE_FAILURE, 3000);
            console.log(err);
        }
    }
    return (
        <div>
            <button
                type="button"
                className="btn btn-danger flex-center"
                onClick={() => { history.goBack() }}
            >
                <ion-icon class='btn-icon' name="arrow-back-circle"></ion-icon>Back
            </button>
            <ul className="nav nav-tabs justify-content-end" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="add-tab" data-bs-toggle="tab" data-bs-target="#add" type="button" role="tab" aria-controls="add" aria-selected="true">Add</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="add" role="tabpanel" aria-labelledby="add-tab">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                placeholder="Insert the title"
                                value={task.title}
                                onChange={(e) => setTask({ ...task, title: e.target.value })}
                                required />
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                value={task.description}
                                rows={3}
                                placeholder="Insert a suitable description"
                                onChange={(e) => setTask({ ...task, description: e.target.value })}
                                required />
                        </div>
                        <div className="p-3 mb-2 bg-light text-dark">State</div>
                        <div className='flex-start'>
                            <div className="form-check" style={{ marginRight: '1rem' }}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="state"
                                    value={1}
                                    id="1"
                                    checked={task.state === 1}
                                    onChange={(e) => setTask({ ...task, state: parseInt(e.target.value) })}
                                />
                                <label className="form-check-label" htmlFor="1">
                                    Now
                                </label>

                            </div>
                            <div className="form-check" style={{ marginRight: '1rem' }}>
                                <input
                                    className="form-check-input"
                                    value={2}
                                    type="radio"
                                    name="state"
                                    id="2"
                                    onChange={(e) => setTask({ ...task, state: parseInt(e.target.value) })}
                                />
                                <label className="form-check-label" htmlFor="2">
                                    In process
                                </label>
                            </div>
                            <div className="form-check" style={{ marginRight: '1rem' }}>
                                <input
                                    className="form-check-input"
                                    value={3}
                                    type="radio"
                                    name="state"
                                    id="3"
                                    onChange={(e) => setTask({ ...task, state: parseInt(e.target.value) })}
                                />
                                <label className="form-check-label" htmlFor="3">
                                    Done
                                </label>
                            </div>
                        </div>
                        <div className='flex-end'>
                            <button type="submit" className="btn btn-primary flex-center mr-1"><ion-icon class='btn-icon' name="add-circle-outline"></ion-icon>Add</button>
                            <button type="button" className="btn btn-light flex-center" onClick={() => { history.goBack() }}>
                                <ion-icon class='btn-icon' name="close-circle-outline"></ion-icon>Cancel</button>
                        </div>
                    </form>

                </div>
            </div>
            {Loading}
        </div>

    )
}

export default AddTask
