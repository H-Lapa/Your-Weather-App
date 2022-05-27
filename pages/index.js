import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getCurrentWeather } from './api/weather_api.js'

getCurrentWeather('London').then((res) => {
  console.log('res', res);
})

export default function Home() {
  return (
    <h1>Hello</h1>
    
    
    
    
  )
}
