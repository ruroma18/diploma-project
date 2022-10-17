import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, removeToken, setToken } from "utils/helperFunctions";
import history from "utils/history";
import api from '../../../api/http';

export const fetchUserData = createAsyncThunk('auth/fetchUserData',
  async (data, { rejectWithValue }) => {
    try {
      const accessToken = getToken();
      api.defaults.headers.Authorization = `Bearer ${accessToken}`;
      const response = await api.get('/auth/user');
      return { ...response.data, accessToken };
    } catch (error) {
      removeToken();
      return rejectWithValue('');
    }
  });

export const login = createAsyncThunk('auth/login',
  async(payload) => {
    const response = await api.post('/auth/login', payload);
    setToken(response.data.tokenPair.accessToken);
    history.push(`/${response.data.role}`);
    return response.data;
  });

export const signOut = createAsyncThunk('auth/signOut', async() => {
  removeToken();
}); 