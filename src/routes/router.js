import React from 'react';
import Dashboard from '../pages/Dashboard/'
import User from '../pages/User'
import Login from '../pages/Login'
import Schedule from '../pages/Schedule';
import NotFound from '../pages/NotFound';
import AddTask from '../pages/Dashboard/AddTask';
import EditTask from '../pages/Dashboard/EditTask';
import AddSchedule from '../pages/Schedule/AddSchedule';
import EditSchedule from '../pages/Schedule/EditSchedule';

const routes = [
    {
        path: ["/", "/dashboard"],
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: '/user',
        exact: true,
        main: () => <User />
    },
    {
        path: '/login',
        exact: true,
        main: () => <Login />
    },
    {
        path: '/schedule',
        exact: true,
        main: () => <Schedule />
    },
    {
        path: '/dashboard/add',
        exact: true,
        main: ({ history }) => <AddTask history={history} />
    },
    {
        path: '/dashboard/edit/:id',
        exact: true,
        main: ({ match, history }) => <EditTask match={match} history={history} />
    },
    {
        path: '/schedule/add',
        exact: true,
        main: ({ history }) => <AddSchedule history={history} />
    },
    {
        path: '/schedule/edit/:id',
        exact: true,
        main: ({ match, history }) => <EditSchedule match={match} history={history} />
    },
    {
        path: '',
        exact: true,
        main: () => <NotFound />
    }
];

export default routes;