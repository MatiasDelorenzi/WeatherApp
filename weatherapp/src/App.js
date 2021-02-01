import React, { useState } from 'react';
import Card from './components/Card.js'

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


  function parseDate(days){
    const date = new Date()
    return date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() 
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
        {(typeof weather.city != "undefined") ? (
          <div className="weather-grid">
            <div className="location">{weather.city.name}, {weather.city.country}</div>
              <div className="grid">
                <Card
                    date="Today"
                    temperature={Math.round(weather.list[0].main.temp) + " °C"}
                    imageUrl={"http://openweathermap.org/img/wn/"+weather.list[0].weather[0].icon+"@2x.png"}
                    weather={weather.list[0].weather[0].main}
                    />
                <Card
                    date="Tomorrow"
                    temperature={Math.round(weather.list[1].main.temp) + " °C"}
                    imageUrl={"http://openweathermap.org/img/wn/"+weather.list[1].weather[0].icon+"@2x.png"}
                    weather={weather.list[1].weather[0].main} 
                    />   
                <Card
                    date={parseDate(2)}                    
                    temperature={Math.round(weather.list[2].main.temp) + " °C"}
                    imageUrl={"http://openweathermap.org/img/wn/"+weather.list[2].weather[0].icon+"@2x.png"}
                    weather={weather.list[2].weather[0].main} 
                    />   
                <Card
                    date={parseDate(3)}
                    temperature={Math.round(weather.list[3].main.temp) + " °C"}
                    imageUrl={"http://openweathermap.org/img/wn/"+weather.list[3].weather[0].icon+"@2x.png"}
                    weather={weather.list[3].weather[0].main} 
                    />  

                <Card
                    date={parseDate(4)}
                    temperature={Math.round(weather.list[4].main.temp) + " °C"}
                    imageUrl={"http://openweathermap.org/img/wn/"+weather.list[4].weather[0].icon+"@2x.png"}
                    weather={weather.list[4].weather[0].main} 
                    />
                <Card
                    date={parseDate(5)}
                    temperature={Math.round(weather.list[5].main.temp) + " °C"}
                    imageUrl={"http://openweathermap.org/img/wn/"+weather.list[5].weather[0].icon+"@2x.png"}
                    weather={weather.list[5].weather[0].main} 
                    />
                <Card
                    date={parseDate(6)}
                    temperature={Math.round(weather.list[6].main.temp) + " °C"}
                    imageUrl={"http://openweathermap.org/img/wn/"+weather.list[6].weather[0].icon+"@2x.png"}
                    weather={weather.list[6].weather[0].main} 
                    />  
              </div>
                       
          </div>
        ) : ('')}



      </main>

    </div>
  );
}

export default App;
