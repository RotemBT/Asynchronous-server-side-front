import React from "react";
import './cost.styles.scss';
const Cost = ({ data }) => {
    const formatedDate = data.date.split('T')[0];
    return (
        <div className="cost">
            <p className="field">{data.description}</p>
            <p className="field">{data.sum}</p>
            <p className="field">{data.category}</p>
            <p className="field">{data.id}</p>
            <p className="field">{formatedDate}</p>
        </div>
    );
};
export default Cost