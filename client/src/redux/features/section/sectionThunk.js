import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../../api/http';

export const getSections = createAsyncThunk('section/getSections',
  async (payload) => {
    const response = await api.get('section/getSections', {params: {id: payload}})
    console.log(response)
    return response.data;
  });

export const createSection = createAsyncThunk('section/createSection',
  async (payload) => {
    console.log(payload)
    await api.post('section/createSection', payload, {params: {id: payload.courseId}} );
    window.location.reload();
  });  
