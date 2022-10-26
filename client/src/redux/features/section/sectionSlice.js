import { createSlice } from "@reduxjs/toolkit";
import {getSections, createSection} from './sectionThunk';

const initialState = {
  sectionData: [],
  loading: null,
}

export const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {},
  extraReducers: {
    [createSection.pednign]: (state, action) => {
      state.loading = true;
    },
    [createSection.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [createSection.rejected]: (state, action) => {
      state.loading = false;
    },
    [getSections.pednign]: (state, action) => {
      state.loading = true;
    },
    [getSections.fulfilled]: (state, action) => {
      state.loading = false;
      state.sectionData = action.payload;
    },
    [getSections.rejected]: (state, action) => {
      state.loading = false;
    }
  }
});

export default sectionSlice.reducer;