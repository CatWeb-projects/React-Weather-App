import React, {useState, useEffect} from 'react'
import {WeatherServices, DailyWeather} from '../../molecules/WeatherServices/WeatherServices'
import {ForecastData} from '../../../interfaces'

const Weather : React.FC = () => {
  const [forecastData, setForecastData] = useState<ForecastData[] | null>(null);
  const [dailyData, setdailyData] = useState<ForecastData[] | null>(null);

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
      setdailyData(dailySavedData)
    };
    getDailyData();
  }, []);

  return (
    <div className="weather-container">
      <div className="weather-div">
        <h3 className="weather__title">Daily Weather</h3>
        {forecastData} {dailyData}
      </div>
  </div>
  )
}

export default Weather