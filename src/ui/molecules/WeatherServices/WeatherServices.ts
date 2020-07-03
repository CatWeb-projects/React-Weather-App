import axios from 'axios'

const Key = '886705b4c1182eb1c69f28eb8c520e20'
export const WeatherServices = () => {
  return axios
  .get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=Chisinau&cnt=5&appid=${Key}&units=metric`)
  .then(response => response.data)
}

export const HourlyWeather = () => {
  return axios
  .get(`https://api.openweathermap.org/data/2.5/forecast/?q=Chisinau&cnt=5&units=metric&appid=${Key}`)
  .then(response => response.data)
}