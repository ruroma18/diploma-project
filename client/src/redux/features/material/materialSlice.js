import { createSlice } from "@reduxjs/toolkit";
import { createMaterial, getMaterials } from "./materialThunk";

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
  }
})

export default materialSlice.reducer;