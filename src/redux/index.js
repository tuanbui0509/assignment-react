import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Login from './Login';
import Schedule from './Schedule';
import Task from './Task';
import User from './User';
import Users from './Users';

const reducer = combineReducers({
    Login,
    User,
    Users,
    Schedule,
    Task,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['Login', 'User', 'Users', 'Schedule', 'Task'] //
}

const persistedReducer = persistReducer(persistConfig, reducer)
let store = configureStore({ reducer: persistedReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, }), })
let persistor = persistStore(store)
export default {
    store, persistor
}