import axios from "axios";
import { API_URL } from '../constants/Configs';
const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": "application/json",
  },
});

const errorHandler = error => {
  return Promise.reject(error.response);
};

const responseHandler = async response => {
  if (response.status === 401) {
    localStorage.removeItem('Token')
    window.location = "/login";
  }
  return response;
};

const requestHandler = async request => {
  const Token = localStorage.getItem('token') ?? '';
  if (Token) {
    request.headers.Authorization = `Bearer ${Token}`;
  }
  return request;
};

axiosClient.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

axiosClient.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

// axios.interceptors.response.use((response) => {
//   return response;
// },
//   (error) => {
//     return new Promise((resolve) => {
//       const originalRequest = error.config;
//       const refreshToken = localStorage.getItem('refreshToken')
//       if (error.response && error.response.status === 401 && error.config && refreshToken) {
//         console.log(error.config);
//         const response = fetch("http://localhost:4000/auth/token", {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             refreshToken: refreshToken,
//           }),
//         })
//           .then((res) => res.json())
//           .then((res) => {
//             originalRequest.headers.Authorization = "Bearer " + res.body.tokenAccess
//             console.log(res);
//             console.log(error.config);
//             localStorage.removeItem('accessToken')
//             localStorage.setItem('accessToken', res.body.tokenAccess)
//             return axios(originalRequest)
//           })
//           .catch(error => {
//             window.location = "/login";
//             return error
//           })
//         resolve(response);
//       }
//       return Promise.reject(error)
//     })
//   });

export default axiosClient;
