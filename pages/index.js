import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getCurrentWeather } from './api/weather_api.js'
import WeatherCard from '../components/weatherCard'
import { useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'

export default function Home() {
  const [city, setCity] = useState(['London', 'New York', 'Miami', 'Lisbon'])
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    get();
  },[]);
  
  async function get(){
    setWeather([]);
    await city.map((element) => {
      getCurrentWeather(element).then((res) => {
        console.log('this is res', res);
        // console.log('this is arr', res.data.main.temp);
        setWeather(oldObj => [...oldObj, res]);
        // console.log("this is weather", weather);
      })
    });
    
  }
  console.log(weather,'is the weather');
  
  return (
    <div>
      <SearchBar/>
      <div className={styles.gridContainer}>
      {weather.map((item) => {
          return <WeatherCard obj={item} />
        })
      }
      </div>
    </div>
  )
}