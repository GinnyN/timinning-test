import axios from 'axios';

const list = () => {
  return axios.get('https://frontend-excercise.dt.timlabtesting.com/ops/device/list');
};

const performance = () => {
  return axios.get('https://frontend-excercise.dt.timlabtesting.com/ops/device/performance');
};

export { list, performance };
