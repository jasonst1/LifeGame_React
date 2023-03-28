import React from 'react';
import { useState } from 'react';
import {WeatherData} from '../Utilities/StoreContext';

function WeatherProvider({children}){
    const [weather, setweather] = useState([]);

    return(
        <WeatherData.Provider value={React.useMemo(() => ({ weather, setweather }), [weather, setweather])}>
            {children}
        </WeatherData.Provider>
    );
}

export {WeatherProvider};