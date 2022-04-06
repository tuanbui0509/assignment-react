import { createSlice } from "@reduxjs/toolkit";


const taskSlice =  createSlice({
    name : 'Task',
    initialState: [],
    reducers:{
        addListTask : ( state , payload )=>{
            return payload.payload;
        },
        removeListTask : (state , payload )=>{
            return  [];
        }
    }
})

const { actions  , reducer } = taskSlice;

export const { addListTask ,  removeListTask } = actions;

export default reducer;