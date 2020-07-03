import React, {useState, useEffect} from 'react'
import {WeatherServices, HourlyWeather} from '../../molecules/WeatherServices/WeatherServices'
import {ForecastData} from '../../../interfaces'
import {DailyObj} from '../../molecules/DailyObj/DailyObj'
import {HourlyObj} from '../../molecules/HourlyObj/HourlyObj'

export const Weather : React.FC = () => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [dailyData, setDailyData] = useState<ForecastData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const savedData = await WeatherServices();
      setForecastData(savedData.list)
      console.log(savedData)
    };
    getData();
  }, [setForecastData]);

  useEffect(() => {
    const getDailyData = async () => {
      const dailySavedData = await HourlyWeather();
      setDailyData(dailySavedData.list)
    };
    getDailyData();
  }, [setDailyData]);

  return (
    <div className="weather-container">
      <div className="weather-container-daily">
        <h2>Daily Forecast</h2>
        <DailyObj dataEnter={forecastData}/>
      </div>
      <div className="weather-container-hourly">
        <HourlyObj hourDataEnter={dailyData}/>
      </div>
    </div>
  )
}
