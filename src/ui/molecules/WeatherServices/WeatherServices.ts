import axios from 'axios'

const Key = '3bc1bd8c1b1fde17643249bb3adaa36c'
export const WeatherServices = () => {
  return axios
  .get(`https://api.openweathermap.org/data/2.5/forecast?q=Chisinau&cnt=5&appid=${Key}&units=metric`)
  .then(response => response.data)
}

export const DailyWeather = () => {
  return axios
  .get(`https://api.openweathermap.org/data/2.5/weather?q=Chisinau&appid=${Key}&units=metric`)
  .then(response => response.data)
}