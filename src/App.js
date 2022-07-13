import React from 'react';
import { useState } from 'react';

import axios from 'axios';

import Container from './components/Container';
import Header from './components/Header';
// import Widget from './components/Widget/Widget';
import Geoposition from './components/Geoposition';
import SearchForm from './components/SearchForm';
import CityItem from './components/CityItem';

export default function App() {
  const [query, setQuery] = useState();
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem('items')) || [],
  );

  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState(0);
  const [feelsLike, setFeelsLike] = useState(0);
  const [humidity, setHumidity] = useState('');
  const [speed, setSpeed] = useState('');
  const [error, setError] = useState(null);

  const searchLocation = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    //e.target-тот объект с которым работаем, в данном случае <form>;
    //elements - обращение ко всем ее элементам;
    //name - обращение к имени полю;
    //value - далее берем его значение;
    const API_KEY = 'c9bc59716722f77db4317428d0a799df';
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${API_KEY}`,
    );
    const data = await api_url.json();
    console.log(data);

    setTemperature(data.main.temp);
    setCityName(data.name);
    setCountry(data.sys.country);
    setDescription(data.weather[0].description);
    setFeelsLike(data.main.feels_like.toFixed());
    setHumidity(data.main.humidity);
    setSpeed(data.wind.speed.toFixed());
    setError('');
  };

  // const addCity = cityName => {
  //   if (cityName) {
  //     const newCity = {
  //       id: Date.now(),
  //       date: Date.now(),
  //       cityName: cityName,
  //       country,
  //       description,
  //       temperature,
  //       feelsLike,
  //       humidity,
  //       speed,
  //     };
  //     setCities([...cities, newCity]);
  //   }
  // };

  // const removeCity = id =>
  //   setCities(prevState => prevState.filter(city => city.id !== id));

  return (
    <div>
      <Container>
        <Header />
        <SearchForm
          getWeather={searchLocation}
          // addCity={addCity}
        />
        <Geoposition />
        {/* {cities.map(city => { */}
        {/* return ( */}
        <CityItem
          cityName={cityName}
          country={country}
          temperature={temperature}
          description={description}
          feelsLike={feelsLike}
          humidity={humidity}
          speed={speed}
          // key={city.id}
          // city={city}
          // name={query}
          // onToggle={handleToggle}
          // onDelete={removeCity}
        />
        {/* ); */}
        {/* })} */}
      </Container>
    </div>
  );
}
