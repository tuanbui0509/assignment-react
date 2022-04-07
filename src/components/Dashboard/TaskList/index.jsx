import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTask } from '../../../api/Task';
import useLoading from "../../../hook/HookLoading";
import { getListTask } from "../../../redux/Task";
import Task from '../Task';
const TaskList = () => {
    const [hidden, display, Loading] = useLoading();
    const tasks = useSelector((state) => state.Task);
    const dispatch = useDispatch();

    const getListUser = async () => {
        try {
            display();
            const res = await getAllTask();
            let temp = res.data;
            hidden();
            dispatch(getListTask(temp));
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
                        tasks={tasks?.filter(word => word.state === 1)}
                    />
                </div>
                <div className="col col-4">
                    <Task
                        title="Tasks in process"
                        icon="sync-circle"
                        color="bg-danger"
                        tasks={tasks?.filter(word => word.state === 2)}
                    />
                </div>
                <div className="col col-4">
                    <Task
                        title="Tasks got done"
                        icon="checkmark-circle"
                        color="bg-success"
                        tasks={tasks?.filter(word => word.state === 3)}
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
