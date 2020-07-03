interface Temp {
  max: number;
  min: number;
  day: number;
}

interface Weather {
  main: string;
  icon: string;
}

interface City {
  id: number;
  name: string;
}

export interface dayData {
  day: ForecastData;
  index: number;
}

interface Main {
  humidity: number;
  temp_max: number;
  temp_min: number;
  temp: number;
}
export interface ForecastData {
  temp: Temp;
  dt: number;
  main: Main;
  humidity: number;
  weather: Weather[];
  city: City;
  dt_txt: string;
}
export interface Props {
  data: ForecastData[];
}

