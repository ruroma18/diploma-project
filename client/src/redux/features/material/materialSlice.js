import { createSlice } from "@reduxjs/toolkit";
import { createMaterial, deleteMaterial, getMaterials } from "./materialThunk";

const initialState = {
  materialData: [],
  loading: null
}

export const materialSlice = createSlice({
  name: 'material',
  initialState,
  reducers: {},
  extraReducers: {
    [createMaterial.pending]: (state, action) => {
      state.loading = true;
    },
    [createMaterial.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [createMaterial.rejected]: (state, action) => {
      state.loading = false;
    },
    [getMaterials.pending]: (state, action) => {
      state.loading = true;
    },
    [getMaterials.fulfilled]: (state, action) => {
      state.loading = false;
      state.materialData = action.payload;
    },
    [getMaterials.rejected]: (state, action) => {
      state.loading = false;
    },
    [deleteMaterial.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteMaterial.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [deleteMaterial.rejected]: (state, action) => {
      state.loading = false;
    },
  }
})

export default materialSlice.reducer;