import { createSlice } from "@reduxjs/toolkit";
import { createCourse, getCourses } from "./courseThunk";

const initialState = {
  courseData: [],
  loading: null,
  error: null,
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: {
    [createCourse.pending]: (state, action) => {
      state.loading = true;
    },
    [createCourse.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [createCourse.rejected]: (state, action) => {
      state.loading = false;
    },
    [getCourses.pending]: (state, action) => {
      state.loading = true;
      state.courseData = [];
    },
    [getCourses.fulfilled]: (state, action) => {
      state.loading = false;
      state.courseData =  action.payload;
    },
    [getCourses.rejected]: (state, action) => {
      state.loading = false;
      state.courseData = [];
    },
  }
});

export default courseSlice.reducer;