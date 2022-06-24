import React from "react";
import UserManagement from "./user-managment/user-managment.component";
import './sidebar.styles.scss';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <UserManagement />
        </div>
    );
};
export default Sidebar;