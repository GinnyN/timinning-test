import axios from 'axios';

const loginApi = (email, password) => {
  return axios.post('https://frontend-excercise.dt.timlabtesting.com/ops/login', { email, password });
};

export default loginApi;
