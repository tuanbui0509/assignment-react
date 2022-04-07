import axiosClient from "../axios";

const scheduleString = 'schedules'

export const getAllSchedule = () => {
    return axiosClient.get(`${scheduleString}`);
}

export const getScheduleById = (id) => {
    return axiosClient.get(`${scheduleString}/${id}`);
}

export const updateSchedule = (body) => {
    return axiosClient.put(`${scheduleString}/${body.id}`, body);
}

export const deleteSchedule = (id) => {
    return axiosClient.delete(`${scheduleString}/${id}`);
}
export const insertSchedule = (body) => {
    return axiosClient.post(`${scheduleString}`, body);
}