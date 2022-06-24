import React from "react";
import User from "./user/user.component";
import './user-managment.styles.scss';

const UserManagement = () => {
    return (
        <div className='user-managment-wrapper'>
            <h3>User Managment</h3>
            <User text={'Rotem test'} />
            <User text={'+ Add User'} />

        </div>
    );
};
export default UserManagement;