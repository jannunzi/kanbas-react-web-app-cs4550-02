import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";
const store = configureStore({
  reducer: {
    helloReducer,
  },
});
export default store;
