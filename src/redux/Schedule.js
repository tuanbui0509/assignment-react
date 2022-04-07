import { createSlice } from "@reduxjs/toolkit";

const scheduleSlice = createSlice({
  name: "Schedule",
  initialState: [],
  reducers: {
    getListSchedule: (state, payload) => {
      return payload.payload;
    },
    removeSchedule: (state, payload) => {
      return [];
    },
  },
});

const { actions, reducer } = scheduleSlice;

export const { getListSchedule, removeSchedule } = actions;

export default reducer;
