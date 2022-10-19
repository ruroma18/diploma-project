import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, removeTokens, setToken } from "utils/helperFunctions";
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

export const register = createAsyncThunk('auth/register',
  async (payload) => {
    console.log(payload)
    const response = await api.post('auth/register', payload);
    return response.data;
  })

export const login = createAsyncThunk('auth/login',
  async (payload) => {
    const response = await api.post('auth/login', payload);
    setToken(CONSTANTS.ACCESS_TOKEN, response.data.tokenPair.accessToken);
    setToken(CONSTANTS.REFRESH_TOKEN, response.data.tokenPair.refreshToken);
    return response.data;
  });

export const signOut = createAsyncThunk('auth/signOut', async () => {
  removeTokens();
}); 