import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import { Table } from 'reactstrap';
import { getAllSchedule, updateSchedule } from '../../../api/Schedule';
import { INSERT_SCHEDULE_SUCCESS, MESSAGE_FAILURE } from '../../../constants/Respone';
import { notificationError, notificationSuccess } from '../../../helper/Notification';
import { getListSchedule } from '../../../redux/Schedule';
const EditSchedule = props => {
    const history = useHistory();
    const { id } = useParams()
    const [schedule, setSchedule] = useState({
        title: '',
        description: '',
        creator: '',
        location: '',
        time_start: moment(new Date()).format('DD/MM/yyyy HH:mm:ss'),
        time_end: moment(new Date()).format('DD/MM/yyyy HH:mm:ss')
    })
    const dispatch = useDispatch();
    const getUsers = async () => {
        try {
            const res = await getAllSchedule();
            let temp = res.data;
            dispatch(getListSchedule(temp));
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getUsers();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await updateSchedule(schedule);
            console.log(res.data);
            notificationSuccess(INSERT_SCHEDULE_SUCCESS, 1000);
            history.push('/schedule')
        } catch (err) {
            notificationError(MESSAGE_FAILURE, 3000);
            console.log(err);
        }
    }
    const scheduleView = useSelector(state => {
        const foundSchedule = state.Schedule.find(x => x.id === +id);
        return foundSchedule;
    });

    useEffect(() => {
        setSchedule({
            id: scheduleView.id,
            title: scheduleView.title,
            description: scheduleView.description,
            creator: scheduleView.creator,
            location: scheduleView.location,
            time_start: scheduleView.time_start,
            time_end: scheduleView.time_end
        })
    }, [scheduleView.creator, scheduleView.description, scheduleView.id, scheduleView.location, scheduleView.time_end, scheduleView.time_start, scheduleView.title])

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
                        <div>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>
                                            Title
                                        </th>
                                        <th>
                                            Creator
                                        </th>
                                        <th>
                                            Description
                                        </th>
                                        <th>
                                            Location
                                        </th>
                                        <th>
                                            Time Start
                                        </th>
                                        <th>
                                            Time End
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            {schedule.title}
                                        </th>
                                        <td>
                                            {schedule.creator}
                                        </td>
                                        <td>
                                            {schedule.description}
                                        </td>
                                        <td>
                                            {schedule.location}
                                        </td>
                                        <td>
                                            {moment(schedule.time_start).format('DD/MM/yyyy HH:mm:ss')}
                                        </td>
                                        <td>
                                            {moment(schedule.time_end).format('DD/MM/yyyy HH:mm:ss')}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="tab-pane fade mb-3" id="nav-edit" role="tabpanel" aria-labelledby="nav-edit-tab">
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
                                    max={schedule.time_end}
                                    value={moment(schedule.time_start).format('YYYY-MM-DDThh:mm')}
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
                                    value={moment(schedule.time_end).format('YYYY-MM-DDThh:mm')}
                                    onChange={(e) => setSchedule({ ...schedule, time_end: e.target.value })}
                                    required />
                            </div>

                            <div className='flex-end'>
                                <button type="submit" className="btn btn-primary flex-center"><ion-icon class='btn-icon' name="checkmark-done-circle-outline"></ion-icon>Update</button>
                                <button type="button" className="btn btn-light flex-center" onClick={() => { history.push('/schedule') }}>
                                    <ion-icon class='btn-icon' name="pencil-outline"></ion-icon>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


EditSchedule.propTypes = {

}

export default EditSchedule
