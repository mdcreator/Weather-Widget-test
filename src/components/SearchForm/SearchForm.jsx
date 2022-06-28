import axios from 'axios';

import { useState } from 'react';
import s from './SearchForm.module.css';
import Geoposition from '../Geoposition';

export default function SearchForm() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  // const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = 'c9bc59716722f77db4317428d0a799df';
  const url = `${BASE_URL}?q=${location}&lang=en&units=metric&appid=${API_KEY}`;

  const searchLocation = () => {
    axios
      .get(url)
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        setError(error);
        console.log(error);
      });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (!location || location === '') {
      return;
    }

    setLocation('');
  };

  const handleInputChange = event => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <div className={s.wrapper}>
        {/* <div className={s.title}>{data.name}</div> */}
        {/* {showForm ? ( */}
        <form className={s.form} onSubmit={handleOnSubmit}>
          <input
            className={s.input}
            type="text"
            value={location}
            autoFocus
            placeholder="Enter Location"
            onChange={handleInputChange}
            onKeyPress={searchLocation}
            required
          />

          {/* <button
            type="submit"
            className={s.openFormBtn}
            // onClick={toggleForm}
          >
            Choose your country
          </button> */}
        </form>
        {/* ) : ( */}
        {/* <button className={s.openFormBtn} onClick={toggleForm}>
          Choose your country
        </button> */}
        {/* )} */}
      </div>

      <div className={s.container}>
        <Geoposition />

        <div className={s.card}>
          {/* <div className={s.top}> */}

          <h1 className={s.location}>{data.name}</h1>
          <div>
            {data.main ? (
              <h2 className={s.temp}>{data.main.temp.toFixed()}°C</h2>
            ) : null}
          </div>
          <div className={s.description}>
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
          {/* </div> */}
          {data.name !== undefined && (
            <div className={s.bottom}>
              <div className={s.data}>
                {data.main ? (
                  <p className={s.bold}>{data.main.feels_like.toFixed()}°C</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div className={s.data}>
                {data.main ? (
                  <p className={s.bold}>{data.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className={s.data}>
                {data.wind ? (
                  <p className={s.bold}>{data.wind.speed.toFixed()} m/s</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
