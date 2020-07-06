import React, { useState, useEffect } from 'react';
import { DailyItem } from '../../atoms/DailyItem/DailyItem';
import { ForecastData } from '../../../interfaces';

interface Props {
  dataEnter: any;
}

export const DailyObj = (props: Props) => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);

  useEffect(() => {
    setForecastData(props.dataEnter);
  }, [props]);

  return (
    <div className="daily-wrapper">
      {forecastData &&
        forecastData.map((day: ForecastData, key: number) => (
          <DailyItem dayData={{ day, index: key }} key={day.dt} />
        ))}
    </div>
  );
};
