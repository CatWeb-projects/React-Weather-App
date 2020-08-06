import React, { useMemo, useCallback } from 'react';
import dayjs from 'dayjs';
import { ForecastData } from 'interfaces';
import { mathRound } from 'libs/number';

interface DailyItem {
  day: ForecastData;
  index: number;
}

interface Props {
  dayData: DailyItem;
}

export const DailyItem = (props: Props) => {
  const [{ max, min, day }, { dt, humidity }] = useMemo(() => {
    const { max, min, day } = props.dayData.day.temp;
    const { dt, humidity } = props.dayData.day;
    return [
      { max, min, day },
      { dt, humidity }
    ];
  }, [props.dayData]);

  const getDay = useCallback(() => {
    const newDate = dayjs.unix(dt).date();
    const date = dayjs.unix(dt).day();
    let dayOfWeek = '';
    if (date === 0) dayOfWeek = 'Sun';
    if (date === 1) dayOfWeek = 'Mon';
    if (date === 2) dayOfWeek = 'Tue';
    if (date === 3) dayOfWeek = 'Wed';
    if (date === 4) dayOfWeek = 'Thu';
    if (date === 5) dayOfWeek = 'Fri';
    if (date === 6) dayOfWeek = 'Sat';
    return `${dayOfWeek} ${newDate} `;
  }, []);

  return (
    <div className="daily-wrapper__holder">
      <h3>{getDay()}</h3>
      <span>{`${mathRound(day)}°`}</span>
      <span>{`${mathRound(max)}°/${mathRound(min)}°`}</span>
      <div className="image-holder">
        <img
          src={`http://openweathermap.org/img/wn/${props.dayData.day.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>
      <span>{humidity}%</span>
    </div>
  );
};
