import axiosClient from "../axios";

const taskString = 'Tasks'

export const getAllTask = () => {
    return axiosClient.get(`${taskString}`);
}

export const getTaskById = (id) => {
    return axiosClient.get(`${taskString}/${id}`);
}

export const updateTask = (body) => {
    return axiosClient.put(`${taskString}/${body.id}`, body);
}

export const deleteTask = (id) => {
    return axiosClient.delete(`${taskString}/${id}`);
}
export const insertTask = (body) => {
    return axiosClient.post(`${taskString}`, body);
}