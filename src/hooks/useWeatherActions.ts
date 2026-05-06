import { useEffect, useState } from "react";
import { locationData, currentWeather, currentUnits } from "../types/types";
import fetchSuggestions from "../api/fetchSuggestions";
import fetchCurrentWeather from "../api/fetchCurrentWeather";

export function useWeatherData(){
    const [loading, setLoading] = useState<boolean>(false)
    const [locationData, setLocationData] = useState<locationData | undefined>(undefined)
    const [currentWeather, setCurrentWeather] = useState<{current: currentWeather, current_units: currentUnits} | undefined>(undefined)
    const baseLocation = "London" // will fix later on with some sort of storage of the last location searched or a default value

    useEffect(() => {
        const getData = async () => {
            const loc = await getWeatherLocation()
            getCurrentWeather(loc.latitude, loc.longitude)
        }
        getData()
    }, [])

    const getWeatherLocation = async () => {
        try{
            setLoading(true)
            const data = await fetchSuggestions(baseLocation, 1)
            setLocationData(data[0])
            return data[0]
        }
        catch(err){
            // will add actual err handling later
        }
        finally{
            setLoading(false)
        }
    }

    const getCurrentWeather = async (latitude: number, longitude: number) => {
        try {
            setLoading(true)
            const data = await fetchCurrentWeather(longitude, latitude)   
            setCurrentWeather(data)
        } 
        catch(err) {
            
        }
        finally{
            setLoading(false)
        }
    }

    const handleLocationSelection = (suggestion: locationData) => {
        setLocationData(suggestion)
        getCurrentWeather(suggestion.latitude, suggestion.longitude)
    }

    return {locationData, currentWeather, loading, handleLocationSelection}


}