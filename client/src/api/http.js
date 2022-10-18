import axios from "axios";
import CONSTANTS from '../constants';

const api = axios.create({
  baseURL: CONSTANTS.BASE_URL
});

export default api;