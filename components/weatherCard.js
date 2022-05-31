const WeatherCard = ({obj}) => {
    console.log(obj,'in weather card');
    return (
        <div>
            <h1 > Temp: { obj.data.main.temp } </h1>
            <h2>Feels Like: {obj.data.main.feels_like }</h2>
            <h3>range {obj.data.main.temp_max} / {obj.data.main.temp_min } </h3>
            <h4>humidity: {obj.data.main.humidity} , pressure: {obj.data.main.pressure} </h4>
            <h4>description: {obj.data.weather[0].description} </h4>
            <h4>wind: degree {obj.data.wind.deg} speed {obj.data.wind.speed} </h4>
            <h4>sunrise: {Date(obj.data.sys.sunrise)}, sunset: {obj.data.sys.sunset} </h4>
        </div>
    );
}

export default WeatherCard;