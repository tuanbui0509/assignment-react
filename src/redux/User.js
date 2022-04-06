import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {},
  reducers: {
    addUser: (state, payload) => {
      return payload.payload;
    },
    updateUser: (state, payload) => {
      return payload.payload;
    },
    removeUser: (state, payload) => {
      return {};
    },
  },
});

const { actions, reducer } = userSlice;

export const { addUser, updateUser, removeUser } = actions;

export default reducer;
