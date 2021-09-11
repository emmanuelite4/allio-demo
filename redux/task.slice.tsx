import { createSlice } from "@reduxjs/toolkit";
import { TaskProps } from "../util/types";
import { addTask, deleteTask, fetchTasks, updateTask } from "./task.thunk";

interface State {
  loading: boolean;
  error: string;
  task: TaskProps | {};
  tasks: Array<TaskProps>;
}

const initialState: State = {
  loading: false,
  error: "",
  task: {},
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.tasks.unshift(action.payload);
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      const updatedTask = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      );
    });
  },
});

export default taskSlice.reducer;
