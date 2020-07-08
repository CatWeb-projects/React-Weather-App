import React, { useEffect, useState } from 'react';
import { ForecastData } from 'interfaces';
import { HourlyItem } from '../../atoms/HourlyItem/HourlyItem';

interface Props {
  hourDataEnter: any;
}

export const HourlyObj = (props: Props) => {
  const [dailyData, setDailyData] = useState<ForecastData[]>([]);

  useEffect(() => {
    setDailyData(props.hourDataEnter);
  }, [props]);

  return (
    <div className="hourly-wrapper">
      {dailyData &&
        dailyData.map((day: ForecastData, key: number) => (
          <HourlyItem hourData={{ day, index: key }} key={day.dt} />
        ))}
    </div>
  );
};
