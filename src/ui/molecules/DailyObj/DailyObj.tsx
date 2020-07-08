import React, { useState, useEffect } from 'react';
import { ForecastData } from 'interfaces';
import { DailyItem } from 'ui/atoms/DailyItem/DailyItem';
import { WeatherServices } from 'WeatherServices/WeatherServices';

interface Props {
  dataEnter: any;
}

export const DailyObj = (props: Props) => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const savedData = await WeatherServices();
      setForecastData(savedData.list);
    };
    getData();
  }, [setForecastData]);

  useEffect(() => {
    setForecastData(props.dataEnter);
  }, [props.dataEnter]);

  return (
    <div className="daily-wrapper">
      {forecastData &&
        forecastData.map((day, key) => (
          <DailyItem dayData={{ day, index: key }} key={day.dt} />
        ))}
    </div>
  );
};
