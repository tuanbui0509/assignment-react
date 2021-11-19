import React, { createContext, useReducer } from 'react';
const Context = createContext(null)
const user_icon = require('../../assets/images/icon-user.png').default
const initialTask = [
    {
        id: '0ac07e96-46cd-11ec-81d3-0242ac130003',
        title: 'Do homework',
        description: 'Do React JS and ASP.NET create web application',
        status: 1
    },
    {
        id: '0fc5b988-46cd-11ec-81d3-0242ac130003',
        title: 'Play Football',
        description: 'At 6.PM play football with my friend',
        status: 0
    },
    {
        id: '15185b0c-46cd-11ec-81d3-0242ac130003',
        title: 'Learn Angular',
        description: 'Learn Angular training',
        status: 0
    },
    {
        id: '19402ab6-46cd-11ec-81d3-0242ac130003',
        title: 'Learn React JS',
        description: 'Can apply the knowledge for building a web application using ReactJS',
        status: 2
    },
    {
        id: '1fd4495c-46cd-11ec-81d3-0242ac130003',
        title: 'Learn Blazor',
        description: 'Can apply the knowledge for building a web application using Blazor',
        status: 0
    },
    {
        id: '2748260e-46cd-11ec-81d3-0242ac130003',
        title: 'Learn VueJs',
        description: 'Can apply the knowledge in building a web application using VueJs',
        status: 0
    },
    {
        id: '2d5bced8-46cd-11ec-81d3-0242ac130003',
        title: 'Learn Azure',
        description: 'Can apply the knowledge in deploy a web application to Azure',
        status: 2
    }
]

const initialSchedule = [
    {
        id: '0ac07e96-46cd-11ec-81d3-0242bc130003',
        title: 'Meeting',
        description: 'Release overview',
        creator: 'Le Cao',
        location: 'New York',
        time_start: new Date(),
        time_end: new Date(),
    },
    {
        id: '0ac07e96-46cd-11ec-81d3-0242bc130004',
        title: 'Training',
        description: 'Startup',
        creator: 'Son Dang',
        location: 'New York',
        time_start: new Date(),
        time_end: new Date(),
    },

]

const initialUser = [
    {
        id: '0ac07e96-46cd-11ec-81d3-0242ac130004',
        name: 'Le Cao',
        position: 'Developer',
        image: user_icon,
        password: '123456',
        email: 'lecao123@gmail.com'
    },
    {
        id: '0ac07e96-46cd-11ec-81d3-0242ac130005',
        name: 'Son Dang',
        position: 'QC',
        image: user_icon,
        password: '123456',
        email: 'sondang123@gmail.com'
    },
    {
        id: '0ac07e96-46cd-11ec-81d3-0242ac130006',
        name: 'Tuan Bui',
        position: 'Developer',
        image: user_icon,
        password: '123456',
        email: 'buingoctuan99@gmail.com'
    },
    {
        id: '0ac07e96-46cd-11ec-81d3-0242ac130007',
        name: 'Thuy Duong',
        position: 'Developer',
        image: user_icon,
        password: '123456',
        email: 'duongthuy123@gmail.com'
    },
    {
        id: '0ac07e96-46cd-11ec-81d3-0242ac130008',
        name: 'Thanh Toan',
        position: 'PM',
        image: user_icon,
        password: '123456',
        email: 'thanhtoan123@gmail.com'
    },
    {
        id: '0ac07e96-46cd-11ec-81d3-0242ac130009',
        name: 'Quang Long',
        position: 'QC',
        image: user_icon,
        password: '123456',
        email: 'quanglong123@gmail.com'
    }

]
const TaskReducer = (state, action) => {
    let index, task
    switch (action.type) {
        case 'GET_TASKS':
            return state
        case 'UPDATE_TASK':
            task = action.task;
            index = findById(state, task.id);
            state[index] = {
                ...state[index],
                status: task.status,
                title: task.title,
                description: task.description,
            };
            return [...state];
        case 'REMOVE_TASK':
            index = findById(state, action.id)
            state.splice(index, 1)
            return [...state]
        case 'ADD_TASK':
            task = action.task
            const newTask = {
                title: task.title,
                description: task.description,
                id: create_UUID(),
                status: task.status
            }
            return [...state, newTask]
        default:
            throw new Error()
    }
}

const UserReducer = (state, action) => {
    let index, user
    switch (action.type) {
        case 'GET_USERS':
            return state
        case 'UPDATE_USER':
            user = action.user;
            index = findById(state, user.id);
            state[index] = {
                ...state[index],
                name: user.name,
                position: user.position,
            };
            return [...state];
        case 'REMOVE_USER':
            index = findById(state, action.id)
            state.splice(index, 1)
            return [...state]
        case 'ADD_USER':
            user = action.user
            const newUser = {
                name: user.name,
                position: user.position,
                id: create_UUID(),
                password: '123456',
                email: 'user@gmail.com'
            }
            return [...state, newUser]
        default:
            throw new Error()
    }
}

const ScheduleReducer = (state, action) => {
    let index, schedule
    switch (action.type) {
        case 'GET_SCHEDULES':
            return state
        case 'UPDATE_SCHEDULE':
            schedule = action.schedule;
            index = findById(state, schedule.id);
            state[index] = {
                ...state[index],
                location: schedule.location,
                title: schedule.title,
                description: schedule.description,
                creator: schedule.creator,
                time_start: schedule.time_start,
                time_end: schedule.time_end,
            };
            return [...state];
        case 'REMOVE_SCHEDULE':
            index = findById(state, action.id)
            state.splice(index, 1)
            return [...state]
        case 'ADD_SCHEDULE':
            schedule = action.schedule
            const newSchedule = {
                location: schedule.location,
                title: schedule.title,
                description: schedule.description,
                creator: schedule.creator,
                time_start: schedule.time_start,
                time_end: schedule.time_end,
                id: create_UUID(),
            }
            return [...state, newSchedule]
        default:
            throw new Error()
    }
}

const LoginReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.user
        case 'LOGOUT':
            return null
        default:
            throw new Error()
    }
}


function create_UUID() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    return uuid.substr(uuid.lastIndexOf('/') + 1); 
}



const findById = (state, id) => {
    for (let i = 0; i < state.length; i++) {
        if (state[i].id === id) return i
    }
    return -1;
}


const ContextProvider = (props) => {
    const [tasks, dispatchTasks] = useReducer(TaskReducer, initialTask)
    const [users, dispatchUsers] = useReducer(UserReducer, initialUser)
    const [schedules, dispatchSchedules] = useReducer(ScheduleReducer, initialSchedule)
    const [login, dispatchLogin] = useReducer(LoginReducer, null)
    let value = { tasks, dispatchTasks, users, dispatchUsers, login, dispatchLogin, schedules, dispatchSchedules }
    return (
        <Context.Provider value={value}>{props.children}</Context.Provider>
    )
}
export { ContextProvider, Context };

