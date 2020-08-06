import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { DailyObj } from 'ui/molecules/DailyObj/DailyObj';
import { HourlyObj } from 'ui/molecules/HourlyObj/HourlyObj';

export const Weather: React.FC = () => (
  <Router>
    <Switch>
      <>
        <div className="weather-container">
          <Route path="/" exact>
            <div className="weather-container-daily">
              <h2>Daily Forecast</h2>
              <Link to="/hourly">To Hourly</Link>
              <DailyObj />
            </div>
          </Route>
          <Route path="/hourly">
            <div className="weather-container-hourly">
              <div className="hourly">
                <Link to="/">To Daily</Link>
              </div>
              <HourlyObj />
            </div>
          </Route>
        </div>
      </>
    </Switch>
  </Router>
);
