import React from 'react';
import { ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ButtonD= React.memo(props => {
    return(
        <div className="col-6 d-flex flex-row justify-content-start m-auto">
            <div className={props.statsbarname}><img src={props.imeg} alt={props.name}/></div>
            <div id={props.divname} className="col-10 progressbardiv">
                <ProgressBar id={props.name} animated striped variant={props.variant} now={props.func} label={`${props.func}%`} />
            </div>  
        </div> 
    );
});

export {ButtonD};