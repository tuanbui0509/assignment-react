import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
const ScheduleItem = (props) => {
    const { schedule } = props
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
                    type="submit"
                    className="btn btn-primary flex-center"
                    style={{ marginRight: '1rem' }}
                >
                    <ion-icon name="information-circle-outline"></ion-icon>Detail</Link>
            </td>
            <td>
                <Link
                    to={`/schedule/edit/${schedule.id}`}
                    type="submit"
                    className="btn btn-primary flex-center"
                    style={{ marginRight: '1rem' }}
                >
                    <ion-icon name="checkbox-outline"></ion-icon>Edit</Link>
            </td>
            <td>
                <button
                    type="submit"
                    className="btn btn-danger flex-center"
                    style={{ marginRight: '1rem' }}
                    
                >
                    <ion-icon name="trash-outline"></ion-icon>Delete</button>
            </td>
        </tr>
    )
}

export default ScheduleItem
