import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { deleteTaskApi, getAllTask, insertTask, updateTaskApi } from "../api/Task";

const taskSlice = createSlice({
    name: 'Task',
    initialState: { status: 'idle', tasks: [] },
    reducers: {
        getListTask: (state, payload) => {
            return payload.tasks;
        },
        removeListTask: (state, payload) => {
            return [];
        },
        // IMMER
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        }, // action creators
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                console.log({ action });
                state.tasks = action.payload;
                state.status = 'idle';
            })
            .addCase(addNewTask.fulfilled, (state, action) => {
                state.tasks.push(action.payload);
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                let currentTask = state.tasks.find((task) => task.id === action.payload);
                currentTask = action.payload;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                const newTask = [...state.tasks];
                newTask.splice(action.payload, 1);
            });
    },
})

export const fetchTasks = createAsyncThunk('tasks/fetchTasks',
    async () => {
        const res = await getAllTask();
        const data = await res.data;
        return data;
    });

export const addNewTask = createAsyncThunk(
    'tasks/addNewTask',
    async (newTask) => {
        const res = await insertTask(newTask);
        const data = await res.data;
        return data;
    }
);

export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async (updatedTask) => {
        if (!updatedTask.description.includes('Description'))
            updatedTask.description = `Description ${updatedTask.id}`
        const res = await updateTaskApi(updatedTask)
        const data = await res;
        return data.tasks;
    }
);

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (taskId) => {
        const res = await deleteTaskApi(taskId)
        const data = await res.data;
        console.log(data);
        return data.tasks;
    }
);
const { actions, reducer } = taskSlice;

export const { getListTask, removeListTask, addTask } = actions;

export default reducer;