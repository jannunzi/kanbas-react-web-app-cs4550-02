import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count2: 222,
};

const counter2Slice = createSlice({
  name: "counter2",
  initialState,
  reducers: {
    increment2: (state) => {
      state.count2 += 1;
    },
    decrement2: (state) => {
      state.count2 -= 1;
    },
    setTo: (state, { payload }) => {
      state.count2 = payload;
    },
  },
});

export default counter2Slice.reducer;
export const { increment2, decrement2, setTo } = counter2Slice.actions;
