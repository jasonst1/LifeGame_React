import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StatsData } from '../Utilities/StoreContext.js';
import {ButtonD} from './StatsBarDisplay.jsx';

const StatsBar = React.memo(() => {
    console.log("renderstats");
    const {hunger, study, sleep, play, money} = useContext(StatsData);
    return(
        <div id="statsBar">
            <div className="col-8 d-flex flex-column statsbar m-auto mt-3">
                <div className="col-12 d-flex flex-row justify-content-start m-auto mt-3 mb-3">
                    <ButtonD statsbarname="col-1 statsbarimg1" imeg={'./asset/food.png'} func={hunger} name="hunger" divname="divmakan" variant="danger" />
                    <ButtonD statsbarname="col-1 statsbarimg" imeg={'./asset/bed.png'} func={sleep} name="sleep" divname="divtidur" variant="info" /> 
                </div>
                <div className="col-12 d-flex flex-row justify-content-start m-auto mb-3">
                    <ButtonD statsbarname="col-1 statsbarimg1" imeg={'./asset/game.png'} func={play} name="play" divname="divmain" variant="warning"/>   
                    <ButtonD statsbarname="col-1 statsbarimg" imeg={'./asset/study.png'} func={study} name="study" divname="divbelajar" variant="success" />
                </div>
                <div id="money" className="col-12 text-center">
                    <h4>Money: ${money}</h4>
                </div>
            </div>
        </div>
    );
});

export {StatsBar};