import axios from 'axios';
import { server } from '../../../constance';

export const getData = (path) =>
  axios.get(`${server}/v1/clients/${path}`).then((res) => res.data);
