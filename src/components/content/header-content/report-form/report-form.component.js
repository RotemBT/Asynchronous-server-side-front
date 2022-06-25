import React, { useState, useContext } from "react";
import ReportModal from "../report-modal/report-modal.component";
import './report-form.styles.scss';
import { ROUTES, URL } from '../../../../routes.constant';
import ManagementContext from '../../../../managment-context/management-context';

const ReportForm = () => {
    const [openModal, setOpenModal] = useState(false);
    const [inputs, setInputs] = useState({});
    const [report, setReport] = useState('');
    const ctx = useContext(ManagementContext);

    const handleClose = () => setOpenModal(false);
    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };
    const onSubmitHandler = async (event) => {
        const url = `${URL}${ROUTES.REPORTS.GET_REPORTS}?id=${ctx.selectedUser.id}&year=${inputs.year}&month=${inputs.month}`;
        setOpenModal(true);
        event.preventDefault();
        const response = await fetch(url);
        const data = await response.text();
        console.log(`report ${data}`);
        setReport(data);
    };
    return (
        <div className="report-form-wrapper">
            {openModal && (
                <ReportModal
                    show={openModal}
                    handleClose={handleClose}
                >
                    <h3>{report ? report : 'There is no costs'}</h3>
                </ReportModal>
            )}
            <h3 className="report-form-text">Report:</h3>
            <form className="report-form" onSubmit={onSubmitHandler}>
                <input
                    className="report-input-field"
                    type='number'
                    name='year'
                    placeholder="Enter year"
                    value={inputs.year || ''}
                    onChange={handleOnChange}
                />
                <input
                    className="report-input-field"
                    type='number'
                    name='month'
                    placeholder="Enter month"
                    value={inputs.month || ''}
                    onChange={handleOnChange}
                />
                <button className="report-submit-button" type='submit'>Submit</button>
            </form>
        </div>
    );
};
export default ReportForm;