import React, {useContext, useEffect} from 'react';
import { StatsData, HourMinute } from '../Utilities/StoreContext';

function ReduceStatsData(){
    let{hunger, sethunger, sleep, setsleep, play, setplay} = useContext(StatsData);
    let {hour, dayindex} = useContext(HourMinute);
    useEffect(() => {
        if(hour === 0 && dayindex === 0){
        }
        else{
            sethunger(hunger - 3);
            setsleep(sleep - 5);
            setplay(play - 3);
        }
    }, [hour]);
}

export default ReduceStatsData;