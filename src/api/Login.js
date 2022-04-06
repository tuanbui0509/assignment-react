import AxiosClient from '../axios';

export const loginAPI = (body)=>{
    return AxiosClient.post('Users/authenticate' , body);
}

export const logoutAPI = (body)=>{
    return AxiosClient.post('Users/authenticate' , body);
}