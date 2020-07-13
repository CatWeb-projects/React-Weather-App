import React, { useState, useEffect } from 'react';
import { ForecastData } from 'interfaces';
import { DailyItem } from 'ui/atoms/DailyItem/DailyItem';
import { WeatherServices } from 'WeatherServices/WeatherServices';

interface Props {
  dataEnter: ForecastData[];
}

export const DailyObj = (props: Props) => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const savedData = await WeatherServices.request();
        setForecastData(savedData.list);
        isLoading(false);
      } catch (error) {
        console.log('error', error);
      }
    };
    getData();
    return () => {
      WeatherServices.cancel();
    };
  }, []);

  useEffect(() => {
    setForecastData(props.dataEnter);
  }, [props.dataEnter]);

  return (
    <div className="daily-wrapper">
      {loading && <div className="loading">Loading...</div>}
      {forecastData &&
        forecastData.map((day, key) => (
          <DailyItem dayData={{ day, index: key }} key={day.dt} />
        ))}
    </div>
  );
};
