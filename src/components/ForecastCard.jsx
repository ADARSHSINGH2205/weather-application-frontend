function ForecastCard({ item }) {

  return (
    <div className="forecast-card">

      <h3>
        {
          new Date(item.dt_txt).toLocaleDateString(
            "en-US",
            { weekday:"short" }
          )
        }
      </h3>

      <h2>{Math.floor(item.main.temp)}°C</h2>

      <p>{item.weather[0].main}</p>

    </div>
  );
}

export default ForecastCard;