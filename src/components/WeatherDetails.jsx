function WeatherDetails({ weather }) {

  return (
    <div className="details">

      <div className="detail-card">
        <h3>💧 Humidity</h3>
        <p>{weather.main.humidity}%</p>
      </div>

      <div className="detail-card">
        <h3>🌪 Wind</h3>
        <p>{weather.wind.speed} km/h</p>
      </div>

      <div className="detail-card">
        <h3>☁ Clouds</h3>
        <p>{weather.clouds.all}%</p>
      </div>

      <div className="detail-card">
        <h3>🌡 Feels Like</h3>
        <p>{weather.main.feels_like}°C</p>
      </div>

    </div>
  );
}

export default WeatherDetails;