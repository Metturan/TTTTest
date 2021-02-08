import axios from 'axios'

export default axios.create({
  baseURL: 'https://jobs.github.com/positions.json'
});

export const jobPost = axios.create({
  baseURL: 'https://jobs.github.com/positions/'
});