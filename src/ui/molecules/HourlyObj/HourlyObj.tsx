import React, { useEffect, useState } from 'react';
import { ForecastData } from 'interfaces';
import { HourlyItem } from 'ui/atoms/HourlyItem/HourlyItem';
import { hourlyWeather } from 'services/hourlyWeather';

export const HourlyObj = () => {
  const [dailyData, setDailyData] = useState<ForecastData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDailyData = async () => {
      try {
        const dailySavedData = await hourlyWeather.request();
        setDailyData(dailySavedData.list);
        setLoading(false);
      } catch (error) {
        console.log('error');
      }
    };
    getDailyData();
    return () => {
      hourlyWeather.cancel();
    };
  }, []);

  return (
    <div className="hourly-wrapper">
      {loading && <div className="loading">Loading...</div>}
      {dailyData &&
        dailyData.map((day, key) => (
          <HourlyItem hourData={{ day, index: key }} key={day.dt} />
        ))}
    </div>
  );
};
