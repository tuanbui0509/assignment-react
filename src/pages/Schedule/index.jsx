import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'reactstrap'
import ScheduleItem from '../../components/Schedule/ScheduleItem'
import ScheduleList from '../../components/Schedule/ScheduleList'
import { Context } from '../../store/context/Context'

const Schedule = props => {
    const { schedules, dispatchSchedules } = useContext(Context);

    useEffect(() => {
        dispatchSchedules({ type: 'GET_SCHEDULES' })
    }, [])
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
        <ScheduleList>
            {showListSchedule()}
        </ScheduleList>
    )
}

Schedule.propTypes = {

}

export default Schedule
