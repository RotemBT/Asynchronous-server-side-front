import React from "react";
import './user.styles.scss';
const User = ({ text }) => {
    return (
        <div className="user">
            <button className="user-button">
                {text}
            </button>
        </div>
    );
};
export default User;