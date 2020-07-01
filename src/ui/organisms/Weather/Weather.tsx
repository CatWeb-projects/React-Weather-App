import React, {useState, useEffect} from 'react'
import {WeatherServices, DailyWeather} from '../../molecules/WeatherServices/WeatherServices'
import {ForecastData} from '../../../interfaces'
import DailyObj from '../../molecules/DailyObj/DailyObj'

const Weather : React.FC = () => {
  const [forecastData, setForecastData] = useState<ForecastData[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const savedData = await WeatherServices();
      setForecastData(savedData)
    };
    getData();
  }, []);

  useEffect(() => {
    const getDailyData = async () => {
      const dailySavedData = await DailyWeather();
      setForecastData(dailySavedData)
    };
    getDailyData();
  }, []);

  return (
    <div className="weather-container">
      <DailyObj />
    </div>
  )
}

export default Weather