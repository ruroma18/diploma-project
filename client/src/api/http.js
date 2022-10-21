import axios from "axios";
import { getToken } from "utils/helperFunctions";
import CONSTANTS from '../constants';

const api = axios.create({
  baseURL: CONSTANTS.BASE_URL,
  headers: {
    'Authorization': `Bearer ${getToken(CONSTANTS.ACCESS_TOKEN)}`
  }
});

export default api;