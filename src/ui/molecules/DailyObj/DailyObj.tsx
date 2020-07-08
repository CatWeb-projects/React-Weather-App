import React, { useState, useEffect } from 'react';
import { ForecastData } from 'interfaces';
import { DailyItem } from '../../atoms/DailyItem/DailyItem';

interface Props {
  dataEnter: any;
}

export const DailyObj = (props: Props) => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);

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
