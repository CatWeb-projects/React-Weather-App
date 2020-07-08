import React, { useEffect, useState } from 'react';
import { ForecastData } from 'interfaces';
import { HourlyItem } from 'ui/atoms/HourlyItem/HourlyItem';
import { HourlyWeather } from 'WeatherServices/WeatherServices';

interface Props {
  hourDataEnter: ForecastData[];
}

export const HourlyObj = (props: Props) => {
  const [dailyData, setDailyData] = useState<ForecastData[]>([]);
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    const getDailyData = async () => {
      const dailySavedData = await HourlyWeather();
      setDailyData(dailySavedData.list);
      isLoading(false)
    };
    getDailyData();
  }, [setDailyData]);

  useEffect(() => {
    setDailyData(props.hourDataEnter);
  }, [props.hourDataEnter]);

  return (
    <div className="hourly-wrapper">
      {loading &&<div className="loading">Loading</div>}
      {dailyData &&
        dailyData.map((day: ForecastData, key: number) => (
          <HourlyItem hourData={{ day, index: key }} key={day.dt} />
        ))}
    </div>
  );
};
