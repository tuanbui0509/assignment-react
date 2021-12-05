import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ScheduleItem from '../../components/Schedule/ScheduleItem'
import ScheduleList from '../../components/Schedule/ScheduleList'
import { Context } from '../../store/context/Context'

const Schedule = props => {
    const { schedules } = useContext(Context);

    const showListSchedule = () => {
        let result = null
        result = schedules?.map((schedule, index) => {
            return <ScheduleItem
                schedule={schedule}
                key={index}
            />
        })
        return result
    }

    return (
        <>
            <div className='container'>
                <Link to='/schedule/add' className="btn btn-primary"><ion-icon name="calendar-outline"></ion-icon>Add Schedule</Link>
            </div>
            <ScheduleList>
                {showListSchedule()}
            </ScheduleList>

        </>
    )
}

Schedule.propTypes = {

}

export default Schedule
