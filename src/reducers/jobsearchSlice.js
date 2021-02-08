import { createSlice } from '@reduxjs/toolkit';
import jobs, {jobPost} from '../apis/jobs'

export const jobsSlice = createSlice({
  name: 'githubJobs',
  initialState: {
    listOfJobs: [],
    pageNumber: 1,
    jobPost: [],
  },
  reducers: {
    getJobs: (state, action) => {
      state.listOfJobs = action.payload;
    },
    incrementPageNumber: state => {
      state.pageNumber += 1;
    },
    decrementPageNumber: state => {
      state.pageNumber === 1 ? state.pageNumber = 1 : state.pageNumber -=1; 
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    getJob: (state, action) => {
      state.jobPost = action.payload
    }
  },
});

export const { getJobs, getJob, incrementPageNumber, setPageNumber, decrementPageNumber } = jobsSlice.actions;

export const fetchJobs = (paramsObj, pageNumber) => async dispatch => {

  if (pageNumber) {
    paramsObj['page'] = pageNumber
  }

  const config = {
    params: {
      ...paramsObj
    }
  }
  const response = await jobs.get('/', config)

  dispatch(getJobs(response.data))
  dispatch(setPageNumber(pageNumber));
};

export const getJobPost = (id) => async dispatch => {
  const response = await jobPost.get(`/${id}.json`);

  dispatch(getJob(response.data));
}

export const incrementPage = (pageNumber, paramsObj) => async dispatch => {
  await dispatch(incrementPageNumber(pageNumber));

  let newPageNumber = Number(pageNumber) + 1;
  dispatch(fetchJobs(paramsObj, newPageNumber))
} 

export const decrementPage = (pageNumber, paramsObj) => async dispatch => {
  await dispatch(decrementPageNumber(pageNumber));

  let newPageNumber = Number(pageNumber) - 1;
  dispatch(fetchJobs(paramsObj, newPageNumber))
} 

export const selectJobs = state => state.githubJobs.listOfJobs;
export const selectPageNumber = state => state.githubJobs.pageNumber;

export default jobsSlice.reducer;
