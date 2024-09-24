import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import logo from './img/logo_weather.png'; 
import ic_clear from './img/ic_clear.png';
import ic_cloud from './img/ic_cloud.png';
import ic_scattered_cloud from './img/ic_scattered_cloud.png';
import ic_broken_cloud from './img/ic_broken_cloud.png';
import ic_shower_rain from './img/ic_shower_rain.png';
import ic_rain from './img/ic_rain.png';
import ic_thunderstorm from './img/ic_thunderstorm.png';
import ic_snow from './img/ic_snow.png';
import ic_mist from './img/ic_mist.png';
import ic_humidity from './img/humidity.png';
import ic_wind_speed from './img/wind_speed.png';

const App = () => {
  const apiKey = '987e45f61b95f49300c34ef9b6139656'; 
  
  const [weatherData, setWeatherData] = useState(false);

  const handleSearch = async (city) => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const iconsImg = {
        "01d": ic_clear,
        "01n": ic_clear,
        "02d": ic_cloud,
        "02n": ic_cloud,
        "03d": ic_scattered_cloud,
        "03n": ic_scattered_cloud,
        "04d": ic_broken_cloud,
        "04n": ic_broken_cloud,
        "09d": ic_shower_rain,
        "09n": ic_shower_rain,
        "10d": ic_rain,
        "10n": ic_rain,
        "11d": ic_thunderstorm,
        "11n": ic_thunderstorm,
        "13d": ic_snow,
        "13n": ic_snow,
        "50d": ic_mist,
        "50n": ic_mist,
      };

      const response = await fetch(apiUrl);
      
      const data = await response.json();

      // Kiểm tra nếu có lỗi từ API
      if (!response.ok) {
        alert(`Error: ${data.message}`); // Thông báo lỗi nếu API trả về lỗi
        return;
      }

      const icon = iconsImg[data.weather[0].icon] || ic_clear;

      setWeatherData({
        icon: icon,
        temperature: Math.round(data.main.temp),
        location: data.name,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
        description: data.weather[0].description
      });
    } catch (error) {
      setWeatherData(false);
      alert('Failed to fetch weather data. Please try again.'); // Alert lỗi khi không thể kết nối API
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="app">
      <div className="logo-section">
        <img src={logo} alt="logo" className="logo"/>
        <h1>WeatherApp</h1>
      </div>
        
      {/* Search bar */}
      <SearchBar onSearch={handleSearch} />
      
      {weatherData ? (
        <div className="content">
          <img src={weatherData.icon} className="weather-icon" alt="Weather Icon" />
          <div>
            <p className="temperature">{weatherData.temperature}°C</p>
            <p className="location">{weatherData.location}</p>
  
            <div className="weather-data">
              <div className="col">
                <img src={ic_humidity} alt="Humidity Icon"/>
                <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={ic_wind_speed} alt="Wind Speed Icon"/>
                <div>
                  <p>{weatherData.windSpeed} m/s</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
              <p>Weather: {weatherData.description}</p>
          </div>
        </div>
      ) : (
        <p className="no-data">No data available. Please search for a city.</p>
      )}
    </div>
  );
};

export default App;
