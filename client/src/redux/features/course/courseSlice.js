import { createSlice } from "@reduxjs/toolkit";
import { createCourse, getCourseById, getCourses } from "./courseThunk";

const initialState = {
  selectedCourse: {},
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
    [getCourseById.pending]: (state, action) => {
      state.loading = true;
      state.selectedCourse = {};
    },
    [getCourseById.fulfilled]: (state, action) => {
      state.loading = false;
      state.selectedCourse =  action.payload;
    },
    [getCourseById.rejected]: (state, action) => {
      state.loading = false;
      state.selectedCourse = {};
    },
  }
});

export default courseSlice.reducer;