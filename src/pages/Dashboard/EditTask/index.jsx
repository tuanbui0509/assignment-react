import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { DELETE_TASK_SUCCESS, MESSAGE_FAILURE, UPDATE_TASK_SUCCESS } from '../../../constants/Respone';
import { notificationError, notificationSuccess } from '../../../helper/Notification';
import { deleteTask, updateTask } from '../../../redux/Task';

const EditTask = props => {
    const history = useHistory();
    const { id } = useParams()
    const dispatch = useDispatch();
    const [task, setTask] = useState({
        id: '',
        title: '',
        description: '',
        state: 1
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(updateTask(task))
            notificationSuccess(UPDATE_TASK_SUCCESS, 1000);
            history.push('/')
        } catch (err) {
            notificationError(MESSAGE_FAILURE, 3000);
            console.log(err);
        }
    }
    const handleRemove = async (task) => {
        var confirm = window.confirm(`Are you want to remove ${task.title}`)
        if (confirm) {
            try {
                dispatch(deleteTask(task.id))
                notificationSuccess(DELETE_TASK_SUCCESS, 1000);
                history.push('/')
            } catch (err) {
                notificationError(MESSAGE_FAILURE, 3000);
                console.log(err);
            }
        }
    }

    const taskView = useSelector(state => {
        const foundTask = state.Task.tasks.find(x => x.id === +id);
        return foundTask;
    });
    useEffect(() => {
        setTask({
            id: taskView.id,
            title: taskView.title,
            description: taskView.description,
            state: taskView.state
        })
    }, [taskView.description, taskView.id, taskView.state, taskView.title])
    return (
        <div>
            <button
                type="button"
                className="btn btn-danger flex-center"
                onClick={() => { history.goBack() }}
            >
                <ion-icon class='btn-icon' name="arrow-back-circle"></ion-icon>Back
            </button>
            <div>
                <nav>
                    <div className="nav nav-tabs flex-end" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-view-tab" data-bs-toggle="tab" data-bs-target="#nav-view" type="button" role="tab" aria-controls="nav-view" aria-selected="true">View</button>
                        <button className="nav-link" id="nav-edit-tab" data-bs-toggle="tab" data-bs-target="#nav-edit" type="button" role="tab" aria-controls="nav-edit" aria-selected="false">Edit</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-view" role="tabpanel" aria-labelledby="nav-view-tab">
                        <h5>{task.title}</h5>
                        <p>{task.description}</p>
                    </div>
                    <div className="tab-pane fade" id="nav-edit" role="tabpanel" aria-labelledby="nav-edit-tab">
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
                                        checked={task.state === 2}

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
                                        checked={task.state === 3}
                                    />
                                    <label className="form-check-label" htmlFor="3">
                                        Done
                                    </label>
                                </div>
                            </div>
                            <div className='flex-end'>
                                <button type="submit" className="btn btn-primary flex-center mr-1"><ion-icon class='btn-icon' name="checkmark-done-circle-outline"></ion-icon>Update</button>
                                <button type="button" className="btn btn-danger flex-center mr-1"
                                    onClick={() => handleRemove(task)}

                                ><ion-icon class='btn-icon' name="trash-outline"></ion-icon>Delete</button>
                                <button type="button" className="btn btn-light flex-center" onClick={() => { history.push('/') }}>
                                    <ion-icon class='btn-icon' name="close-circle-outline"></ion-icon>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EditTask
