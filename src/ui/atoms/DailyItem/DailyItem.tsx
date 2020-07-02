import React from 'react'
import { ForecastData } from '../../../interfaces';

interface DailyItem {
  day: ForecastData;
  index: number
}
 
interface Props {
  dayData: DailyItem;
}

interface Weather {
  main: string;
  icon: string;
}

const mathRound = (temp: any) => {
  return Math.round(temp)
}

export const DailyItem = (props: Props) => {
  const {temp_max, temp_min, humidity} = props.dayData.day.main
  const {dt} = props.dayData.day
  return (
    <div className="daily-wrapper__holder">
      <h3>{dt}</h3>
      <span>{`${mathRound(temp_max)}°`}</span><br/>
      <span>{`${mathRound(temp_min)}°`}</span>
      <div className="image-holder">
        <img src={`http://openweathermap.org/img/wn/${props.dayData.day.weather[0].icon}@2x.png`} alt=""/>
      </div>
      <span>{humidity}%</span>
    </div>
  )
}
