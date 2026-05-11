import { useEffect, useState } from "react";
import { locationData, currentWeather, currentUnits, DailyWeatherData } from "../types/types";
import fetchSuggestions from "../api/fetchSuggestions";
import fetchCurrentWeather from "../api/fetchCurrentWeather";
import { getWeatherTheme } from "../weather/themes"
import fetchDailyWeather from "../api/fetchDailyWeather";
import { AppError } from "../components/error/AppError";

export function useWeatherData(){
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<AppError | null>(null)
    const [locationData, setLocationData] = useState<locationData | undefined>(undefined)
    const [currentWeather, setCurrentWeather] = useState<{current: currentWeather, current_units: currentUnits} | undefined>(undefined)
    const [dailyWeather, setDailyWeather] = useState<DailyWeatherData | undefined>(undefined)
    const baseLocation = "London" // will fix later on with some sort of storage of the last location searched or a default value

    useEffect(() => {
        const getData = async () => {
            const loc = await getWeatherLocation()
            getWeather(loc.latitude, loc.longitude)
        }
        getData()
    }, [])

    const resetError = () => { setError(null) }

    const getWeatherLocation = async () => {
        try{
            setLoading(true)
            const data = await fetchSuggestions(baseLocation, 1)
            setLocationData(data[0])
            return data[0]
        }
        catch(err){
            if(err instanceof AppError) setError(err)
            else setError(new AppError("Unknown Error", -1))
        }
        finally{
            setLoading(false)
        }
    }

    const getWeather = async (latitude: number, longitude: number) => {
        try {
            setLoading(true)
            const [currentWeather, dailyWeather] = await Promise.all([
                fetchCurrentWeather(longitude, latitude),
                fetchDailyWeather(longitude, latitude)
            ])
            setCurrentWeather(currentWeather)
            setDailyWeather(dailyWeather)
        } 
        catch(err) {
            if(err instanceof AppError) setError(err)
            else setError(new AppError("Unknown Error", -1))
        }
        finally{
            setLoading(false)
        }
    }

    const theme = getWeatherTheme(currentWeather?.current.weather_code ?? 0, currentWeather?.current.is_day ?? 1)

    const handleLocationSelection = (suggestion: locationData) => {
        setLocationData(suggestion)
        getWeather(suggestion.latitude, suggestion.longitude)
    }

    return {locationData, currentWeather, dailyWeather, theme, loading, error, handleLocationSelection, resetError}


}