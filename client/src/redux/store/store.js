import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import courseReducer from '../features/course/courseSlice';
import sectionReducer from '../features/section/sectionSlice';
import materialReducer from '../features/material/materialSlice';
import taskReducer from '../features/task/taskSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer,
    section: sectionReducer,
    material: materialReducer,
    task: taskReducer
  }
});

export default store;