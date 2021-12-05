import React, { useContext } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Context } from '../../../store/context/Context';
import { toast } from 'react-toastify';
const ScheduleItem = (props) => {
    const { dispatchSchedules } = useContext(Context);

    const { schedule } = props
    const handleRemove = () => {
        var confirm = window.confirm(`Are you want to remove ${schedule.title} of ${schedule.creator}`)
        if (confirm) {
            dispatchSchedules({ type: 'REMOVE_SCHEDULE', id: schedule.id })
            toast.success("Delete Schedule Successful !", {
                position: toast.POSITION.TOP_RIGHT
            });
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
                    type="submit"
                    className="btn btn-primary flex-center"
                    style={{ marginRight: '1rem' }}
                >
                    <ion-icon  class='btn-icon' name="information-circle-outline"></ion-icon>Detail</Link>
            </td>
            <td>
                <Link
                    to={`/schedule/edit/${schedule.id}`}
                    type="submit"
                    className="btn btn-primary flex-center"
                    style={{ marginRight: '1rem' }}
                >
                    <ion-icon  class='btn-icon' name="checkbox-outline"></ion-icon>Edit</Link>
            </td>
            <td>
                <button
                    type="submit"
                    className="btn btn-danger flex-center"
                    style={{ marginRight: '1rem' }}
                    onClick={() => handleRemove()}
                >
                    <ion-icon  class='btn-icon' name="trash-outline"></ion-icon>Delete</button>
            </td>
        </tr>
    )
}

export default ScheduleItem
