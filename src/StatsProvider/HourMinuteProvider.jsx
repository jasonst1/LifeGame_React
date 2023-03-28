import React from 'react';
import { useState } from 'react';
import {HourMinute} from '../Utilities/StoreContext';

function HourMinuteProvider({children}){
    const [hour, sethour] = useState(0);
    const [minute, setminute] = useState(0);
    const [dayindex, setdayindex] = useState(0);

    return(
        <HourMinute.Provider value={React.useMemo(() => ({ hour, sethour, minute, setminute, dayindex, setdayindex }), [hour, sethour, minute, setminute, dayindex, setdayindex])}>
            {children}
        </HourMinute.Provider>
    );
}

export {HourMinuteProvider};