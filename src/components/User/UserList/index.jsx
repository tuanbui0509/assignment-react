import React from 'react'
import UserItem from '../UserItem'
const UserList = (props) => {
    const { users } = props
    const showUsers = () => {
        let result = null
        result = users.map((user, index) => {
            return <UserItem
                key={index}
                user={user}
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

export default UserList
