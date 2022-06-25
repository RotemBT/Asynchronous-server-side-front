import React from "react";
import './report-modal.styles.scss';
const ReportModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button className="close-button" type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>);
};

export default ReportModal;