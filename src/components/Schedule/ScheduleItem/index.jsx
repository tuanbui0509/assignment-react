import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
const ScheduleItem = (props) => {
    const { schedule } = props
    const removeSchedule = () => {
        var confirm = window.confirm(`Are you want to remove ${schedule.title} of ${schedule.creator}`)
        if (confirm) {
            props.removeSchedule(schedule.id)
        }
    }
    return (
        <tr>
            <th scope="row">
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
            <td>
                <Link
                    to={`/schedule/edit/${schedule.id}`}
                    type="button"
                    className="btn btn-primary flex-center"
                    style={{ marginRight: '1rem' }}
                >
                    <ion-icon class='btn-icon' name="information-circle-outline"></ion-icon>Detail</Link>
            </td>
            <td>
                <Link
                    to={`/schedule/edit/${schedule.id}`}
                    type="submit"
                    className="btn btn-primary flex-center"
                    style={{ marginRight: '1rem' }}
                >
                    <ion-icon class='btn-icon' name="checkbox-outline"></ion-icon>Edit</Link>
            </td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger flex-center"
                    style={{ marginRight: '1rem' }}
                    onClick={() => removeSchedule()}>
                    <ion-icon class='btn-icon' name="trash-outline"></ion-icon>Delete</button>
            </td>
        </tr>
    )
}

export default ScheduleItem
