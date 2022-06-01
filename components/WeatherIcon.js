//component produces right icon for weather message

const iconLink = (code) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`;
}

const getCode = (WeatherDesc, sunset) => {
    let code = "";
    switch(WeatherDesc) {
        case "clear sky":
          code = "01";
          break;
        case "few clouds":
            code = "02";
          break;
        case "scattered clouds":
            code = "03";
          break;
        case "broken clouds":
        case "overcast clouds":
            code = "04";
          break;
        case "shower rain":
            code = "09";
          break; 
        case "rain":
            code = "10";
          break;
        case "thunderstorm":
            code = "11";
          break;
        case "snow":
            code = "13";
          break;
        case "mist":
            code = "50";
          break;
    }

    if (new Date() > sunset) {
        code += "n";
    } else {
        code += "d";
    }

    return code;
}

const WeatherIcon = ({WeatherDesc, sunset}) => {
    return (
        <img src={iconLink(getCode(WeatherDesc, sunset))} alt={WeatherDesc} />
    )
}

export default WeatherIcon;