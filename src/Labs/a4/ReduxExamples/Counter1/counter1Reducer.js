import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count1: 111,
};

const counter1Slice = createSlice({
  name: "counter1",
  initialState,
  reducers: {
    increment1: (state) => {
      state.count1 += 1;
    },
    decrement1: (state) => {
      state.count1 -= 1;
    },
    setTo: (state, action) => {
      state.count1 = action.payload;
    },
  },
});

export default counter1Slice.reducer;
export const { increment1, decrement1, setTo } = counter1Slice.actions;
