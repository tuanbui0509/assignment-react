import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteSchedule, getAllSchedule } from '../../api/Schedule'
import ScheduleItem from '../../components/Schedule/ScheduleItem'
import ScheduleList from '../../components/Schedule/ScheduleList'
import { DELETE_SCHEDULE__SUCCESS, MESSAGE_FAILURE } from '../../constants/Respone'
import { notificationError, notificationSuccess } from '../../helper/Notification'
import { getListSchedule } from '../../redux/Schedule'


const Schedule = props => {
    const schedules = useSelector((state) => state.Schedule);
    const dispatch = useDispatch();

    const getListUser = async () => {
        try {
            const res = await getAllSchedule();
            let temp = res.data;
            dispatch(getListSchedule(temp));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getListUser();
    }, []);

    const handleRemoveSchedule = async (scheduleId) => {
        try {
            const res = await deleteSchedule(scheduleId);
            notificationSuccess(DELETE_SCHEDULE__SUCCESS, 1000);
            getListUser();

        } catch (err) {
            notificationError(MESSAGE_FAILURE, 3000);
            console.log(err);
        }
    }

    const showListSchedule = () => {
        let result = null
        result = schedules?.map((schedule, index) => {
            return <ScheduleItem
                schedule={schedule}
                key={index}
                removeSchedule={handleRemoveSchedule}
            />
        })
        return result
    }

    return (
        <>
            <div className='container'>
                <Link to='/schedule/add' className="btn btn-primary d-flex align-items-center" style={{ width: '155px' }}>
                    <ion-icon class='btn-icon' name="calendar-outline"></ion-icon>Add Schedule</Link>
            </div>
            <ScheduleList>
                {showListSchedule()}
            </ScheduleList>
        </>
    )
}

Schedule.propTypes = {
    schedules: PropTypes.object
}

export default Schedule
