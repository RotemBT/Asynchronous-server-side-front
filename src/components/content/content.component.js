import React from "react";
import './content.styles.scss';
import CostContainer from "./costs-container/costs-container.component";
import HeaderContent from "./header-content/header-content.component";
const Content = () => {
    return (
        <div className="content-wrapper">
            <HeaderContent />
            <hr />
            <CostContainer />
        </div>
    );
};
export default Content;