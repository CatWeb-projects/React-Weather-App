import React, { useEffect, useState } from 'react';
import { ForecastData } from 'interfaces';
import { HourlyItem } from 'ui/atoms/HourlyItem/HourlyItem';
import { HourlyWeather } from 'WeatherServices/WeatherServices';

interface Props {
  hourDataEnter: any;
}

export const HourlyObj = (props: Props) => {
  const [dailyData, setDailyData] = useState<ForecastData[]>([]);

  useEffect(() => {
    const getDailyData = async () => {
      const dailySavedData = await HourlyWeather();
      setDailyData(dailySavedData.list);
    };
    getDailyData();
  }, [setDailyData]);

  useEffect(() => {
    setDailyData(props.hourDataEnter);
  }, [props.hourDataEnter]);

  return (
    <div className="hourly-wrapper">
      {dailyData &&
        dailyData.map((day: ForecastData, key: number) => (
          <HourlyItem hourData={{ day, index: key }} key={day.dt} />
        ))}
    </div>
  );
};
