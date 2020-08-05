import axios from 'axios';
import { ForecastData } from 'interfaces';

const { CancelToken } = axios;

const key = '886705b4c1182eb1c69f28eb8c520e20';
export const hourlyWeather = {
  cancel: () => {},
  request: () =>
    axios
      .get<{ list: ForecastData[] }>(
        `https://api.openweathermap.org/data/2.5/forecast/?q=Chisinau&cnt=5&units=metric&appid=${key}`,
        {
          cancelToken: new CancelToken((c) => (hourlyWeather.cancel = c))
        }
      )
      .then((response) => response.data)
};
