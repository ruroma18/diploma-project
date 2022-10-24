import axios from "axios";
import { getToken } from "utils/helperFunctions";
import CONSTANTS from '../constants';

const api = axios.create({
  baseURL: CONSTANTS.BASE_URL,
});

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${getToken(CONSTANTS.ACCESS_TOKEN)}`,
  };
  return config;
}, (error) => Promise.reject(error));

export default api;