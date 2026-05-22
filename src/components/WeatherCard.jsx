function WeatherCard({ weather }) {

  const condition = weather.weather[0].main;

  const getImage = () => {

    if(condition === "Clouds"){
      return "https://cdn-icons-png.flaticon.com/512/414/414825.png";
    }

    if(condition === "Rain"){
      return "https://cdn-icons-png.flaticon.com/512/1163/1163657.png";
    }

    if(condition === "Clear"){
      return "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    }

    return "https://cdn-icons-png.flaticon.com/512/1779/1779940.png";
  };

  return (
    <div className="weather-card">

      <img src={getImage()} alt="" />

      <h2>{weather.name}</h2>

      <h1>{Math.floor(weather.main.temp)}°C</h1>

      <p>{condition}</p>

    </div>
  );
}

export default WeatherCard;