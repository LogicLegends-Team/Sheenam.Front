import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./houses/testSlice";

const store = configureStore({
  reducer: {
    houses: testReducer,
  },
});

export default store;
