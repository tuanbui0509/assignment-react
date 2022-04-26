import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUser, insertUser, updateUser } from '../../../api/User';
import { DELETE_USER_SUCCESS, INSERT_USER_SUCCESS, MESSAGE_FAILURE, UPDATE_USER_SUCCESS } from '../../../constants/Respone';
import { notificationError, notificationSuccess } from '../../../helper/Notification';
import { getListUser } from '../../../redux/Users';
import UserItem from '../UserItem';

const UserList = React.memo((props) => {

    const users = useSelector((state) => state.Users);
    const dispatch = useDispatch();
    const getUsers = async () => {
        try {
            const res = await getAllUser();
            let temp = res.data;
            dispatch(getListUser(temp));
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getUsers();
    }, []);

    const handleAddUser = async (user) => {
        try {
            const res = await insertUser(user);
            console.log(res.data);
            notificationSuccess(INSERT_USER_SUCCESS, 1000);
            getUsers();
        } catch (err) {
            notificationError(MESSAGE_FAILURE, 3000);
            console.log(err);
        }
    }

    const handleRemoveUser = async (userId) => {
        try {
            const res = await deleteUser(userId);
            notificationSuccess(DELETE_USER_SUCCESS, 1000);
            getUsers();
        } catch (err) {
            notificationError(MESSAGE_FAILURE, 3000);
            console.log(err);
        }
    }

    const handleUpdateUser = async (user) => {
        console.log(user);
        try {
            const res = await updateUser(user);
            console.log(res.data);
            notificationSuccess(UPDATE_USER_SUCCESS, 1000);
        } catch (err) {
            notificationError(MESSAGE_FAILURE, 3000);
            console.log(err);
        }
    }

    const showUsers = () => {
        let result = null
        result = users.map((user, index) => {
            return <UserItem
                key={index}
                user={user}
                handleAddUser={handleAddUser}
                handleUpdateUser={handleUpdateUser}
                handleRemoveUser={handleRemoveUser}
            />;
        })
        return result
    }



    return (
        <>
            {showUsers()}
        </>
    )
}
)
export default UserList
