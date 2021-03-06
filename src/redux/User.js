import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {},
  reducers: {
    getUser: (state, payload) => {
      return payload.payload;
    },
    removeUser: (state, payload) => {
      return {};
    },
  },
});

const { actions, reducer } = userSlice;

export const { getUser, removeUser } = actions;

export default reducer;
