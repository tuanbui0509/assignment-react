import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";
import { Context } from '../../../store/context/Context';
const AddSchedule = props => {
    const history = useHistory();
    const { dispatchSchedules } = useContext(Context);

    const [schedule, setSchedule] = useState({
        title: '',
        description: '',
        creator: '',
        location: '',
        time_start: new Date(),
        time_end: new Date()
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchSchedules({ type: 'ADD_SCHEDULE', schedule })
        history.push('/')
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
                                value={schedule.title}
                                onChange={(e) => setSchedule({ ...schedule, title: e.target.value })}
                                required />
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                value={schedule.description}
                                rows={3}
                                placeholder="Insert a suitable description"
                                onChange={(e) => setSchedule({ ...schedule, description: e.target.value })}
                                required />
                        </div>
                        <div className="p-3 mb-2 bg-light text-dark">Status</div>
                        <div className='flex-start'>
                            <div className="form-check" style={{ marginRight: '1rem' }}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="status"
                                    value={0}
                                    id="0"
                                    checked={schedule.status === 0}
                                    onChange={(e) => setSchedule({ ...schedule, status: parseInt(e.target.value) })}
                                />
                                <label className="form-check-label" htmlFor="0">
                                    Now
                                </label>

                            </div>
                            <div className="form-check" style={{ marginRight: '1rem' }}>
                                <input
                                    className="form-check-input"
                                    value={1}
                                    type="radio"
                                    name="status"
                                    id="1"
                                    onChange={(e) => setSchedule({ ...schedule, status: parseInt(e.target.value) })}
                                />
                                <label className="form-check-label" htmlFor="1">
                                    In process
                                </label>
                            </div>
                            <div className="form-check" style={{ marginRight: '1rem' }}>
                                <input
                                    className="form-check-input"
                                    value={2}
                                    type="radio"
                                    name="status"
                                    id="2"
                                    onChange={(e) => setSchedule({ ...schedule, status: parseInt(e.target.value) })}
                                />
                                <label className="form-check-label" htmlFor="2">
                                    Done
                                </label>
                            </div>
                        </div>
                        <div className='flex-end'>
                            <button type="submit" className="btn btn-primary flex-center"><ion-icon name="checkmark-done-circle-outline"></ion-icon>Save</button>
                            <button type="button" className="btn btn-light flex-center" onClick={() => { history.goBack() }}>
                                <ion-icon name="pencil-outline"></ion-icon>Cancel</button>
                        </div>
                    </form>

                </div>
            </div>


        </div>

    )
}

AddSchedule.propTypes = {

}

export default AddSchedule
