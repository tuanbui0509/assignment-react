import React from 'react'
import { Link } from 'react-router-dom'
const user_icon = require('../../../assets/images/icon-user.png').default
const UserItem = (props) => {
    const { user } = props
    const handleRemove = (user) => {
        var txt;
        var r = window.confirm(`Are you want to remove ${user?.name}`)
        if (r == true) {
            txt = "You pressed OK!";
        } else {
            txt = "You pressed Cancel!";
        }
        alert(txt)
    }
    return (
        <div className="col-6 col-md-3 col-sm-6 mb-3">
            <form className='needs-validation'>
                <div className="card text-center">
                    {user ?
                        <div className="card-header bg-primary text-white flex-center">
                            <ion-icon name="person"></ion-icon> {user.name}
                        </div> :
                        <div className="card-header bg-primary text-white flex-center">
                            <input
                                type="text"
                                className="form-control"
                                id="title" name="title"
                                placeholder="Insert the name"
                                // onChange={(e) => setTask({ ...task, title: e.target.value })}
                                required />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>

                        </div>
                    }

                    <Link to="" className='image_user'>
                        <img src={user_icon} className="card-img-top image-responsive" alt="..." />

                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">
                            {user ?
                                <h5 className="card-title">{user.position}</h5>
                                : <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    placeholder="Insert the Position"
                                    // value={task.title}
                                    // onChange={(e) => setTask({ ...task, title: e.target.value })}
                                    required />}
                        </h5>
                        <Link to="#" className="btn btn-primary">Schedule</Link>
                    </div>
                    <div className="card-footer flex-center">


                        {user ? <button type="button" className="btn btn-outline-success flex-center" style={{ marginRight: '1rem' }}>
                            <ion-icon name="pencil-outline"></ion-icon>Edit</button> :
                            <>
                                <button type="button"
                                    className="btn btn-outline-secondary flex-center"
                                    style={{ marginRight: '1rem' }}
                                // onClick={() => setIsAdd(false)}
                                >
                                    <ion-icon name="pencil-outline"></ion-icon>Cancel</button>
                                <button type="submit"
                                    className="btn btn-outline-success flex-center"
                                    style={{ marginRight: '1rem' }}>
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
