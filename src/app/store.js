import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../reducers/jobsearchSlice';

export default configureStore({
  reducer: {
    githubJobs: jobsReducer,
  },
});
