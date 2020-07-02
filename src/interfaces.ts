interface Temp {
  max: number;
  min: number;
}

interface Weather {
  main: string;
}

export interface dayData {
  day: ForecastData;
  index: number;
}

interface Main {
  humidity: number;
  temp_max: number;
  temp_min: number;
}
export interface ForecastData {
  dt: number;
  main: Main;
  weather: Weather[];
}
export interface Props {
  data: ForecastData[];
}
