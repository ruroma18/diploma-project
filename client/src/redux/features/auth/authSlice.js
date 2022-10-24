import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, login, signOut, register } from "./authThunk";

const initialState = {
  userData: {},
  token: null,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signOut.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = {};
      state.token = null;
    },
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      const {tokenPair, user} = action.payload;
      state.loading = false;
      state.userData = user;
      state.token = tokenPair.accessToken;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      const {tokenPair, user} = action.payload;
      state.loading = false;
      state.userData = user;
      state.token = tokenPair.accessToken;
    },
    [fetchUserData.rejected]: (state, action) => {
      state.loading = false;
      state.userData = {};
      state.token = null;
    },
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      const {data} = action.payload;
      state.loading = false;
      state.userData = data;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
    },
  }
});

export default authSlice.reducer;