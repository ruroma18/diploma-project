import { createSlice } from "@reduxjs/toolkit";
import { createTask, deleteTask, getTask, getTaskById } from "./taskThunk";

const initialState = {
  taskList: [],
  taskData: {task: {}, answers: [], inputBlock: {}},
  loading: false
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: {
    [createTask.pending]: (state, action) => {
      state.loading = true;
    },
    [createTask.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [createTask.rejected]: (state, action) => {
      state.loading = false;
    },
    [getTask.pending]: (state, action) => {
      state.loading = true;
    },
    [getTask.fulfilled]: (state, action) => {
      state.loading = false;
      state.taskList = action.payload;
    },
    [getTask.rejected]: (state, action) => {
      state.loading = false;
    },
    [getTaskById.pending]: (state, action) => {
      state.loading = true;
    },
    [getTaskById.fulfilled]: (state, action) => {
      state.loading = false;
      state.taskData = action.payload;
    },
    [getTaskById.rejected]: (state, action) => {
      state.loading = false;
    },
    [deleteTask.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteTask.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [deleteTask.rejected]: (state, action) => {
      state.loading = false;
    }
  }
});

export default taskSlice.reducer;