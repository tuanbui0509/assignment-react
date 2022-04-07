import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'Task',
    initialState: [],
    reducers: {
        getListTask: (state, payload) => {
            return payload.payload;
        },
        removeListTask: (state, payload) => {
            return [];
        }
    }
})

const { actions, reducer } = taskSlice;

export const { getListTask, removeListTask } = actions;

export default reducer;