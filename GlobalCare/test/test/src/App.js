import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import axios from 'axios';
import logo from './img/logo_weather.png'; 
import ic_sunny from './img/sunny.png';
import ic_rainy from './img/rainy.png';
import ic_humidity from './img/humidity.png';
import ic_wind_speed from './img/wind_speed.png';

function App() {
  const [weatherData, setWeatherData] = useState(null); // Lưu trữ dữ liệu thời tiết khi tìm kiếm
  // const [currentLocationWeather, setCurrentLocationWeather] = useState(null); // Lưu trữ thời tiết vị trí hiện tại
  const [error, setError] = useState(null); // Lưu trữ lỗi nếu có

  const apiKey = '987e45f61b95f49300c34ef9b6139656'; // API key của bạn

  // Hàm này sẽ gọi API OpenWeatherMap khi tìm kiếm thành phố
  const handleSearch = (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl)
      .then(response => {
        setWeatherData(response.data);
        setError(null);
      })
      .catch(error => {
        setWeatherData(false);
        setError("City not found or API error");
      });
  };

  return (
    <div className="app">
      <div className="logo-section">
        <img src={logo} alt="logo" className="logo"/>
        <h1>WeatherForecast</h1>
      </div>
        
      {/* Thanh tìm kiếm */}
      <SearchBar onSearch={handleSearch} />
      <div className="content">
        <img src={ic_sunny} className="weather-icon"/>

        {/* Hiển thị dữ liệu thời tiết khi người dùng tìm kiếm */}
        {weatherData && (
          <div>
            <p className="temperature">{Math.round(weatherData.main.temp)}°C</p>
            <p className="location">{weatherData.name}</p>

            <div className="weather-data">
              <div className="col">
                <img src={ic_humidity} alt="Humidity Icon"/>
                <div>
                  <p>{weatherData.main.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={ic_wind_speed} alt="Wind Speed Icon"/>
                <div>
                  <p>{weatherData.wind.speed} m/s</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
              {/* <p className="humidity">Humidity: {weatherData.main.humidity}%</p>
              <p className="wind_speed">Wind speed: {weatherData.wind.speed} m/s</p>
            <p className="description">Weather: {weatherData.weather[0].description}</p> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;