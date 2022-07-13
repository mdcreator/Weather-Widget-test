import React from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react';
import s from './SearchForm.module.css';
import Geoposition from '../Geoposition';

export default function SearchForm({ getWeather }) {
  // const [data, setData] = useState({});
  // const [query, setQuery] = useState(''); //значение поля input (location, setLocation/cityName, setCityName)
  // const [location, setLocation] = useState('');
  // const [weather, setWeather] = useState('');
  // const [temperature, setTemperature] = useState(0);
  // const [description, setDescription] = useState(0);

  // const [showForm, setShowForm] = useState(false);
  // const [error, setError] = useState(null);

  // const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
  // const API_KEY = 'c9bc59716722f77db4317428d0a799df';
  // const url = `${BASE_URL}?q=${query}&lang=en&units=metric&appid=${API_KEY}`;

  // const searchLocation = () => {
  //   axios
  //     .get(url)
  //     .then(response => {
  //       setData(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       setError(error);
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     // `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=da06cf8106afb34ae1142a4beb9ed1aa&units=metric`,
  //     // )
  //     .then(response => {
  //       // setData(response.data);
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       // setError('Sorry... Something went wrong');
  //       console.log(error);
  //     });
  // });

  // const searchLocation = async () => {
  //   try {
  //     const res = await axios.get(url);
  //     setTemperature(res.data.main.temp);
  //     setCityName(res.data.name);
  //     setWeather(res.data.weather[0].main);
  //     setDescription(data.weather[0].description);
  //     console.log(res.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   addCity(query);
  //   setQuery('');
  //   setShowForm(false);
  // };

  // const handleKeyPress = e => {
  //   if (e.key === 'Enter') {
  //     handleSubmit(e);
  //   }
  // };

  // const toggleForm = () => setShowForm(prevValue => !prevValue);
  // const handleInputChange = event => {
  //   setQuery(event.target.value);
  // };

  // useEffect(() => {
  //   searchLocation();
  // }, [cityName]);

  return (
    <div>
      <div className={s.wrapper}>
        {/* <div className={s.title}>{data.name}</div> */}
        {/* {showForm ? ( */}
        <form
          onSubmit={getWeather}
          className={s.form}
          // onSubmit={handleSubmit}
        >
          <input
            className={s.input}
            type="text"
            name="city"
            // value={query}
            autoFocus
            placeholder="Enter Location"
            // onChange={handleInputChange}
            // onKeyDown={handleKeyPress}
            // onClick={searchLocation}
            required
          />

          <button
            // type="submit"
            className={s.openFormBtn}
            // onClick={toggleForm}
          >
            Choose your country
          </button>
        </form>
        {/* ) : (
          <button className={s.openFormBtn} onClick={toggleForm}>
            Choose your country
          </button>
        )} */}
      </div>
    </div>
  );
}
