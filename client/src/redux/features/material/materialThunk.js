import { createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../../api/http';

export const getMaterials = createAsyncThunk('/material/getMaterials', 
  async(payload) => {
    const response = await api.get('/material/getMaterials', {params: {id: payload}});
    return response.data;
  })

export const createMaterial = createAsyncThunk('/material/createMaterial',
  async (payload) => {
    await api.post('material/createMaterial', payload.data, {params: {id: payload.sectionId}})
    window.location.reload();
  })  