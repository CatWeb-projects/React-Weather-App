import axios from 'axios'

const Key = '886705b4c1182eb1c69f28eb8c520e20'
export const WeatherServices: any = () => {
  return axios
  .get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=Chisinau&cnt=5&units=metric&appid=${Key}`)
  .then(response => { console.log(response.data) })
}

export const DailyWeather: any = () => {
  return axios
  .get(`https://api.openweathermap.org/data/2.5/weather?q=Chisinau&appid=${Key}`)
  .then(response => { console.log(response.data) })
}