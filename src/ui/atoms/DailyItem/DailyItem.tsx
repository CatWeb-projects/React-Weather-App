import React from 'react'

const DailyItem: React.FC = () => {
  return (
    <div className="daily-wrapper">
      <h3>Today</h3>
      <span>Max Temp</span>
      <span>Min Temp</span>
      <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt=""/>
      <span>Humidity %</span>
    </div>
  )
}

export default DailyItem