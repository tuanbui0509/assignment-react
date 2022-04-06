import { createSlice } from "@reduxjs/toolkit";

const scheduleSlice = createSlice({
  name: "Schedule",
  initialState: [],
  reducers: {
    getSchedule: (state, payload) => {
      return payload.payload;
    },
    removeSchedule: (state, payload) => {
      return [];
    },
  },
});

const { actions, reducer } = scheduleSlice;

export const { getSchedule, removeSchedule } = actions;

export default reducer;
