// WeatherApp.js

import React, { useState, useEffect } from 'react';
import weatherService from './weatherService';

const WeatherApp = () => {
  const [location, setLocation] = useState('Colombo,LK');
  const {
    getLatLon,
    currentWeather,
    weatherForecast,
    loadingCurrentWeather,
    loadingWeatherForecast,
    loadingLocation,
    code,
    getCurrentWeather,
    getForecastWeather,
  } = weatherService();

  // useEffect to fetch weather data when the location changes
  useEffect(() => {
    getLatLon(location);
    if (code) {
      console.log(code);
      getCurrentWeather(code);
      getForecastWeather(code);
    }
  }, [location]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-300 to-blue-800'>
      {/* Header */}
      <header
        className='bg-cover bg-center bg-gray-800 p-4 shadow-md flex justify-center items-center'
        style={{ backgroundImage: 'url(src/images/cloud_bg.webp)' }}
      >
        <h1 className='text-3xl font-semibold text-white'>CLOUDMATE</h1>
      </header>

      {/* Main Content */}
      <main className='container mx-auto p-4'>
        {/* Search Bar */}
        <div className='mb-8'>
          <input
            type='text'
            placeholder='Enter location...'
            className='border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full'
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Current Weather */}
        <div className='bg-black bg-opacity-50 p-8 rounded-lg shadow-lg mb-8 flex items-center justify-between'>
          {loadingCurrentWeather || loadingLocation ? (
            <p className='text-white'>Loading...</p>
          ) : (
            <>
              <div>
                <h2 className='text-6xl font-semibold mb-2 text-white'>
                  {currentWeather.name}
                </h2>
                <p className='text-lg text-gray-200'>
                  {currentWeather.sys.country}
                </p>
              </div>
              <div>
                <h2 className='text-6xl font-semibold mb-2 text-white'>
                  {(currentWeather.main.temp - 273.15).toFixed(2)}°C
                </h2>
                <p className='text-lg text-white'>
                  Weather Condition: {currentWeather.weather[0].main}
                </p>
                <div className='flex items-center'>
                  <img
                    src='src/images/humidity.png'
                    alt='Humidity Icon'
                    className='w-6 h-6 mr-2'
                  />
                  <p className='text-lg text-white'>
                    Humidity: {currentWeather.main.humidity}%
                  </p>
                </div>
                <div className='flex items-center'>
                  <img
                    src='src/images/windspeed.png'
                    alt='Wind Speed Icon'
                    className='w-6 h-6 mr-2'
                  />
                  <p className='text-lg text-white'>
                    Wind Speed: {currentWeather.wind.speed}m/s
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Weather Forecast */}
        <div className='bg-black bg-opacity-50 p-8 rounded-lg shadow-lg mb-8'>
          <h2 className='text-2xl font-semibold mb-4 text-white'>
            Weather Forecast
          </h2>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-5'>
            {/* Map over weatherForecast array to display forecast cards */}
            {loadingWeatherForecast || loadingLocation ? (
              <p className='text-white'>Loading forecast...</p>
            ) : (
              weatherForecast.slice(0, 5).map((forecast, index) => (
                <div
                  key={index}
                  className='bg-gradient-to-r from-blue-500 to-blue-900 bg-opacity-80 p-4 rounded-md shadow-md text-white'
                >
                  <p className='text-lg font-semibold'>Day {index + 1}</p>
                  <p>
                    Temperature: {(forecast.main.temp - 273.15).toFixed(2)}°C
                  </p>
                  <p>Humidity: {forecast.main.humidity}%</p>
                  <p>Wind Speed: {forecast.wind.speed} m/s</p>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WeatherApp;
