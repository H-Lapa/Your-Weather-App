// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

async function getCurrentWeather(location) {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=89e4bc1fe6d1e59b2d9cad9147c51e5e&units=metric`);
}

export {
    getCurrentWeather
}