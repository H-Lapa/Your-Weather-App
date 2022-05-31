import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getCurrentWeather } from './api/weather_api.js'
import WeatherCard from '../components/weatherCard'
import { useState, useEffect} from 'react'

export default function Home() {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    get();
  },[]);
  
  async function get(){
    await getCurrentWeather('London').then((res) => {
      console.log('this is res', res);
      console.log('this is arr', res.data.main.temp);
      setWeather(res, ...weather);
    })
  }
  console.log(weather,'is the weather');
  
  return (
    <div>
      {weather.length !== 0 ? (
        <>
        <h1>Hello, {weather.data.main.temp}</h1>
        <WeatherCard obj={weather} />
        </>
      ):(
        <h1>Hello, no weather</h1>
      )}
    </div>
  )
}
