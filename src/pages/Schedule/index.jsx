import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useLoading from "../../hook/HookLoading"
import { deleteSchedule, getAllSchedule } from '../../api/Schedule'
import ScheduleItem from '../../components/Schedule/ScheduleItem'
import ScheduleList from '../../components/Schedule/ScheduleList'
import { getListSchedule } from '../../redux/Schedule'
import { notificationError, notificationSuccess } from '../../helper/Notification'
import { DELETE_SCHEDULE__SUCCESS, MESSAGE_FAILURE } from '../../constants/Respone'


const Schedule = props => {
    const [hidden, display, Loading] = useLoading();
    const schedules = useSelector((state) => state.Schedule);
    const dispatch = useDispatch();

    const getListUser = async () => {
        try {
            display();
            const res = await getAllSchedule();
            let temp = res.data;
            hidden();
            dispatch(getListSchedule(temp));
        } catch (err) {
            hidden();
            console.log(err);
        }
    };

    useEffect(() => {
        getListUser();
    }, []);

    const handleRemoveSchedule = async (scheduleId) => {
        try {
            display();
            const res = await deleteSchedule(scheduleId);
            notificationSuccess(DELETE_SCHEDULE__SUCCESS, 1000);
            hidden();
            getListUser();

        } catch (err) {
            hidden();
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
            {Loading}
        </>
    )
}

Schedule.propTypes = {
    schedules: PropTypes.object
}

export default Schedule
