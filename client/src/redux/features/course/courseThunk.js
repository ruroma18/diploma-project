import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../../api/http';

export const getCourses = createAsyncThunk('course/getCourses',
  async (payload) => {
    const response = await api.get('course/getCourses');
    return response.data;
  });

export const createCourse = createAsyncThunk('course/createCourse',
  async (payload ) => {
    await api.post(`course/createCourse`, payload);
  });  