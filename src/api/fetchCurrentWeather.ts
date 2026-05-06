export default async function fetchCurrentWeather(longitude: number, latitude: number){
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,wind_gusts_10m,snowfall,showers,rain,precipitation,weather_code,cloud_cover,pressure_msl,surface_pressure`)
        const data = res.json()
        return data
    } 
    catch(err) {
        // todo
    }
}