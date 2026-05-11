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

export type DailyWeatherData = {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number

    daily_units: {
        time: string
        weather_code: string
        temperature_2m_max: string
        temperature_2m_min: string
    }

    daily: {
        time: string[]
        weather_code: number[]
        temperature_2m_max: number[]
        temperature_2m_min: number[]
    }
}

export type WeatherApiResponse = {
    latitude: number
    longitude: number
    generationtime_ms: number
    utc_offset_seconds: number
    timezone: string
    timezone_abbreviation: string
    elevation: number

    hourly_units: {
        time: string
        temperature_2m: string
    }

    hourly: {
        time: string[]
        temperature_2m: number[]
    }
}

export type WeatherTheme = {
  background: any
  textColor: string
  secondaryTextColor: string
  inputBackground: string
  inputTextColor: string
  statusBarStyle: "light" | "dark"
}

export type ViewableData = {
  weatherLabel: string
}