import React from "react";
import './user.styles.scss';
const User = ({ user, isSelected, onClickHandler }) => {
    const classes = `user ${isSelected ? 'isSelected' : ''}`;
    return (
        <button className={classes} onClick={() => onClickHandler(user)}>
            {`${user.first_name} ${user.last_name}`}
        </button>
    );
};
export default User;