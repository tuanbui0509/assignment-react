import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Login from './Login';
import Schedule from './Schedule';
import Task from './Task';
import User from './User';

const reducer = combineReducers({
    Login,
    User,
    Schedule,
    Task,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['Login', 'User', 'Schedule', 'Task'] //
}

const persistedReducer = persistReducer(persistConfig, reducer)
let store = configureStore({ reducer: persistedReducer })
let persistor = persistStore(store)
export default {
    store, persistor
}