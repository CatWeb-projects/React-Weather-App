interface Temp {
  max: number;
  min: number;
}

interface Weather {
  main: string;
}

export interface ForecastData {
  dt: number;
  humidity: number;
  temp: Temp;
  weather: Weather[];
}
