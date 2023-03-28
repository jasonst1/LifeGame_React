import React, {useContext, useEffect} from 'react';
import { PageData, HourMinute } from '../Utilities/StoreContext';
import $ from 'jquery';

function LocationButtonController(){
    let {page, setpage} = useContext(PageData);
    let {hour, dayindex} = useContext(HourMinute);

    useEffect(()=>{
        if(dayindex === 0){
            $("#KampusButton").prop("disabled", true);
        }
        else if(hour >= 17 || (hour >=0 && hour < 8)){
            $("#KampusButton").prop("disabled", true);
        }
        else{
            $("#KampusButton").prop("disabled", false);
        }
    }, [page, setpage, hour, dayindex]);
}

export default LocationButtonController;