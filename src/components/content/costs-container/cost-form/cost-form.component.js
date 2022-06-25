import React, { useState } from "react";
import './cost-form.styles.scss'
import ReportModal from "../../header-content/report-modal/report-modal.component";
import { ROUTES, URL } from '../../../../routes.constant';

const CostForm = ({ openModal, handleClose, setAddCost }) => {
    const [inputs, setInputs] = useState({});

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };
    const onSubmitHandler = async (event) => {
        const url = `${URL}${ROUTES.COST.ADD_COST}?id=${inputs.id}&description=${inputs.description}&sum=${inputs.sum}&date=${inputs.date}&category=${inputs.category}`;
        event.preventDefault();
        setInputs({});
        setAddCost(false)
        await fetch(url, { method: 'POST', mode: 'no-cors' });
    };
    return (
        <ReportModal
            show={openModal}
            handleClose={handleClose}
        >
            <h1 className="add-cost-text">Add New Cost</h1>
            <form className="add-cost-form" onSubmit={onSubmitHandler}>
                <input
                    className="cost-input-field"
                    type='text'
                    name='id'
                    placeholder="Enter ID"
                    value={inputs.id || ''}
                    onChange={handleOnChange}
                />
                <input
                    className="cost-input-field"
                    type='text'
                    name='description'
                    placeholder="Enter description"
                    value={inputs.description || ''}
                    onChange={handleOnChange}
                />
                <input
                    className="cost-input-field"
                    type='number'
                    name='sum'
                    placeholder="Enter sum"
                    value={inputs.sum || ''}
                    onChange={handleOnChange}
                />
                <input
                    className="cost-input-field"
                    type='date'
                    name='date'
                    value={inputs.date || ''}
                    onChange={handleOnChange}
                />
                <input
                    className="cost-input-field"
                    type='text'
                    name='category'
                    placeholder="Enter category"
                    value={inputs.category || ''}
                    onChange={handleOnChange}
                />
                <input className="cost-submit-button" type='submit' />
            </form>
        </ReportModal>
    );
};
export default CostForm;