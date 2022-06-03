//component produces right icon for weather message
import styles from '../styles/weathercard.module.css'

const iconLink = (code) => {
    return `http://openweathermap.org/img/wn/${code}@2x.png`;
}

const WeatherIcon = ({code, WeatherDesc}) => {
    return (
        <img className={styles.img} src={iconLink(code)} alt={WeatherDesc} />
    )
}

export default WeatherIcon;