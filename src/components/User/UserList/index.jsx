import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUser, insertUser, updateUser } from '../../../api/User';
import { DELETE_USER_SUCCESS, INSERT_USER_SUCCESS, MESSAGE_FAILURE, UPDATE_USER_SUCCESS } from '../../../constants/Respone';
import { notificationError, notificationSuccess } from '../../../helper/Notification';
import useLoading from "../../../hook/HookLoading";
import { getListUser } from '../../../redux/Users';
import UserItem from '../UserItem';

const UserList = React.memo((props) => {
    const [hidden, display, Loading] = useLoading();

    const users = useSelector((state) => state.Users);
    const dispatch = useDispatch();
    const getUsers = async () => {
        try {
            display();
            const res = await getAllUser();
            let temp = res.data;
            hidden();
            dispatch(getListUser(temp));
        } catch (err) {
            hidden();
            console.log(err);
        }
    };
    useEffect(() => {
        getUsers();
    }, []);

    const handleAddUser = async (user) => {
        try {
            display();
            const res = await insertUser(user);
            console.log(res.data);
            notificationSuccess(INSERT_USER_SUCCESS, 1000);
            hidden();
            getUsers();
        } catch (err) {
            hidden();
            notificationError(MESSAGE_FAILURE, 3000);
            console.log(err);
        }
    }

    const handleRemoveUser = async (userId) => {
        try {
            display();
            const res = await deleteUser(userId);
            notificationSuccess(DELETE_USER_SUCCESS, 1000);
            hidden();
            getUsers();
        } catch (err) {
            hidden();
            notificationError(MESSAGE_FAILURE, 3000);
            console.log(err);
        }
    }

    const handleUpdateUser = async (user) => {
        console.log(user);
        try {
            display();
            const res = await updateUser(user);
            console.log(res.data);
            notificationSuccess(UPDATE_USER_SUCCESS, 1000);
            hidden();
        } catch (err) {
            hidden();
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
            {Loading}
        </>
    )
}
)
export default UserList
