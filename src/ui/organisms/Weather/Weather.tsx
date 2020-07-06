import React, { useState, useEffect } from 'react';
import {
  WeatherServices,
  HourlyWeather
} from '../../molecules/WeatherServices/WeatherServices';
import { ForecastData } from '../../../interfaces';
import { DailyObj } from '../../molecules/DailyObj/DailyObj';
import { HourlyObj } from '../../molecules/HourlyObj/HourlyObj';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const Weather: React.FC = () => {
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [dailyData, setDailyData] = useState<ForecastData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const savedData = await WeatherServices();
      setForecastData(savedData.list);
    };
    getData();
  }, [setForecastData]);

  useEffect(() => {
    const getDailyData = async () => {
      const dailySavedData = await HourlyWeather();
      setDailyData(dailySavedData.list);
    };
    getDailyData();
  }, [setDailyData]);

  return (
    <Router>
      <Switch>
        <React.Fragment>
          <div className="weather-container">
            <Route path="/" comp={DailyObj} exact>
              <div className="weather-container-daily">
                <h2>Daily Forecast</h2>
                <Link to="/hourly">To Hourly</Link>
                <DailyObj dataEnter={forecastData} />
              </div>
            </Route>
            <Route path="/hourly" comp={HourlyObj}>
              <div className="weather-container-hourly">
                <div className="hourly">
                  <Link to="/">To Daily</Link>
                </div>
                <HourlyObj hourDataEnter={dailyData} />
              </div>
            </Route>
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
};
