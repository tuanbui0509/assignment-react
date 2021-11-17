import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import Task from '../Task'
import { Context } from '../../../store/context/Context'

const TaskList = (props) => {
    const { tasks, dispatchTasks } = useContext(Context);

    console.log('====================================');
    console.log(tasks?.filter(word => word.status === 1));
    console.log('====================================');
    console.log(tasks);
    return (
        <div className="row align-items-start ">
            <div className="col col-4">
                <Task
                    title="New Tasks"
                    icon="add-circle"
                    color="bg-primary"
                    tasks={tasks?.filter(word => word.status === 0)}
                />
            </div>
            <div className="col col-4">
                <Task
                    title="Tasks in process"
                    icon="sync-circle"
                    color="bg-danger"
                    tasks={tasks?.filter(word => word.status === 1)}
                />
            </div>
            <div className="col col-4">
                <Task
                    title="Tasks got done"
                    icon="checkmark-circle"
                    color="bg-success"
                    tasks={tasks?.filter(word => word.status === 2)}
                />
            </div>
        </div>
    )
}

TaskList.propTypes = {

}

export default TaskList
