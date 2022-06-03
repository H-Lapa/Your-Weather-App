import styles from '../styles/weathercard.module.css'
import WeatherIcon from './WeatherIcon'

const WeatherCard = ({obj}) => {
    // console.log(obj,'in weather card');
    function upCase (mySentence) {
        const words = mySentence.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        return words.join(" ");
    }

    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = hour + ':' + min;
        return time;
      }

    return (
        <div>
            <div className={styles.card}>
                <div className={styles.flexRow}>
                    <h1 className={styles.location}>{obj.data.name}</h1>
                    <h3 className={styles.range} >{Math.round(obj.data.main.temp_max)} / {Math.round(obj.data.main.temp_min)}</h3>
                </div>

                <div className={styles.flexRow}>
                    <div>

                    <h1 className={styles.temp}>{ Math.round(obj.data.main.temp) }°C</h1>

                    <h2 className={styles.feel}>Feels Like: {Math.round(obj.data.main.feels_like)}</h2>
                    </div>

                    <WeatherIcon code={obj.data.weather[0].icon} WeatherDesc={obj.data.weather[0].desciption} />
                </div>


                <h4 className={styles.desc}>{upCase(obj.data.weather[0].description)}</h4>
                
                <div className={styles.flexRow}>
                    <h4>Humidity: {obj.data.main.humidity}%</h4>
                    <h4>Pressure: {obj.data.main.pressure}mbar</h4>
                </div>

                <div className={styles.flexRow}>
                    <h4 className={styles.wind}>Wind Speed: {obj.data.wind.speed}m/s</h4>
                    <h4 className={styles.wind}>Wind Direction: {obj.data.wind.deg}</h4>
                </div>

                <div className={styles.flexRow}>
                <h4>sunrise: {timeConverter(obj.data.sys.sunrise)}am</h4>
                <h4>sunset: {timeConverter(obj.data.sys.sunset)}pm</h4>
                </div>
            </div>

            
        </div>
    );
}

export default WeatherCard;