import axiosClient from "../axios";

const scheduleString = 'schedules'

export const getListSchedule = () => {
    return axiosClient.get(`${scheduleString}`);
}

export const getScheduleById = (id) => {
    return axiosClient.get(`${scheduleString}/${id}`);
}

export const updateSchedule = (body) => {
    return axiosClient.put(`${scheduleString}/${body}`);
}

export const deleteSchedule = (id) => {
    return axiosClient.delete(`${scheduleString}/${id}`);
}
export const insertSchedule = (body) => {
    return axiosClient.get(`${scheduleString}/${body}`);
}