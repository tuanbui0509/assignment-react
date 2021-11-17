import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserItem from '../../components/User/UserItem'
import UserList from '../../components/User/UserList'
import { Context } from '../../store/context/Context'
const User = props => {
    const [isAdd, setIsAdd] = useState(false)
    const { users, dispatchUsers } = useContext(Context);

    return (
        <div className="container">
            <button
                type="submit"
                className="btn btn-primary flex-center mb-2"
                onClick={() => setIsAdd(true)}
            >
                <ion-icon name="person-add"></ion-icon>Add</button>

            <div className="row">
                {isAdd ? <UserItem user={null} setIsAdd={setIsAdd} /> : null}
                <UserList users={users} />
            </div>
        </div>

    )
}

User.propTypes = {

}

export default User
