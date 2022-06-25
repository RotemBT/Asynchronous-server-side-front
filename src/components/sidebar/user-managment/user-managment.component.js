import React, { useContext, useState } from "react";
import User from "./user/user.component";
import './user-managment.styles.scss';
import AddUser from "./add-user-form/add-user.component";
import ManagementContext from '../../../managment-context/management-context';
const UserManagement = ({ users }) => {
    const ctx = useContext(ManagementContext);
    const [selectedUser, setSelectedUser] = useState(users[0] || {});
    const onClickHandler = (user) => {
        setSelectedUser(user);
        ctx.setSelectedUser(user);
    };
    return (
        <div className='user-managment-wrapper'>
            <h3>User Managment</h3>
            {users?.map(user => <User
                user={user}
                isSelected={selectedUser === user}
                onClickHandler={onClickHandler}
            />)}
            <AddUser />
        </div>
    );
};
export default UserManagement;