import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

// import Geoposition from '../Geoposition';

import moment from 'moment';

import s from './CityItem.module.css';

export default function CityItem({
  cityName,
  country,
  description,
  temperature,
  feelsLike,
  humidity,
  speed,
  date,
  onDelete,
  city,
  id,
}) {
  //   const [data, setData] = useState({});
  //   const [location, setLocation] = useState('');
  //   const [weather, setWeather] = useState('');
  //   const [temperature, setTemperature] = useState(0);
  //   const [description, setDescription] = useState(0);
  //   const [error, setError] = useState(null);

  // const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
  // const API_KEY = 'c9bc59716722f77db4317428d0a799df';
  // const url = `${BASE_URL}?q=${location}&lang=en&units=metric&appid=${API_KEY}`;

  //   const searchLocation = async () => {
  //     await axios
  //       .get(url)
  //       .then(response => {
  //         setData(response.data);
  //         console.log(response);
  //       })
  //       .catch(error => {
  //         // setError(error);
  //         console.log(error);
  //       });
  //   };

  //   const searchLocation = async () => {
  //     try {
  //       const res = await axios.get(url);
  //       setTemperature(res.data.main.temp);
  //       //   setCityName(res.data.name);
  //       setWeather(res.data.weather[0].main);
  //       setDescription(data.weather[0].description);
  //       console.log(res.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  const formattedDate = moment(date).format('MMMM Do YYYY, h:mm:ss a');

  //   useEffect(() => {
  //     fetch(searchLocation);
  //   }, [location]);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=da06cf8106afb34ae1142a4beb9ed1aa&units=metric`,
  //       )
  //       .then(response => {
  //         // setData(response.data);
  //         console.log(response);
  //       })
  //       .catch(error => {
  //         // setError('Sorry... Something went wrong');
  //         console.log(error);
  //       });
  //   });

  return (
    <>
      <div className={s.container}>
        {cityName && (
          <div
            //   key={city.id}
            className={s.card}
          >
            {/* <div className={s.card}> */}
            {/* <div className={s.top}> */}

            <h1 className={s.location}>
              {cityName}, {country}
            </h1>

            <div>
              {/* {data.main ? ( */}
              <h2 className={s.temp}>{temperature.toFixed()}°C</h2>
              {/* ) : null} */}
            </div>
            <div className={s.description}>
              {/* {data.weather ? */}
              <p>{description}</p>
              {/* : null} */}
            </div>
            {/* </div> */}
            {/* {data.name !== undefined && ( */}
            <p className={s.bold}>{formattedDate}</p>
            <div className={s.bottom}>
              <div className={s.data}>
                {/* {data.main ? ( */}
                <p className={s.bold}>{feelsLike}°C</p>
                {/* ) : null} */}
                <p>Feels Like</p>
              </div>
              <div className={s.data}>
                {/* {data.main ? ( */}
                <p className={s.bold}>{humidity}%</p>
                {/* ) : null} */}
                <p>Humidity</p>
              </div>
              <div className={s.data}>
                {/* {data.wind ? ( */}
                <p className={s.bold}>{speed} m/s</p>
                {/* ) : null} */}
                <p>Wind Speed</p>
              </div>
            </div>
            {/* )} */}
            {/* </div> */}
            {/* <p>{formattedDate}</p> */}

            {/* <button onClick={() => onDelete(city.id)}>x</button> */}
          </div>
        )}
      </div>
    </>
  );
}
