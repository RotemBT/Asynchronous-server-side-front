import React, { useState } from "react";
import { ROUTES, URL } from '../../../../routes.constant';
import './add-user.styles.scss';

const AddUser = () => {
    const [addUser, setAddUser] = useState(false);
    const [inputs, setInputs] = useState({});

    const addUserOnClick = () => setAddUser(!addUser);
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };
    const onSubmitHandler = async (event) => {
        const url = `${URL}${ROUTES.USERS.ADD_USER}?id=${inputs.id}&firstName=${inputs.firstName}&lastName=${inputs.lastName}&birthday=${inputs.birthday}&maritalStatus=${inputs.maritalStatus}`;
        event.preventDefault();
        setInputs({});
        setAddUser(false);
        await fetch(url, { method: 'POST', mode: 'no-cors' });
    };
    return (
        <div className="add-user-wrapper">
            <button className="add-user-button" onClick={addUserOnClick}>+ Add New User</button>
            {addUser && (
                <form className="add-user-form" onSubmit={onSubmitHandler}>
                    <input
                        className="input-field"
                        type='text'
                        name='id'
                        placeholder="Enter ID"
                        value={inputs.id || ''}
                        onChange={handleOnChange}
                    />
                    <input
                        className="input-field"
                        type='text'
                        name='firstName'
                        placeholder="Enter first name"
                        value={inputs.firstName || ''}
                        onChange={handleOnChange}
                    />
                    <input
                        className="input-field"
                        type='text'
                        name='lastName'
                        placeholder="Enter last name"
                        value={inputs.lastName || ''}
                        onChange={handleOnChange}
                    />
                    <input
                        className="input-field"
                        type='date'
                        name='birthday'
                        value={inputs.birthday || ''}
                        onChange={handleOnChange}
                    />
                    <input
                        className="input-field"
                        type='text'
                        name='maritalStatus'
                        placeholder="Enter marital status"
                        value={inputs.maritalStatus || ''}
                        onChange={handleOnChange}
                    />
                    <input className="submit-button" type='submit' />
                </form>
            )}
        </div>

    );
};
export default AddUser;