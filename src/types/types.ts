export type locationData = {
    "id": number,
    "name": string,
    "latitude": number,
    "longitude": number,
    "elevation": number,
    "feature_code": string,
    "country_code": string,
    "admin1_id": number,
    "admin2_id": number,
    "admin3_id": number,
    "admin4_id": number,
    "timezone": string,
    "population": number,
    "postcodes": string[]
    "country_id": number,
    "country": string,
    "admin1": string,
    "admin2": string,
    "admin3": string,
    "admin4": string
}

export type currentWeather = {
  apparent_temperature: number;
  cloud_cover: number;
  interval: number;
  is_day: number;
  precipitation: number;
  pressure_msl: number;
  rain: number;
  relative_humidity_2m: number;
  showers: number;
  snowfall: number;
  surface_pressure: number;
  temperature_2m: number;
  time: string;
  weather_code: number;
  wind_direction_10m: number;
  wind_gusts_10m: number;
  wind_speed_10m: number;
};

export type currentUnits = {
  apparent_temperature: string;
  cloud_cover: string;
  interval: string;
  is_day: string;
  precipitation: string;
  pressure_msl: string;
  rain: string;
  relative_humidity_2m: string;
  showers: string;
  snowfall: string;
  surface_pressure: string;
  temperature_2m: string;
  time: string;
  weather_code: string;
  wind_direction_10m: string;
  wind_gusts_10m: string;
  wind_speed_10m: string;
};

export type WeatherTheme = {
  background: any
  textColor: string
  secondaryTextColor: string
  inputBackground: string
  inputTextColor: string
  statusBarStyle: "light" | "dark"
}