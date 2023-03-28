import React, { useContext } from 'react';
import { useEffect } from "react";
import axios from "axios";
import {WeatherData} from '../Utilities/StoreContext';

function WeatherApi() {
  let {setweather} = useContext(WeatherData);
  const API_KEY = x;
  const lat = x;
  const lon = x;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat="+lat + "&lon=" + lon + "&appid=" + API_KEY;

  useEffect(() => {
    getAllWeatherWithAxiosHandler();
  }, []);

  function getAllWeatherWithAxiosHandler() {
    axios.get(url).then((response) => {
      console.log(response.data);
      console.log(response.data);
      setweather(response.data.weather[0].main);
    });
  }
}

export default WeatherApi;