import { useState } from "react";

import "./App.css";

import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import ForecastCard from "./components/ForecastCard";
import Loader from "./components/Loader";

function App() {

  // input city
  const [city, setCity] = useState("");

  // weather data
  const [weather, setWeather] = useState(null);

  // forecast data
  const [forecast, setForecast] = useState([]);

  // loading
  const [loading, setLoading] = useState(false);

  // api key
  const API_KEY = "6c1eb72e243061e9f6a372cceb23a722";


  // fetch weather function
  async function fetchWeather() {

    // agar input empty hai
    if(city === ""){
      return;
    }

    // loading start
    setLoading(true);

    // current weather api
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    // json me convert
    const data = await response.json();

    // state me save
    setWeather(data);


    // forecast api
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    // json me convert
    const forecastData = await forecastResponse.json();

    // sirf 5 forecast cards
    const dailyData = forecastData.list.filter((item,index)=>{

  return index % 8 === 0;

});

setForecast(dailyData.slice(0,5));

    // loading stop
    setLoading(false);
  }


  return (

    <div className="app">

      <div className="overlay">

        <h1>🌤 Weather App Pro</h1>


        {/* search component */}
        <SearchBox
          city={city}
          setCity={setCity}
          fetchWeather={fetchWeather}
        />


        {/* loading */}
        {
          loading && <Loader />
        }


        {/* weather data */}
        {
          weather && (

            <>
              
              {/* main weather card */}
              <WeatherCard weather={weather} />


              {/* weather details */}
              <WeatherDetails weather={weather} />


              {/* forecast section */}
              <div className="forecast-container">

                {
                  forecast.map((item,index)=>{

                    return(
                      <ForecastCard
                        key={index}
                        item={item}
                      />
                    );

                  })
                }

              </div>

            </>

          )
        }

      </div>

    </div>

  );
}

export default App;