// WeatherApp.js

import React from 'react';

const WeatherApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 to-blue-800">
      {/* Header */}
      <header className="bg-cover bg-center bg-gray-800 p-4 shadow-md flex justify-center items-center" style={{ backgroundImage: 'url(src/images/cloud_bg.webp)' }}>
        <h1 className="text-3xl font-semibold text-white">CLOUDMATE</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Enter location..."
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
          />
        </div>

        {/* Current Weather */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-6xl font-semibold mb-2 text-white">London</h2>
            <p className="text-lg text-gray-200">United Kingdom</p>
          </div>
          <div>
            <h2 className="text-6xl font-semibold mb-2 text-white">25°C</h2>
            <p className="text-lg text-white">Weather Condition: Sunny</p>
            <div className="flex items-center">
              <img src="src/images/humidity.png" alt="Humidity Icon" className="w-6 h-6 mr-2" />
              <p className="text-lg text-white">Humidity: 70%</p>
            </div>
            <div className="flex items-center">
              <img src="src/images/windspeed.png" alt="Wind Speed Icon" className="w-6 h-6 mr-2" />
              <p className="text-lg text-white">Wind Speed: 10 m/s</p>
            </div>
          </div>
        </div>

        {/* Weather Forecast */}
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">Weather Forecast</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {/* Forecast cards for each day */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-900 bg-opacity-80 p-4 rounded-md shadow-md text-white">
              <p className="text-lg font-semibold">Day 1</p>
              <p>Temperature: 20°C</p>
              <p>Humidity: 75%</p>
              <p>Wind Speed: 12 m/s</p>
              {/* You can add more forecast details here */}
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-blue-900 bg-opacity-80 p-4 rounded-md shadow-md text-white">
              <p className="text-lg font-semibold">Day 2</p>
              <p>Temperature: 22°C</p>
              <p>Humidity: 70%</p>
              <p>Wind Speed: 11 m/s</p>
            </div>
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 bg-opacity-80 p-4 rounded-md shadow-md text-white">
              <p className="text-lg font-semibold">Day 3</p>
              <p>Temperature: 23°C</p>
              <p>Humidity: 68%</p>
              <p>Wind Speed: 10 m/s</p>
            </div>
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 bg-opacity-80 p-4 rounded-md shadow-md text-white">
              <p className="text-lg font-semibold">Day 4</p>
              {/* Add forecast details for Day 4 */}
            </div>
            <div className="bg-gradient-to-r from-blue-900 to-blue-900 bg-opacity-80 p-4 rounded-md shadow-md text-white">
              <p className="text-lg font-semibold">Day 5</p>
              {/* Add forecast details for Day 5 */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WeatherApp;
