import { AppError } from "../components/error/AppError"

export default async function fetchDailyWeather(longitude: number, latitude: number){
    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=1`)
        
        if(!res.ok) throw new AppError("Failed to fetch weather", res.status)
        
        const data = await res.json()
        return data
    } 
    catch(err) {
        if(err instanceof AppError) throw err

        throw new AppError("Unknown Error", -1)
    }
}