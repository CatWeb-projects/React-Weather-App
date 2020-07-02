import React from 'react'
import { ForecastData } from '../../../interfaces';

interface DailyItem {
  day: ForecastData;
  index: number
}
 
interface Props {
  dayData: DailyItem;
}

export const DailyItem = (props: Props) => {
  return (
    <div className="daily-wrapper">
      <h3>Today</h3>
      <span>{props.dayData.day.main.temp_max}</span>
      <span>{props.dayData.day.main.temp_min}</span>
      <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt=""/>
      <span>{props.dayData.day.main.humidity}</span>
    </div>
  )
}
