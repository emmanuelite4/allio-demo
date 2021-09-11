import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task.slice";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
