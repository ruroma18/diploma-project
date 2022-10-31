import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../../api/http';

export const getTask = createAsyncThunk('task/getTask',
  async (payload) => {
    const response = await api.get('task/getTasks', {params: {id: payload}});
    return response.data;
  });

export const createTask = createAsyncThunk('task/createTask',
  async (payload) => {
    await api.post('task/createTask', payload.data, {params: {id: payload.id}});
  });

export const getTaskById = createAsyncThunk('task/getTaskById', 
  async (payload) => {
    const response = await api.get('task/getTaskById', {params: {id: payload}});
    return response.data;
  })  