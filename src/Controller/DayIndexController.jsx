import React, {useContext, useEffect} from 'react';
import {HourMinute} from '../Utilities/StoreContext';

function IndexFunc(){
    let {dayindex, setdayindex} = useContext(HourMinute);
    useEffect(() => {
        if(dayindex === 7){
            setdayindex(0);
        }
    }, [dayindex, setdayindex]);
}

export default IndexFunc;