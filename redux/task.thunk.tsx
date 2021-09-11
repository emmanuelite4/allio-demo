import { createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../service/api";
import { TimeProps } from "../util/types";

export const fetchTasks = createAsyncThunk("task/tasks", async () => {
  try {
    let res = await apiService.fetchTask();
    return await res.data;
  } catch (err: any) {
    const { response } = err;
    const { request, ...errorObject } = response;
    return errorObject.data.msg;
  }
});

export const deleteTask = createAsyncThunk(
  "task/delete",
  async (payload: string) => {
    try {
      await apiService.deleteTask(payload);
      return payload;
    } catch (err: any) {
      const { response } = err;
      const { request, ...errorObject } = response;
      return errorObject.data.msg;
    }
  }
);

export const addTask = createAsyncThunk("task/add", async (payload: string) => {
  try {
    let res = await apiService.addTask(payload);
    return await res.data;
  } catch (err: any) {
    const { response } = err;
    const { request, ...errorObject } = response;
    return errorObject.data.msg;
  }
});

interface updatePayload extends TimeProps {
  id: string;
}

export const updateTask = createAsyncThunk(
  "task/update",
  async (payload: updatePayload) => {
    try {
      const { id, from, to } = payload;
      let res = await apiService.updateTask(id, { from, to });
      return await res.data;
    } catch (err: any) {
      const { response } = err;
      const { request, ...errorObject } = response;
      return errorObject.data.msg;
    }
  }
);
