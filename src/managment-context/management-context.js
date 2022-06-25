import React, { useState } from "react";

const ManagementContext = React.createContext({
    costs: [],
    reports: [],
    users: [],
    selectedUser: {},
    setSelectedUser: () => { },
    fetchData: () => { },
});
export const ManagementContextProvider = (props) => {
    const [costs, setCosts] = useState([]);
    const [reports, setReports] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState();
    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    };
    return (
        <ManagementContext.Provider value={{
            costs: costs,
            reports: reports,
            users: users,
            selectedUser: selectedUser,
            setSelectedUser: setSelectedUser,
            fetchData: fetchData
        }}>
            {props.children}
        </ManagementContext.Provider>
    );
}
export default ManagementContext;