import { createSlice } from "@reduxjs/toolkit";
import { createTask, getTask } from "./taskThunk";

const initialState = {
  taskData: [],
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
      state.taskData = action.payload;
    },
    [getTask.rejected]: (state, action) => {
      state.loading = false;
    }
  }
});

export default taskSlice.reducer;