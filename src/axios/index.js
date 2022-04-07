import axios from "axios";
import { API_URL } from '../constants/Configs';
const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": "application/json",
  },
});

const sleep = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const getLocalToken = localStorage.getItem('token') ?? '';
  if (getLocalToken) {
    config.headers.Authorization = `Bearer ${getLocalToken}`;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


axios.interceptors.response.use(
  async (response) => {
    await sleep();
    return response;
  },
  (error) => {
    console.log(error.response);
    return Promise.reject(error.response);
  }
);

export default axiosClient;
