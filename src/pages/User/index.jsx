import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import users from '../../helpers/users'
const user_icon = require('../../assets/images/icon-user.png').default
const User = props => {
    const [isAdd, setIsAdd] = useState(false)

    const handleRemove = (user) => {
        var txt;
        var r = window.confirm(`Are you want to remove ${user.name}`)
        if (r == true) {
            txt = "You pressed OK!";
        } else {
            txt = "You pressed Cancel!";
        }
        alert(txt)
    }
    return (
        <div className="container">
            <button
                type="submit"
                className="btn btn-primary flex-center mb-2"
                onClick={() => setIsAdd(true)}
            >
                <ion-icon name="person-add"></ion-icon>Add</button>

            <div className="row">
                {isAdd ?
                    <div className="col-6 col-md-3 col-sm-6 mb-3">
                        <form className='needs-validation'>
                            <div className="card text-center">
                                <div class="card-header bg-primary text-white flex-center">
                                    {/* <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                   
                                    placeholder="Insert the name"
                                    // value={task.title}
                                    // onChange={(e) => setTask({ ...task, title: e.target.value })}
                                    required /> */}

                                    <input type="text" className="form-control" id="title" name="title"
                                        placeholder="Insert the name"
                                        required />
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>

                                </div>
                                <Link to="" className='image_user'>
                                    <img src={user_icon} className="card-img-top image-responsive" alt="..." />

                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name="title"
                                            placeholder="Insert the Position"
                                            // value={task.title}
                                            // onChange={(e) => setTask({ ...task, title: e.target.value })}
                                            required />
                                    </h5>
                                    <Link to="#" className="btn btn-primary">Schedule</Link>
                                </div>
                                <div class="card-footer flex-center">
                                    <button type="button"
                                        className="btn btn-outline-secondary flex-center"
                                        style={{ marginRight: '1rem' }}
                                        onClick={() => setIsAdd(false)}
                                    >
                                        <ion-icon name="pencil-outline"></ion-icon>Cancel</button>
                                    <button type="submit"
                                        className="btn btn-outline-success flex-center"
                                        style={{ marginRight: '1rem' }}>
                                        <ion-icon name="pencil-outline"></ion-icon>Update</button>
                                    <button type="button"
                                        className="btn btn-danger flex-center" onClick={() => setIsAdd(false)}>
                                        <ion-icon name="close-outline"></ion-icon>Remove</button>
                                </div>
                            </div>
                        </form>

                    </div> : null}
                {users.map((user, index) => {
                    return <div className="col-6 col-md-3 col-sm-6 mb-3" key={index}>
                        <div className="card text-center">
                            <div class="card-header bg-primary text-white flex-center">
                                <ion-icon name="person"></ion-icon> {user.name}
                            </div>
                            <Link to="" className='image_user'>
                                <img src={`${user.image}`} className="card-img-top image-responsive" alt="..." />

                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{user.position}</h5>
                                <Link to="#" className="btn btn-primary">Schedule</Link>
                            </div>
                            <div class="card-footer flex-center">
                                <button type="button" class="btn btn-outline-success flex-center" style={{ marginRight: '1rem' }}><ion-icon name="pencil-outline"></ion-icon>Edit</button>
                                <button
                                    className="btn btn-danger flex-center"
                                    onClick={() => handleRemove(user)}
                                >
                                    <ion-icon name="close-outline"></ion-icon>Remove</button>
                            </div>
                        </div>

                    </div>
                })}


            </div>
        </div>

    )
}

User.propTypes = {

}

export default User
