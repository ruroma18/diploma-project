import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import courseReducer from '../features/course/courseSlice';
import sectionReducer from '../features/section/sectionSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    section: sectionReducer
  }
});

export default store;