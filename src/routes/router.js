import React from 'react';
import Dashboard from '../pages/Dashboard/'
import User from '../pages/User'
import Login from '../pages/Login'
import Schedule from '../pages/Schedule';
import NotFound from '../pages/NotFound';
import AddTask from '../pages/Dashboard/AddTask';
import EditTask from '../pages/Dashboard/EditTask';

const routes = [
    {
        path: ["/", "/dashboard"],
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: '/user',
        exact: false,
        main: () => <User />
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/schedule',
        exact: false,
        main: () => <Schedule />
    },
    {
        path: '/dashboard/add',
        exact: true,
        main: ({ history }) => <AddTask history={history} />
    },
    {
        path: '/dashboard/edit/:id',
        exact: false,
        main: ({ match, history }) => <EditTask match={match} history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;