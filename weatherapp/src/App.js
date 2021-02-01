import React, { useState } from 'react';

const API = {
  base: 'http://api.openweathermap.org/data/2.5/',
  key: '21c727b82e39eaf08a1df25f0e24b30e'

}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({})

  const search = event => {
    if (event.key === "Enter") {
      fetch(`${API.base}forecast?q=${query}&cnt=7&units=metric&appid=${API.key}`)
        .then(res => res.json())
        .then(weather => {
          console.log(weather);
          setWeather(weather);
          setQuery('');
        })
    }
  }

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search city..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather != "undefined") ? (
          <div>
            <div className="location">{weather.city.name}, {weather.city.country}</div>
            <div className="weather-box">
              <div className="temperature">{Math.round(weather.list[0].main.temp)} °C</div>
              <div className="weather">Fucking hot</div>
            </div>
          </div>
        ) : ('')}



      </main>

    </div>
  );
}

export default App;
