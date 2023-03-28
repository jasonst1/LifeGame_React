import React, {useContext} from 'react';
import {WeatherData} from '../Utilities/StoreContext';

function WeatherDisplay(){
    let{weather} = useContext(WeatherData);
    return(
        <p id="weatherArt">Weather: {weather}</p>
    );
}

export default WeatherDisplay;