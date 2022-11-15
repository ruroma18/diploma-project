import { createSlice } from "@reduxjs/toolkit";
import {getSections, createSection, deleteSection} from './sectionThunk';

const initialState = {
  sectionData: [],
  loading: null,
}

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {},
  extraReducers: {
    [createSection.pending]: (state, action) => {
      state.loading = true;
    },
    [createSection.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [createSection.rejected]: (state, action) => {
      state.loading = false;
    },
    [getSections.pending]: (state, action) => {
      state.loading = true;
    },
    [getSections.fulfilled]: (state, action) => {
      state.loading = false;
      state.sectionData = action.payload;
    },
    [getSections.rejected]: (state, action) => {
      state.loading = false;
    },
    [deleteSection.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteSection.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [deleteSection.rejected]: (state, action) => {
      state.loading = false;
    }
  }
});

export default sectionSlice.reducer;