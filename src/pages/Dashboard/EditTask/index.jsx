import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";
const AddTask = props => {
    const history = useHistory();
    const [task, setTask] = useState({
        title: '',
        description: '',
        status: 0
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
    }


    return (
        <div>
            <button
                type="button"
                className="btn btn-danger flex-center"
                onClick={() => { history.goBack() }}
            >
                <ion-icon name="arrow-back-circle"></ion-icon>Back
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
                        <h5>ahsjkdad</h5>
                        <p>ahsjkdad</p>
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
                            <div className="p-3 mb-2 bg-light text-dark">Status</div>
                            <div className='flex-start'>
                                <div className="form-check" style={{ marginRight: '1rem' }}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="status"
                                        value='0'
                                        id="0"
                                        checked={task.status === 0}
                                        onChange={(e) => setTask({ ...task, status: e.target.value })}
                                    />
                                    <label className="form-check-label" htmlFor="0">
                                        Now
                                    </label>
                                </div>
                                <div className="form-check" style={{ marginRight: '1rem' }}>
                                    <input
                                        className="form-check-input"
                                        value='1'
                                        type="radio"
                                        name="status"
                                        id="1"
                                        onChange={(e) => setTask({ ...task, status: e.target.value })}
                                        checked={task.status === 1}

                                    />
                                    <label className="form-check-label" htmlFor="1">
                                        In process
                                    </label>
                                </div>
                                <div className="form-check" style={{ marginRight: '1rem' }}>
                                    <input
                                        className="form-check-input"
                                        value='2'
                                        type="radio"
                                        name="status"
                                        id="2"
                                        onChange={(e) => setTask({ ...task, status: e.target.value })}
                                        checked={task.status === 2}
                                    />
                                    <label className="form-check-label" htmlFor="2">
                                        Done
                                    </label>
                                </div>
                            </div>
                            <div className='flex-end'>
                                <button type="submit" className="btn btn-primary flex-center"><ion-icon name="checkmark-done-circle-outline"></ion-icon>Update</button>
                                <button type="submit" className="btn btn-danger flex-center"><ion-icon name="close-circle-outline"></ion-icon>Delete</button>
                                <button type="button" className="btn btn-light flex-center" onClick={() => { history.push('/') }}>
                                    <ion-icon name="pencil-outline"></ion-icon>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    )
}
AddTask.propTypes = {

}

export default AddTask
