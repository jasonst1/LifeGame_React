import React from 'react';
import FoodSpBar from './FoodSpBar';

const FoodStats = () => {
    return(
    <div id="foodSBar" className="col-12 d-flex flex-column text-center">
        <h4>Food Supply:</h4>
        <FoodSpBar />
    </div>
    );
}

export default FoodStats;