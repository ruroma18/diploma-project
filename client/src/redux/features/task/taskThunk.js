import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../../api/http';

export const getTask = createAsyncThunk('task/getTask',
  async (payload) => {
    const response = await api.get('task/getTask', {params: {id: payload}});
    return response;
  })

export const createTask = createAsyncThunk('task/createTask',
  async (payload) => {
    await api.post('task/createTask', payload.data, {params: {id: payload.id}});
  })  