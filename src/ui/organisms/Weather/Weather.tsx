import React, {useState, useEffect} from 'react'
import {WeatherServices, DailyWeather} from '../../molecules/WeatherServices/WeatherServices'
// import {ForecastData} from '../../../interfaces'
import {DailyObj} from '../../molecules/DailyObj/DailyObj'

export interface ForecastData{

}

const Weather : React.FC = () => {
  const [forecastData, setForecastData] = useState<any>([]);
  const [dailyData, setDailyData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const savedData = await WeatherServices();
      setForecastData(savedData.list)
      console.log(savedData,"dasda")
    };
    getData();
  }, [setForecastData]);

  useEffect(() => {
    const getDailyData = async () => {
      const dailySavedData = await DailyWeather();
      setDailyData(dailySavedData)
    };
    getDailyData();
    // console.log(getDailyData())
  }, [setDailyData]);

  return (
    <div className="weather-container">
      <DailyObj dataEnter={forecastData}/>
    </div>
  )
}

export default Weather