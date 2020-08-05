import React, { useState, useEffect } from 'react';
import { ForecastData } from 'interfaces';
import { DailyItem } from 'ui/atoms/DailyItem/DailyItem';
import { dailyWeather } from 'services/dailyWeather';

export const DailyObj = () => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const savedData = await dailyWeather.request();
        setForecastData(savedData.list);
        setLoading(false);
      } catch (error) {
        console.log('error');
      }
    };
    getData();
    return () => {
      dailyWeather.cancel();
    };
  }, []);

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
