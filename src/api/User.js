import axiosClient from "../axios";

const userString = 'Users'

export const getListUser = () => {
    return axiosClient.get(`${userString}`);
}

export const getUserById = (id) => {
    return axiosClient.get(`${userString}/${id}`);
}

export const updateUser = (body) => {
    return axiosClient.put(`${userString}/${body}`);
}

export const deleteUser = (id) => {
    return axiosClient.delete(`${userString}/${id}`);
}
export const insertUser = (body) => {
    return axiosClient.get(`${userString}/${body}`);
}