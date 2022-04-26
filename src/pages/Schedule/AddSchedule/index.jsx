import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { insertSchedule } from '../../../api/Schedule';
import { INSERT_SCHEDULE_SUCCESS, MESSAGE_FAILURE } from '../../../constants/Respone';
import { notificationError, notificationSuccess } from '../../../helper/Notification';

const AddSchedule = props => {
    const history = useHistory();

    const [schedule, setSchedule] = useState({
        title: '',
        description: '',
        creator: '',
        location: '',
        time_start: new Date(),
        time_end: new Date()
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await insertSchedule(schedule);
            console.log(res.data);
            notificationSuccess(INSERT_SCHEDULE_SUCCESS, 1000);
            history.push('/schedule')
        } catch (err) {
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
                <div className="tab-pane fade show active mb-3" id="add" role="tabpanel" aria-labelledby="add-tab">
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
                            <label htmlFor="creator" className="form-label">Creator</label>
                            <input
                                type="text"
                                className="form-control"
                                id="creator"
                                name="creator"
                                placeholder="Insert the creator"
                                value={schedule.creator}
                                onChange={(e) => setSchedule({ ...schedule, creator: e.target.value })}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                name="location"
                                placeholder="Insert the location"
                                value={schedule.location}
                                onChange={(e) => setSchedule({ ...schedule, location: e.target.value })}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
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
                        <div className="mb-3">
                            <label htmlFor="time_start" className="form-label">Time Start</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                id="time_start"
                                name="time_start"
                                value={schedule.time_start}
                                onChange={(e) => setSchedule({ ...schedule, time_start: e.target.value })}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="time_start" className="form-label">Time End</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                id="time_end"
                                name="time_end"
                                min={schedule.time_start}
                                value={schedule.time_end}
                                onChange={(e) => setSchedule({ ...schedule, time_end: e.target.value })}
                                required />
                        </div>

                        <div className='flex-end'>
                            <button type="submit" className="btn btn-primary flex-center"><ion-icon class='btn-icon' name="add-circle-outline"></ion-icon>Add</button>
                            <button type="button" className="btn btn-light flex-center" onClick={() => { history.push('/schedule') }}>
                                <ion-icon class='btn-icon' name="pencil-outline"></ion-icon>Cancel</button>
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
