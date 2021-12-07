import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { toast } from 'react-toastify'
import { Context } from '../../../store/context/Context'
const user_icon = require('../../../assets/images/icon-user.png').default
const UserItem = (props) => {
    const { user } = props
    const [isEditing, setIsEditing] = useState(false)
    const { dispatchUsers } = useContext(Context)

    const [userEditing, setUserEditing] = useState({
        id: '',
        name: '',
        position: '',
        image: user_icon,
        password: '',
        email: ''
    })
    const [validate, setValidate] = useState({
        name: false,
        position: false,
    })
    useEffect(() => {
        setValidate({
            name: false,
            position: false,
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
                dispatchUsers({ type: 'REMOVE_USER', id: user.id })
                toast.success("Remove User Successful !", {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
            }
        }
    }

    const handleEdit = (user) => {
        setUserEditing(user)
        setIsEditing(true)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (userEditing.name === '' && userEditing.position === '') {
            setValidate({ name: true, position: true })
            return
        }
        if (userEditing.name === '') {
            setValidate({ ...validate, name: true })
            return
        }
        if (userEditing.position === '') {
            setValidate({ ...validate, name: true })
            return
        }
        console.log(userEditing.id);
        if (userEditing.id === '') {
            dispatchUsers({ type: 'ADD_USER', user: userEditing })
            toast.success("Add User Successful !", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            dispatchUsers({ type: 'UPDATE_USER', user: userEditing })
            toast.success("Update User Successful !", {
                position: toast.POSITION.TOP_RIGHT
            });
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
                            <h5 className="card-title">{user.position}</h5>
                            : <>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    placeholder="Insert the Position"
                                    onBlur={(e) => {
                                        if (e.target.value.length === 0) {
                                            setValidate({ ...validate, position: true })
                                        }
                                    }}
                                    value={userEditing.position}
                                    onChange={(e) => {
                                        if (e.target.value.length === 0) {
                                            setValidate({ ...validate, position: true })
                                        }
                                        else {
                                            setValidate({ ...validate, position: false })
                                        }
                                        setUserEditing({ ...userEditing, position: e.target.value })
                                    }}
                                />
                                {validate.position ? <p className='bg-danger p-2 text-danger bg-opacity-25'>You need enter to Position</p> : null}
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

        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object
}


export default UserItem


