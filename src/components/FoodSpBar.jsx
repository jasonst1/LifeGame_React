import React, { useContext } from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {StatsData} from '../Utilities/StoreContext';

function FoodSpBar(){
    let {fsupply} = useContext(StatsData);
    return(
        <ProgressBar id="foodBarDis" now={fsupply} animated striped variant="danger" label={`${fsupply}%`} />
    );
}

export default FoodSpBar;