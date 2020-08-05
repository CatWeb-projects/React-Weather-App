import axios from 'axios';
import { ForecastData } from 'interfaces';

const { CancelToken } = axios;

const key = '886705b4c1182eb1c69f28eb8c520e20';
export const dailyWeather = {
  cancel: () => {},
  request: () =>
    axios
      .get<{ list: ForecastData[] }>(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=Chisinau&cnt=5&appid=${key}&units=metric`,
        {
          cancelToken: new CancelToken((c) => (dailyWeather.cancel = c))
        }
      )
      .then((response) => response.data)
};
