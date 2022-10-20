import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseData: null,
  loading: null,
  error:null,
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: {}
});

export default courseSlice.reducer;