import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
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
            var r = window.confirm(`Are you want to remove ${user?.name}`)
            if (r == true) {
                setIsEditing(false)
                dispatchUsers({ type: 'REMOVE_USER', id: user.id })
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
        if (userEditing.id === '') dispatchUsers({ type: 'ADD_USER', user: userEditing })
        else dispatchUsers({ type: 'UPDATE_USER', user: userEditing })
        if (!user) {
            props.setIsAdd(false)
        } else setIsEditing(false)
    }
    const handleCancel = () => {
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
                            <ion-icon name="person"></ion-icon> {user.name}
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
                            {validate.name ? <p>You need enter to Name</p> : null}
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
                                {validate.position ? <p>You need enter to Position</p> : null}
                            </>
                        }
                        <Link to="#" className="btn btn-primary m-2">Schedule</Link>
                    </div>
                    <div className="card-footer flex-center">


                        {user && !isEditing ?
                            <button
                                type="button"
                                className="btn btn-outline-success flex-center"
                                style={{ marginRight: '1rem' }}
                                onClick={() => handleEdit(user)}
                            >
                                <ion-icon name="pencil-outline"></ion-icon>Edit</button> :
                            <>
                                <button type="button"
                                    className="btn btn-outline-secondary flex-center"
                                    style={{ marginRight: '1rem' }}
                                    onClick={() => handleCancel()}
                                >
                                    <ion-icon name="pencil-outline"></ion-icon>Cancel</button>
                                <button
                                    type="submit"
                                    className="btn btn-outline-success flex-center"
                                    style={{ marginRight: '1rem' }}
                                >
                                    <ion-icon name="pencil-outline"></ion-icon>Update</button>
                            </>
                        }
                        <button
                            className="btn btn-danger flex-center"
                            onClick={() => handleRemove(user)}
                        >
                            <ion-icon name="close-outline"></ion-icon>Remove</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default UserItem
