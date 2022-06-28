import axios from 'axios';
import { useEffect, useState } from 'react';

import s from './Geoposition.module.css';

export default function Geoposition() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState('');

  const savePositionToState = position => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const fetchWeather = async () => {
    try {
      await window.navigator.geolocation.getCurrentPosition(
        savePositionToState,
      );
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=da06cf8106afb34ae1142a4beb9ed1aa&units=metric`,
      );
      setTemperature(res.data.main.temp);
      setCityName(res.data.name);
      setWeather(res.data.weather[0].main);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [latitude, longitude]);

  return (
    <div className={s.geo}>
      <div>
        <h1 className={s.location}>{cityName}</h1>
        <h2 className={s.temp}>{temperature.toFixed()}ºC</h2>
        <p className={s.description}>{weather}</p>
      </div>
    </div>
  );
}
