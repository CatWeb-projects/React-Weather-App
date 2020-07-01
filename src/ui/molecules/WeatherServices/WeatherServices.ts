import axios from 'axios'

const Key = '3bc1bd8c1b1fde17643249bb3adaa36c'
export const WeatherServices: any = () => {
  return axios
  .get(`https://api.openweathermap.org/data/2.5/forecast?q=Chisinau&cnt=5&appid=${Key}`)
  .then(response => { console.log(response.data) })
}

export const DailyWeather: any = () => {
  return axios
  .get(`https://api.openweathermap.org/data/2.5/weather?q=Chisinau&appid=${Key}`)
  .then(response => { console.log(response.data) })
}