//component produces right icon for weather message

const iconLink = (code) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`;
}

const WeatherIcon = ({code, WeatherDesc}) => {
    return (
        <img src={iconLink(code)} alt={WeatherDesc} />
    )
}

export default WeatherIcon;