import React from 'react'
import Task from '../../components/Dashboard/Task'
import tasks from '../../helpers/tasks'
const Dashboard = props => {
    return (
        <div className="container">
            <div className="row align-items-start ">
                <div className="col col-4">
                    <Task
                        title="New Tasks"
                        icon="add-circle"
                        color="bg-primary"
                        tasks={tasks.filter(word => word.status === 0)}
                    />
                </div>
                <div className="col col-4">
                    <Task
                        title="Tasks in process"
                        icon="sync-circle"
                        color="bg-danger"
                        tasks={tasks.filter(word => word.status === 1)}
                    />
                </div>
                <div className="col col-4">
                    <Task
                        title="Tasks got done"
                        icon="checkmark-circle"
                        color="bg-success"
                        tasks={tasks.filter(word => word.status === 2)}
                    />
                </div>
            </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
