import React from 'react';
import { useState } from 'react';
import {StatsData} from '../Utilities/StoreContext';

function StatsDataProvider({children}){
    const [hunger, sethunger] = useState(50);
    const [study, setstudy] = useState(0);
    const [sleep, setsleep] = useState(50);
    const [play, setplay] = useState(50);
    const [money, setmoney] = useState(500);
    const [fsupply, setfsupply] = useState(0);

    return(
        <StatsData.Provider value={React.useMemo(() => ({ hunger, sethunger, study, setstudy, sleep, setsleep, play, setplay, money, setmoney, fsupply, setfsupply }), [hunger, sethunger, study, setstudy, sleep, setsleep, play, setplay, money, setmoney, fsupply, setfsupply])}>
            {children}
        </StatsData.Provider>
    );
}

export {StatsDataProvider};