// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

function getCurrentWeather (location) {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API}`);
}

export {
  getCurrentWeather
}