import React, { useContext, useState } from "react";
import Cost from "./cost/cost.component";
import './costs-container.styles.scss';
import { ROUTES, URL } from '../../../routes.constant';
import ManagementContext from '../../../managment-context/management-context';
import CostForm from "./cost-form/cost-form.component";

const labels = ['Description', 'Sum', 'Category', 'User id', 'Date'];

const CostContainer = () => {
    const ctx = useContext(ManagementContext);
    const [costs, setCosts] = useState([]);
    const [addCost, setAddCost] = useState(false);

    const onClickGetAllCosts = async () => {
        const url = `${URL}${ROUTES.COST.GET_COST}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(`costs ${data}`);
        setCosts(data);
    };
    const onClickGetCosts = async () => {
        let url;
        if (Object.keys(ctx.selectedUser).length === 0) {
            url = `${URL}${ROUTES.COST.GET_COST}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(`costs ${data}`);
            setCosts(data);
        } else {
            url = `${URL}${ROUTES.COST.GET_COST_BY_ID}?id=${ctx.selectedUser.id}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(`costs ${data}`);
            setCosts(data);
        }
    };
    return (
        <div className="cost-container">
            <div className="navigator">
                <button className="navigator-button" onClick={() => setAddCost(true)}>Add cost</button>
                <button className="navigator-button" onClick={onClickGetCosts}>Get costs</button>
                <button className="navigator-button" onClick={onClickGetAllCosts}>Get All costs</button>
            </div>
            {addCost && <CostForm openModal={addCost} handleClose={() => setAddCost(false)} setAddCost={setAddCost} />}
            <div className="labels">
                {labels.map(label => <p>{label}</p>)}
            </div>
            {costs?.map(cost => <Cost data={cost} />)}
            {costs.length === 0 && <h1>There is no costs.</h1>}
        </div>
    );
};
export default CostContainer;