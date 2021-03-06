import React, { useMemo } from 'react';
import { ForecastData } from 'interfaces';
import { mathRound } from 'libs/number';

interface HourlyItem {
  day: ForecastData;
  index: number;
}

interface Props {
  hourData: HourlyItem;
}

export const HourlyItem = (props: Props) => {
  const [
    { temp, humidity, temp_max, temp_min },
    { main, icon }
  ] = useMemo(() => {
    const { temp, humidity, temp_max, temp_min } = props.hourData.day.main;
    const { main, icon } = props.hourData.day.weather[0];
    return [
      { temp, humidity, temp_max, temp_min },
      { main, icon }
    ];
  }, [props.hourData]);

  return (
    <div className="hourly-wrapper__container">
      <div className="hourly-wrapper__holder">
        <div className="hourly-wrapper__text">
          <span>Chisinau, Moldova Weather</span>
          <span>At {props.hourData.day.dt_txt.substring(11, 16)}</span>
          <span>{`${mathRound(temp)}°`}</span>
          <span>{main}</span>
          <span>{humidity}% chance of rain</span>
        </div>
        <div className="hourly-wrapper__image">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
          <div>
            <span>{`${mathRound(temp_max)}°`}</span>/
            <span>{`${mathRound(temp_min)}°`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
