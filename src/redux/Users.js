import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    getListUser: (state, payload) => {
      return payload.payload;
    },
    removeListUser: (state, payload) => {
      return [];
    },
  },
});

const { actions, reducer } = userSlice;

export const { getListUser, removeUser } = actions;

export default reducer;
