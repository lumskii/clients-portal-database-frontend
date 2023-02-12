import axios from 'axios';
import { server } from '../../../constance';

export const getData = (path) =>
  axios.get(`${server}/v1/clients/${path}`).then((res) => res.data);

export const sortString = (key) => {
  return (a, b) => {
    const a1 = a[key]?.toUpperCase();
    const b1 = b[key]?.toUpperCase();
    if (a1 < b1) return -1;
    if (a1 > b1) return 1;
    return 0;
  };
};
