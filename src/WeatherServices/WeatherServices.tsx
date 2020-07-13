import axios from 'axios';
import { ForecastData } from 'interfaces';

const { CancelToken } = axios;

const key = '886705b4c1182eb1c69f28eb8c520e20';
export const WeatherServices = {
  cancel: () => {},
  request: () =>
    axios
      .get<{ list: ForecastData[] }>(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=Chisinau&cnt=5&appid=${key}&units=metric`,
        {
          cancelToken: new CancelToken((c) => (WeatherServices.cancel = c))
        }
      )
      .then((response) => response.data)
};

export const HourlyWeather = {
  cancel: () => {},
  request: () =>
    axios
      .get<{ list: ForecastData[] }>(
        `https://api.openweathermap.org/data/2.5/forecast/?q=Chisinau&cnt=5&units=metric&appid=${key}`,
        {
          cancelToken: new CancelToken((c) => (HourlyWeather.cancel = c))
        }
      )
      .then((response) => response.data)
};
