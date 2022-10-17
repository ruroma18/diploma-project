import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, login, signOut } from "./authThunk";

const initialState = {
  userData: null,
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
      state.userData = null;
      state.token = null;
    },
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      const {accessToken, user} = action.payload;
      state.loading = false;
      state.userData = user;
      state.token = accessToken;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      const {accessToken, user} = action.payload;
      state.loading = false;
      state.userData = user;
      state.token = accessToken;
    },
    [fetchUserData.rejected]: (state, action) => {
      state.loading = false;
      state.userData = null;
      state.token = null;
    },
  }
});

export const {} = authSlice.actions;

export default authSlice.reducer;