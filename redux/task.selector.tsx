import { RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";
import moment from "moment";

export const selectTasks = (state: RootState) => state.task.tasks;

export const selectTimeFilteredTask = createSelector(selectTasks, (tasks) =>
  tasks.map((task) => {
    let from = moment(new Date(task.from));
    let to = moment(new Date(task.to));
    return to.diff(from);
  })
);

export const selectTaskTitle = createSelector(selectTasks, (tasks) =>
  tasks.filter((task) => task.from)
);
