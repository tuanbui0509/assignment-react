import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
    name: 'login',
    initialState: false,
    reducers: {
        login: (state, payload) => {
            return true;
        },
        removeLogin: (state, payload) => {
            return false;
        }
    }
})

const { actions, reducer } = loginSlice;

export const { login, removeLogin } = actions;

export default reducer;