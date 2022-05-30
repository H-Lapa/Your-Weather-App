const WeatherCard = ({obj}) => {
    console.log(obj,'in weather card');
    return ( 
    <h1 > { obj.data.main.temp } </h1>
    );
}

export default WeatherCard;