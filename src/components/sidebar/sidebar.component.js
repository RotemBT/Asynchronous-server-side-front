import React, { useEffect, useState } from "react";
import UserManagement from "./user-managment/user-managment.component";
import './sidebar.styles.scss';
import { ROUTES, URL } from '../../routes.constant';

const Sidebar = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const url = `${URL}${ROUTES.USERS.GET_USERS}`;
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            console.log(data);
            setUsers(data);
        }
        fetchData();
    }, [setUsers]);
    return (
        <div className='sidebar'>
            <UserManagement users={users} />
        </div>
    );
};
export default Sidebar;