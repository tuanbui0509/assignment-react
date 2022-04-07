import React, { useEffect } from 'react';
import { getAllTask } from '../../../api/Task';
import useLoading from "../../../hook/HookLoading";
import { getListTask } from "../../../redux/Task";
import Task from '../Task';
import { useSelector, useDispatch } from 'react-redux'
const TaskList = (props) => {
    const [hidden, display, Loading] = useLoading();
    const tasks = useSelector((state) => state.Task);
    console.log(tasks);
    const dispatch = useDispatch();

    const getListUser = async () => {
        try {
            display();
            const res = await getAllTask();
            if (res.status === 200) {
                let temp = [...res.data];
                hidden();
                // })

                dispatch(getListTask(temp));
            }
        } catch (err) {
            hidden();
            console.log(err);
        }
    };

    useEffect(() => {
        getListUser();
    }, []);

    return (
        <>
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
            {Loading}
        </>
    )
}

TaskList.propTypes = {

}

export default TaskList
