import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { insertUser, updateUser } from '../../../api/User';
import { INSERT_USER_SUCCESS, MESSAGE_FAILURE, UPDATE_USER_SUCCESS } from '../../../constants/Respone';
import { notificationError, notificationSuccess } from '../../../helper/Notification';
import useLoading from "../../../hook/HookLoading";
const user_icon = require('../../../assets/images/icon-user.png').default
const UserItem = (props) => {
    const { user } = props
    const [isEditing, setIsEditing] = useState(false)
    const [hidden, display, Loading] = useLoading();

    const [userEditing, setUserEditing] = useState({
        id: '',
        name: '',
        title: '',
        image: user_icon,
        password: '',
        email: ''
    })
    const [validate, setValidate] = useState({
        name: false,
        title: false,
    })
    useEffect(() => {
        setValidate({
            name: false,
            title: false,
        })
    }, [isEditing])
    const handleRemove = (user) => {
        if (!user) {
            props.setIsAdd(false)
        }
        else {
            var confirm = window.confirm(`Are you want to remove ${user?.name}`)
            if (confirm) {
                setIsEditing(false)
                props.handleRemoveUser(user.id)
            } 
        }
    }

    const handleEdit = (user) => {
        setUserEditing(user)
        setIsEditing(true)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (userEditing.name === '' && userEditing.title === '') {
            setValidate({ name: true, title: true })
            return
        }
        if (userEditing.name === '') {
            setValidate({ ...validate, name: true })
            return
        }
        if (userEditing.title === '') {
            setValidate({ ...validate, name: true })
            return
        }
        if (userEditing.id === '') {
            props.handleAddUser(user)
        }
        else {
            props.handleUpdateUser(userEditing)
        }
        if (!user) {
            props.setIsAdd(false)
        } else setIsEditing(false)
    }
    const handleCancel = () => {
        var confirm = window.confirm(`Are you want to cancel ${user.name}`)
        if (confirm)
            if (!user) {
                props.setIsAdd(false)
            } else setIsEditing(false)
    }
    return (
        <div className="col-6 col-md-3 col-sm-6 mb-3">
            <form className='needs-validation' onSubmit={handleSubmit}>
                <div className="card text-center">
                    {user && !isEditing ?
                        <div className="card-header bg-primary text-white flex-center">
                            <ion-icon class='btn-icon' name="person"></ion-icon> {user.name}
                        </div> :
                        <>
                            <div className="card-header bg-primary text-white flex-center">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title" name="title"
                                    placeholder="Insert the name"
                                    value={userEditing.name}
                                    onBlur={(e) => {
                                        console.log(e)
                                        if (e.target.value.length === 0) {
                                            setValidate({ ...validate, name: true })
                                        }
                                    }}
                                    onChange={(e) => {
                                        if (e.target.value.length === 0) {
                                            setValidate({ ...validate, name: true })
                                        }
                                        else {
                                            setValidate({ ...validate, name: false })
                                        }
                                        setUserEditing({ ...userEditing, name: e.target.value })
                                    }}
                                />
                            </div>
                            {validate.name ? <p className='bg-danger p-2 text-danger bg-opacity-25'>You need enter to Name</p> : null}
                        </>
                    }

                    <Link to="" className='image_user'>
                        <img src={user_icon} className="card-img-top image-responsive" alt="..." />

                    </Link>
                    <div className="card-body">
                        {user && !isEditing ?
                            <h5 className="card-title">{user.title}</h5>
                            : <>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    placeholder="Insert the title"
                                    onBlur={(e) => {
                                        if (e.target.value.length === 0) {
                                            setValidate({ ...validate, title: true })
                                        }
                                    }}
                                    value={userEditing.title}
                                    onChange={(e) => {
                                        if (e.target.value.length === 0) {
                                            setValidate({ ...validate, title: true })
                                        }
                                        else {
                                            setValidate({ ...validate, title: false })
                                        }
                                        setUserEditing({ ...userEditing, title: e.target.value })
                                    }}
                                />
                                {validate.title ? <p className='bg-danger p-2 text-danger bg-opacity-25'>You need enter to title</p> : null}
                            </>
                        }
                        <Link to="/schedule" className="btn btn-primary m-2">Schedule</Link>
                    </div>
                    <div className="card-footer flex-center">
                        {user ? <>
                            {!isEditing ?
                                <button
                                    type="button"
                                    className="btn btn-outline-success flex-center"
                                    style={{ marginRight: '0.5rem', padding: '5px 10px' }}
                                    onClick={() => handleEdit(user)}
                                >
                                    <ion-icon class='btn-icon' name="pencil-outline"></ion-icon>Edit</button> :
                                <>
                                    <button type="button"
                                        className="btn btn-outline-secondary flex-center"
                                        style={{ marginRight: '0.5rem', padding: '5px 10px' }}
                                        onClick={() => handleCancel(user)}
                                    >
                                        <ion-icon class='btn-icon' name="pencil-outline"></ion-icon>Cancel</button>
                                    <button
                                        type="submit"
                                        className="btn btn-outline-success flex-center"
                                        style={{ marginRight: '0.5rem', padding: '5px 10px' }}
                                    >
                                        <ion-icon class='btn-icon' name="pencil-outline"></ion-icon>Update</button>
                                </>
                            }
                            <button type='button'
                                className="btn btn-danger flex-center" style={{ padding: '5px' }}
                                onClick={() => handleRemove(user)}>
                                <ion-icon class='btn-icon' name="close-outline"></ion-icon>Remove</button></> :
                            <button type='submit'
                                className="btn btn-outline-primary flex-center">
                                <ion-icon name="add-circle-outline" class='mr-1'></ion-icon>Create</button>}
                    </div>
                </div>
            </form>
            {Loading}
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object
}


export default UserItem


