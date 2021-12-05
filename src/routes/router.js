import React from 'react'
import Loading from '../components/LoadingHOC'
const Schedule = Loading(React.lazy(() => import("../pages/Schedule")))
const AddSchedule = Loading(React.lazy(() => import("../pages/Schedule/AddSchedule")))
const EditSchedule = Loading(React.lazy(() => import("../pages/Schedule/EditSchedule")))
const EditTask = Loading(React.lazy(() => import("../pages/Dashboard/EditTask")))
const AddTask = Loading(React.lazy(() => import("../pages/Dashboard/AddTask")))
const NotFound = Loading(React.lazy(() => import("../pages/NotFound")))
const Login = Loading(React.lazy(() => import("../pages/Login")))
const User = Loading(React.lazy(() => import("../pages/User")))
const Dashboard = Loading(React.lazy(() => import("../pages/Dashboard")))

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
]

export default routes