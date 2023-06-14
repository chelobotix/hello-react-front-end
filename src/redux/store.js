import { configureStore } from "@reduxjs/toolkit";
import msgsReducer from "./features/msgsSlice";

const store = configureStore({
  reducer: {
    message: msgsReducer,
  },
});

export default store;
