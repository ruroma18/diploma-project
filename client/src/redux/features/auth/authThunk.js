import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, removeTokens, setToken } from "utils/helperFunctions";
import history from "utils/history";
import api from '../../../api/http';
import CONSTANTS from '../../../constants';

export const fetchUserData = createAsyncThunk('auth/fetchUserData',
  async (data, { rejectWithValue }) => {
    try {
      const accessToken = getToken(CONSTANTS.ACCESS_TOKEN);
      api.defaults.headers.authorization = `Bearer ${accessToken}`;
      const response = await api.get('auth/getUser');
      return response.data;
    } catch (error) {
      removeTokens();
      rejectWithValue(error);
    }
  });

export const login = createAsyncThunk('auth/login',
  async(payload) => {
    const response = await api.post('auth/login', payload);
    setToken(CONSTANTS.ACCESS_TOKEN, response.data.tokenPair.accessToken);
    setToken(CONSTANTS.REFRESH_TOKEN, response.data.tokenPair.refreshToken);
    history.push(`/${response.data.role}`);
    return response.data;
  });

export const signOut = createAsyncThunk('auth/signOut', async() => {
  removeTokens();
}); 